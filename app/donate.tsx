import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
  FlatList,
  Platform,
  ActivityIndicator, // Import ActivityIndicator
  Alert, // Import Alert from React Native
  TextInput, // Import TextInput for custom amount input
} from "react-native";

import donateStyles from "@/app/style/dontate-styles";
import {
  initPaymentSheet,
  presentPaymentSheet,
} from "@/providers/stripe/stripeFunctions";
import { createPaymentIntentClientSecret } from "@/app/utils/helpers";

import { StripeProvider } from "@/providers/stripe/stripe.native";
///kkkk
import { useRouter, useNavigation } from "expo-router";

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState(25);
  const [donationCategory, setDonationCategory] = useState(null);
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state

  //added
  const isCustomAmount = selectedAmount === "Other";
  const [customAmount, setCustomAmount] = useState("");


  const router = useRouter();
const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "", // Remove the header title text
    });
  }, [navigation]);

  async function pay() {
  // Validate inputs
  if (!donationCategory) {
    Alert.alert("Please select a donation category");
    return;
  }

  // Determine amount
  const amountToCharge = selectedAmount === "Other" 
    ? parseFloat(customAmount) || 0 
    : selectedAmount;

  if (amountToCharge <= 0) {
    Alert.alert("Please enter a valid amount");
    return;
  }

  setIsLoading(true);

  try {
    // 1. Create Payment Intent on your backend
    const { clientSecret, customer } = await createPaymentIntentClientSecret({
      amount: Math.round(amountToCharge * 100), // in cents
      currency: 'cad',
      metadata: {
        donation_category: donationCategory,
      },
    });

    if (!clientSecret) {
      throw new Error("Failed to create payment intent");
    }

    // 2. Initialize Payment Sheet
    const { error: initError } = await initPaymentSheet({
      paymentIntentClientSecret: clientSecret,
      merchantDisplayName: "Your Organization",
      customerId: customer,
      allowsDelayedPaymentMethods: false, // Set to true if you accept delayed payment methods
      style: 'alwaysDark', // or 'alwaysLight', 'automatic'
      appearance: {
        colors: {
          primary: '#D4AF37', // Your gold color
          background: '#ffffff',
          componentBackground: '#f8f8f8',
          componentBorder: '#D4AF37',
        },
        shapes: {
          borderRadius: 8,
          borderWidth: 1,
        }
      },
      defaultBillingDetails: {
        name: 'Donor', // You could collect this earlier
      },
    });

    if (initError) {
      throw initError;
    }

    // 3. Present Payment Sheet
    const { error: paymentError } = await presentPaymentSheet();

    if (paymentError) {
      // Handle specific error cases
      if (paymentError.code === 'Canceled') {
        // User canceled the payment
        return;
      }
      throw paymentError;
    }

    // 4. Payment succeeded
    router.navigate('completion', {
      amount: amountToCharge,
      category: donationCategory,
    });

  } catch (error) {
    console.error('Payment error:', error);
    Alert.alert(
      'Payment Error',
      error.message || 'There was an error processing your payment'
    );
  } finally {
    setIsLoading(false);
  }
}

  const donationAmounts = [10, 25, 50, 100, 250, "Other"];
  const donationCategories = ["General Fund", "Ramadhan Fund"];

  return (
    <View style={donateStyles.container}>
      <ScrollView>
        {/* Header section with Donate title */}
        <View style={donateStyles.sectionHeader}>
          <Text style={donateStyles.title}>Donate</Text>
        </View>

        {/* Main form container */}
        <View style={styles.formContainer}>
          {/* Donation category dropdown selector */}
          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setCategoryModalVisible(true)}
          >
            <Text>
              {donationCategory ? donationCategory : "Select donation Category"}
            </Text>
          </TouchableOpacity>
          
          {/* Amount display - shows selected amount or custom amount if "Other" is selected */}
          <Text style={styles.amountTitle}>
            $ {selectedAmount === "Other" ? customAmount || "0.00" : selectedAmount}
          </Text>
          
          {/* Container for the amount selection buttons */}
          <View style={styles.amountButtonsContainer}>
            {donationAmounts.map((amount) => (
              <TouchableOpacity
                key={amount}
                style={[
                  styles.amountButton,
                  // Highlight if this amount is selected or if it's "Other" and custom amount is active
                  (selectedAmount === amount || 
                   (amount === "Other" && selectedAmount === "Other")) && 
                  styles.selectedAmountButton,
                ]}
                onPress={() => {
                  setSelectedAmount(amount);
                  // Clear custom amount if switching back to preset amount
                  if (amount !== "Other") {
                    setCustomAmount("");
                  }
                }}
              >
                <Text
                  style={[
                    styles.amountButtonText,
                    // Apply selected text style if this amount is selected
                    (selectedAmount === amount || 
                     (amount === "Other" && selectedAmount === "Other")) &&
                    styles.selectedAmountButtonText,
                  ]}
                >
                  {typeof amount === "string" ? amount : `$${amount}`}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Custom amount input field - only shown when "Other" is selected */}
          {selectedAmount === "Other" && (
            <TextInput
              style={styles.customAmountInput}
              keyboardType="numeric"
              placeholder="Enter custom amount"
              value={customAmount}
              onChangeText={(text) => {
                // Input validation - only allow numbers and decimal point
                const cleanedText = text.replace(/[^0-9.]/g, '');
                setCustomAmount(cleanedText);
              }}
              // Auto-focus the input when it appears
              autoFocus={true}
            />
          )}

          {/* Payment processing indicator or donate button */}
          {isLoading ? (
            // Show loading spinner during payment processing
            <ActivityIndicator size="large" color="#D4AF37" />
          ) : (
            // Donate button
            <TouchableOpacity style={styles.payButton} onPress={pay}>
              <Text style={styles.payButtonText}>DONATE</Text>
            </TouchableOpacity>
          )}

          {/* iOS-specific note about ApplePay */}
          {Platform.OS === "ios" && (
            <Text style={styles.note}>
              Please note: ApplePay must be enabled in order to donate.{" "}
              <Text style={styles.link}>How to setup ApplePay →</Text>
            </Text>
          )}
        </View>
      </ScrollView>

      {/* Modal for selecting donation category */}
      <Modal
        transparent={true}
        visible={categoryModalVisible}
        animationType="slide"
        onRequestClose={() => setCategoryModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* List of donation categories */}
            <FlatList
              data={donationCategories}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    setDonationCategory(item);
                    setCategoryModalVisible(false);
                  }}
                >
                  <Text style={styles.modalItem}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            {/* Modal close button */}
            <TouchableOpacity onPress={() => setCategoryModalVisible(false)}>
              <Text style={styles.modalCancel}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    padding: 16,
  },
  amountTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
  },
  amountButtonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  amountButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#D4AF37",
    borderRadius: 5,
    margin: 5,
  },
  selectedAmountButton: {
    backgroundColor: "#c99d2d",
  },
  amountButtonText: {
    fontSize: 16,
  },
  selectedAmountButtonText: {
    color: "#fff",
  },
  dropdown: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  payButton: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 5,
    marginVertical: 20,
    alignItems: "center",
  },
  payButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  note: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
  },
  link: {
    color: "#007AFF",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    width: "80%",
  },
  modalItem: {
    padding: 15,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  modalCancel: {
    padding: 15,
    fontSize: 18,
    textAlign: "center",
    color: "red",
  },
});

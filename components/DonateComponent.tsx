import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Linking,
} from "react-native";
import { useRouter, useNavigation, Link } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";

const DonateComponent = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = useState(false);

  const handleDonatePress = () => {
    Linking.openURL("https://almahdi.breezechms.com/give/online");
    console.log("Donate Pressed");
  };

  return (
    <View>
      <TouchableOpacity
        onPress={handleDonatePress}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        style={[styles.donateButton, isPressed && styles.donateButtonPressed]}
        activeOpacity={1} // This removes the opacity change on press
      >
        <Text style={styles.buttonText}>
          Donate <FontAwesome5 name="angle-right" size={14} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  donateButton: {
    position: "absolute",
    bottom: 16,
    right: 16,
    backgroundColor: "#c99d2d",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 40,
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  donateButtonPressed: {
    backgroundColor: "#c99d2d",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "500",
    letterSpacing: 0.6,
  },
});

export default DonateComponent;

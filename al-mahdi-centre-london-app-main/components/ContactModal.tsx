import React from "react";
import {
  View,
  Text,
  Modal,
  Pressable,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from "react-native";

const ContactModal = ({ visible, onClose }) => {
  const handleLinkPress = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable style={styles.modalContainer} onPress={onClose}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Contact Al-Mahdi Islamic Center</Text>

          {/* Website Link */}
          <TouchableOpacity
            onPress={() => handleLinkPress("https://almahdicentre.org")}
          >
            <View style={styles.linkContainer}>
              <Text style={styles.modalLink}>
                Website →
              </Text>
            </View>
          </TouchableOpacity>

          {/* Email Link */}
          <TouchableOpacity
            onPress={() =>
              handleLinkPress("mailto:secretariat@almahdicentre.org")
            }
          >
            <View style={styles.linkContainer}>
              <Text style={styles.modalLink}>
                Email →
              </Text>
            </View>
          </TouchableOpacity>

          {/* Email Link */}
          <TouchableOpacity
            onPress={() =>
              handleLinkPress("tel:2266674534")
            }
          >
            <View style={styles.linkContainer}>
              <Text style={styles.modalLink}>
                Office Phone →
              </Text>
            </View>
          </TouchableOpacity>
          {/* Email Link */}
          <TouchableOpacity
            onPress={() =>
              handleLinkPress("tel:5197025752)")
            }
          >
            <View style={styles.linkContainer}>
              <Text style={styles.modalLink}>
                Funeral Services: Br. Ahmad Samhat →
              </Text>
            </View>
          </TouchableOpacity>

          {/* Email Link */}
          <TouchableOpacity
            onPress={() =>
              handleLinkPress("tel:5197029390")
            }
          >
            <View style={styles.linkContainer}>
              <Text style={styles.modalLink}>
                Funeral Services: Br. Nazih Mroue →
              </Text>
            </View>
          </TouchableOpacity>

          {/* Address Link with Google Maps */}
          <TouchableOpacity
            onPress={() =>
              handleLinkPress(
                "https://www.google.com/maps/search/?api=1&query=91+Meg+Drive,+London,+Ontario,+N6E+2V2"
              )
            }
          >
            <View style={styles.linkContainer}>
              <Text style={styles.modalLink}>Location & Directions →</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "95%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 14,
    color: "gray",
    fontWeight: "400",
    marginBottom: 15,
    paddingTop: 12,
  },
  linkContainer: {
    borderTopColor: "#eee",
    borderTopWidth: 1,
    width: "100%",
    paddingTop: 15,
  },
  modalLink: {
    fontSize: 16,
    color: "#007aff",
    textAlign: "center",
    fontWeight: "500",
    paddingBottom: 20,
  },
});

export default ContactModal;

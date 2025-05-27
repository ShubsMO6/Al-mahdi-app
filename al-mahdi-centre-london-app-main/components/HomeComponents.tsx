import React, { useState } from "react";
import { Pressable, Image, Text, View, Linking } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "@/app/style/HomeScreenStyles";
import ContactModal from "@/components/ContactModal";
import { Link } from "expo-router";

export const Box = ({ text, iconName, onPress }) => (
  <Pressable style={styles.box} onPress={onPress}>
    <View style={styles.boxContent}>
      <FontAwesome5
        style={styles.icon}
        name={iconName}
        size={30}
        color="#fff"
      />
      <Text style={styles.boxText}>{text}</Text>
    </View>
  </Pressable>
);

export const SahifaBox = ({ text, onPress }) => (
  <Pressable style={styles.box} onPress={onPress}>
    <View style={styles.boxContent}>
      <Image
        source={require("@/assets/images/shafia.png")}
        style={styles.sahifaimage}
        resizeMode="contain"
      />
      <Text style={styles.boxText}>{text}</Text>
    </View>
  </Pressable>
);

export const BoxSection = ({ router, openPortal }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.boxSectionWrap}>
      <View style={styles.boxSection}>
        <Box
          text="Times"
          iconName="clock"
          onPress={() => router.push("times")}
        />
        <Box
          text="Events"
          iconName="mosque"
          onPress={() => router.push("events")}
        />
        <Box
          text="Live"
          iconName="video"
          onPress={() => router.push("live")}
        />
        <Box
          text="Calendar"
          iconName="calendar-alt"
          onPress={() => router.push("calendar")}
        />
        <Box
          text="News"
          iconName="newspaper"
          onPress={() => router.push("news")}
        />
        <Box text="Portal" iconName="book" onPress={openPortal} />

        <Box
          text="Contact"
          iconName="envelope"
          onPress={() => setModalVisible(true)}
        />
        <Box
          text="Settings"
          iconName="cog"
          onPress={() => router.push("settings")}
        />
      </View>
      <ContactModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

export const SectionHeader = ({ icon, title }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.title}>
      <Icon name={icon} size={17} color="#4b5568" /> {title}
    </Text>
  </View>
);

export const NewsItem = ({ title, date }) => (
  <View style={styles.post}>
    <Text style={styles.postTitle}>{title}</Text>
    <Text style={styles.postDate}>{date}</Text>
  </View>
);

export const EventItem = ({ title, date }) => (
  <View style={styles.event}>
    <Text style={styles.eventTitle}>{title}</Text>
    <Text style={styles.eventDate}>{date}</Text>
  </View>
);

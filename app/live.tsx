import React from "react";
import {
  View,
  ScrollView,
  Text,
  Pressable,
  Linking,
  StyleSheet,
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import style from "@/app/style/live-styles";
import { useRouter, useNavigation } from "expo-router";
export default function HomeScreen() {
  const router = useRouter();
const navigation = useNavigation();
React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "", // Remove the header title text
    });
  }, [navigation]);

  const openYouTube = () => {
    Linking.openURL(
      "https://www.youtube.com/c/AlMahdiIslamicCommunityCentreLondon?themeRefresh=1"
    );
  };

  return (
    <View style={style.container}>
      <ScrollView>
        <View style={style.sectionHeader}>
          <Text style={style.title}>Watch Live</Text>
          <Text style={style.subtitle}>
            If you have any technical difficulties, please SMS the ALMAHDICENTRE
            IT team at 516-430-7977
          </Text>
        </View>
        <View style={style.youtubewrap}>
          <View style={style.youtubewrapIN}>
            <Text style={style.youbutetitle}>Main Hall</Text>

            <Pressable onPress={openYouTube} style={style.youtubeButton}>
              <Icon name="logo-youtube" style={style.youtubeIcon} />
              <Text style={style.youtubeText}>Al-Mahdi Islamic Centre</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

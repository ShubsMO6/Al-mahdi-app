import { StyleSheet } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  sahifaimage: {
    width: 26,
    height: 26,
    marginTop: 0,
  },
  logo: {
    width: wp("100%"),
    height: hp("14%"),
    // margin: "auto",
    alignSelf: "center",
    marginBottom: 8,
    marginTop: 10,
  },
  logoWrap: {
    borderBottomWidth: 0,
    width: "100%",
    borderColor: "#001d3d",
  },

  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  boxSectionWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 14,
  },
  boxSection: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 5,
    width: "90%",
  },
  box: {
    width: "23%", // Slightly less than 25% to account for margins
    backgroundColor: "#c99d2d",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10, // Add some bottom margin for spacing between rows
    borderRadius: 5,
    paddingVertical: 20,
    // iOS shadow properties
    shadowColor: "#bababa",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    // Android shadow properties
    elevation: 5,
  },
  boxContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  boxText: {
    fontFamily: "RobotoRegular",
    marginTop: 10,
    textAlign: "center",
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: 900,
    fontSize: 11,
    lineHeight: 16,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  postDate: {
    fontSize: 13,
    color: "#999999",
    marginTop: 5,
  },
  stepContainer: {
    marginBottom: 8,
  },
  reactLogo: {
    height: 79,
    width: 130,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
    backgroundColor: "#fff",
    borderBottomColor: "#278c27",
  },
  scrollContent: {
    paddingBottom: 20,
  },
  content: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: 300,
  },
  eventswrap: {
    paddingBottom: 50,
    backgroundColor: "#fff",
    width: "95%",
    // margin: "auto",
    alignSelf: "center",
    marginBottom: 20,
    // iOS shadow properties
    shadowColor: "#bababa", // Shadow color
    shadowOffset: { width: 3, height: 3 }, // Shadow offset
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 5, // Shadow blur radius
    // Android shadow properties (elevation is only for Android)
    elevation: 5, // Elevation adds shadow on Android
  },
  news: {
    paddingBottom: 0,
    backgroundColor: "#fff",
    width: "95%",
    // margin: "auto",
    alignSelf: "center",
    marginBottom: 20,
    // iOS shadow properties
    shadowColor: "#bababa", // Shadow color
    shadowOffset: { width: 3, height: 3 }, // Shadow offset
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 5, // Shadow blur radius
    // Android shadow properties (elevation is only for Android)
    elevation: 5, // Elevation adds shadow on Android
  },
  headerContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#0000ff",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  bannerWrap: {
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  banner: {
    width: "95%",
    borderRadius: 10,
    overflow: "hidden",
  },
  scrollContainer: {
    marginBottom: 60,
  },
  title: {
    backgroundColor: "#f7f1e5",
    fontFamily: "RobotoBold",
    lineHeight: 18,
    width: "100%",
    color: "#4b5568",
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 10,
    marginBottom: 5,
    marginTop: 5,
    fontSize: 18,
    borderRadius: 5,
    elevation: 0,
    fontWeight: 900,
  },
  newsText: {
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 24,
  },
  post: {
    marginBottom: 20,
    backgroundColor: "#ffffff",
    padding: 0,
    borderRadius: 8,
    fontFamily: "RobotoRegular",
    elevation: 0,
    textAlign: "left",
    paddingLeft: 15,
    paddingRight: 15,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#333",
    paddingLeft: 15,
  },
  noevents: {
    textAlign: "center",
    marginBottom: 25,
    fontSize: 18,
  },
  eventDate: {
    fontSize: 15,
    color: "#666",
    marginBottom: 10,
    paddingLeft: 15,
  },
  postDescription: {
    fontFamily: "RobotoRegular",
    fontSize: 14,
    marginTop: 5,
    color: "#666",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconPlaceholder: {
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 0,
  },
  icon: {
    marginTop: 0,
  },
  iconText: {
    fontSize: 16,
    fontFamily: "RobotoBold",
    color: "#fff",
    fontWeight: 900,
  },
});

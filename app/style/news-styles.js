import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  news: {
    flex: 1,
    backgroundColor: "#fff",
  },
  sectionHeader: {
    backgroundColor: "#c99d2d",
    alignItems: "center",
    marginBottom: 10,
    paddingBottom: 70,
    paddingTop: 30,
  },
  title: {
    fontFamily: "RobotoRegular",
    color: "#fff",
    textAlign: "center",
    fontSize: 24,
    marginBottom: 10,
  },
  postWrap: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: "90%",
    //margin: "auto",
    alignSelf: "center",
    borderRadius: 5,
    marginTop: -50,
    backgroundColor: "#fff",
  },
  post: {
    marginBottom: 20,
    backgroundColor: "#ffffff",
    padding: 0,
    borderRadius: 8,
  },
  postBoxText: {
    fontFamily: "RobotoBold",
    fontSize: 16,
    color: "#333",
    fontWeight: 900,
    textAlign: "left",
  },
  postTitle: {
    fontSize: 20,
    fontWeight: 500,
    color: "#000",
  },
  postDate: {
    fontSize: 12,
    color: "#999999",
    marginTop: 10,
  },
});

export default styles;

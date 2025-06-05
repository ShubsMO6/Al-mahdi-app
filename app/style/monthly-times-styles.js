import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignItems: "center",
    width: "100%",
  },
  buttonWrap: {
    paddingBottom: 85,
    backgroundColor: "#c99d2d",
    width: "100%",
  },
  todayButtonText: {
    paddingTop: 10,
    paddingBottom: 0,
    fontSize: 18,
    color: "#fff",
    lineHeight: 18,
  },
  timesWrap: {
    width: "100%",
    // iOS shadow properties
    shadowColor: "#bababa",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    // Android shadow properties
    elevation: 5,
    backgroundColor: "#fff",
    marginTop: 15,
    maxWidth: "90%",
    borderRadius: 5,
  },
  mtButton: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  dateAndEvent: {
    textAlign: "center",
    paddingRight: 40,
    width: "50%",
  },
  dateAndEventText: {
    color: "#fff",
    fontSize: 15,
  },
  callendar: {
    width: "95%",
    marginTop: -55,
  },

  sectionHeaderWrap: {
    paddingBottom: 60,
    paddingTop: 20,
    backgroundColor: "#c99d2d",
    width: "100%",
  },
  sectionSubHeader: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 700,
    backgroundColor: "#f5f3f4",
    padding: 20,
    width: "100%",
  },
  sectionSubHeaderWrap: {
    padding: 0,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000", // Boja senke
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.55,
    shadowRadius: 20,
    elevation: 5,
    marginVertical: 40,
    paddingBottom: 55,
  },
  monthYear: {
    color: "#000",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
    //margin: "auto",
    alignSelf: "center",
    backgroundColor: "#eeeeee",
    width: "100%",
  },
  arrowText: {
    color: "#fff",
    fontSize: 33,
    margin: 10,
  },
  todayButtonPressable: {
    backgroundColor: "#c99d2d",
    borderRadius: 5,
    borderWidth: 3,
    borderColor: "#fff",
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  todayButton: {
    fontSize: 45,
    color: "#fff",
    backgroundColor: "#001d3d",
    paddingHorizontal: 40,
    paddingTop: 12,
    paddingBottom: 22,
    alignSelf: "flex-end",
    marginRight: 20,
  },

  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  sectionContent: {
    paddingBottom: 85,
    backgroundColor: "#c99d2d",
    width: "100%",
  },
  sectionHeader: {
    backgroundColor: "#c99d2d",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 20,
    width: "100%",
  },
  title: {
    fontFamily: "RobotoRegular",
    width: "100%",
    color: "#fff",
    textAlign: "center",
    padding: 10,
    marginBottom: 15,
    marginTop: 15,
    fontSize: 28,
    borderRadius: 5,
    elevation: 0,
  },
});

export default styles;

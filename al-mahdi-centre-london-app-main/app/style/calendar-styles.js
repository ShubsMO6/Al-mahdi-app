import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignItems: "center",
    width: "100%",
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
  dateAndEventTextWrap: {
    marginTop: 20,
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
  sectionSubHeaderWrapTop: {
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    marginTop: 10,
  },
  importantDateAndEventText: {
    color: "#000",
    paddingHorizontal: 32,
    paddingVertical: 12,
  },
  sectionSubHeaderWrap: {
    padding: 0,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 0,
  },
  monthYear: {
    color: "#fff",
    textAlign: "center",
    //margin: "auto",
    alignSelf: "center",
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
    fontSize: 22,
    color: "#fff",
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

import { Dimensions, StyleSheet } from "react-native";
import { colors, fontFamily, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
  container: { height: sizes.screenHeight, backgroundColor: colors.white },
  tabView: {
    width: sizes.screenWidth * 0.75,
    alignSelf: "center",
    flexDirection: "row",
    paddingBottom: sizes.screenHeight * 0.01,
  },
  tabBtn: {
    width: sizes.screenWidth * 0.25,
  },
  btnText: {
    textAlign: "center",
    fontSize: fontSize.medium,
    color: colors.black,
    paddingBottom: sizes.screenHeight * 0.012,
    paddingTop: sizes.screenHeight * 0.02,
  },
  btnTextActive: {
    textAlign: "center",
    borderBottomColor: colors.black,
    borderBottomWidth: sizes.screenWidth * 0.01,
    fontSize: fontSize.medium,
    color: colors.black,
    paddingBottom: sizes.screenHeight * 0.012,
    paddingTop: sizes.screenHeight * 0.02,
    fontWeight: "700",
  },
  mapView: {
    width: sizes.screenWidth * 0.85,
    alignSelf: "center",
    marginTop: sizes.screenHeight * 0.02,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    backgroundColor: colors.white,
    paddingBottom: sizes.screenHeight * 0.02,
    borderRadius: sizes.screenWidth * 0.02,

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
  dayText: {
    color: colors.disabledBg2,
    paddingTop: sizes.screenHeight * 0.01,
    width: sizes.screenWidth * 0.78,
    alignSelf: "center",
  },
  profilePriceView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: sizes.screenWidth * 0.78,
    alignSelf: "center",
    marginTop: sizes.screenHeight * 0.015,
  },
  profileView: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImg: {
    height: sizes.screenWidth * 0.13,
    width: sizes.screenWidth * 0.13,
  },
  nameText: {
    color: colors.black,
    fontSize: fontSize.large,
    fontWeight: "600",
    marginLeft: sizes.screenWidth * 0.04,
  },
  priceText: {
    color: colors.black,
    fontSize: fontSize.smallM,
    fontWeight: "600",
  },
  trackImg: {
    height: sizes.screenHeight * 0.11,
    width: sizes.screenWidth * 0.05,
    resizeMode: "stretch",
    marginLeft: sizes.screenWidth * 0.03,
  },
  locationTextView: {
    height: sizes.screenHeight * 0.11,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginLeft: sizes.screenWidth * 0.02,
  },
  locationMainView: {
    width: sizes.screenWidth * 0.78,
    alignSelf: "center",
    marginTop: sizes.screenHeight * 0.015,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  locationText: {
    color: colors.black,
    fontSize: fontSize.smallM,
    fontWeight: "500",
  },
  timeText: {
    color: colors.disabledBg2,
    fontSize: fontSize.small,
  },
  pendingText: {
    color: colors.error,
  },
  marginBottom: {
    marginBottom: sizes.screenHeight * 0.1,
  },
  completedText: {
    color: "#3A955E",
  },
  cancelOrder: {
    height: sizes.screenHeight * 0.02,
    width: sizes.screenWidth * 0.25,
  },
  trackOrder: {
    height: sizes.screenHeight * 0.02,
    width: sizes.screenWidth * 0.22,
  },
  cancelRight: {
    right: sizes.screenWidth * 0.18,
  },
  trackRight: {
    left: sizes.screenWidth * 0.07,
  },
  leaveRight: {
    left: sizes.screenWidth * 0.04,
  },
  completedOrder: {
    height: sizes.screenHeight * 0.02,
    width: sizes.screenWidth * 0.17,
  },
  completeRight: {
    right: sizes.screenWidth * 0.15,
  },
  mainModal: {
    backgroundColor: "white",
    height: sizes.screenHeight * 0.35,
    borderTopRightRadius: sizes.screenWidth * 0.08,
    borderTopLeftRadius: sizes.screenWidth * 0.08,
    width: sizes.screenWidth,
    alignSelf: "center",
    marginTop: sizes.screenHeight * 0.68,
  },
  modalFirstView: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: sizes.screenHeight * 0.033,
    marginBottom: sizes.screenHeight * 0.01,
  },
  modalFirstViewText: {
    fontSize: fontSize.large,
    color: "#F56666",
    fontWeight: "bold",
  },
  modalText: {
    fontSize: fontSize.large,
    color: colors.black,
    fontWeight: "bold",
    marginTop: sizes.screenHeight * 0.02,
    width: sizes.screenWidth * 0.7,
    textAlign: "center",
  },
  subText: {
    color: colors.black,
    textAlign: "center",
    width: sizes.screenWidth * 0.8,
    marginTop: sizes.screenHeight * 0.02,
  },
  modalSecondView: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: sizes.screenHeight * 0.02,
  },
  modalBtn: {
    color: colors.black,
    fontSize: fontSize.medium,
    fontWeight: "bold",
  },
  modalBtn1: {
    color: colors.white,
    fontSize: fontSize.medium,
    fontWeight: "bold",
  },
  modalBtnView: {
    width: sizes.screenWidth * 0.45,
    height: sizes.screenWidth * 0.12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: sizes.screenHeight * 0.05,
  },
  modalBtnView1: {
    backgroundColor: colors.black,
    width: sizes.screenWidth * 0.45,
    height: sizes.screenWidth * 0.12,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: sizes.screenWidth * 0.02,
    borderRadius: sizes.screenWidth * 0.06,
  },
  line: {
    height: 1,
    width: sizes.screenWidth * 0.82,
    backgroundColor: "#C4C4C4",
    marginTop: sizes.screenHeight * 0.02,
  },
});

import { StyleSheet } from "react-native";
import { create } from "react-test-renderer";
import { colors, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
  profile: {
    alignSelf: "center",
    resizeMode: "contain",
    width: sizes.screenWidth * 0.3,
    height: sizes.screenWidth * 0.3,
    marginTop: sizes.screenHeight * 0.02,
  },
  profileName: {
    alignSelf: "center",
    color: colors.black,
    fontWeight: "500",
    fontSize: fontSize.large,
    marginTop: sizes.screenHeight * 0.01,
  },
  balanceView: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: sizes.screenHeight * 0.03,
    marginTop: sizes.screenHeight * 0.04,
  },
  iconSty: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.06,
    height: sizes.screenWidth * 0.06,
    marginLeft: sizes.screenWidth * 0.1,
  },
  rightArrowIconSty: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.03,
    height: sizes.screenWidth * 0.03,
    position: "absolute",
    right: sizes.screenWidth * 0.12,
    // top:sizes.screenHeight * 0.02,
  },
  balanceText: {
    color: colors.black,
    marginLeft: sizes.screenWidth * 0.05,
    fontSize: fontSize.medium,
    color: colors.purple,
    // width:sizes.screenWidth * 0.03
  },
  profileMenu: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: sizes.screenWidth * 0.01,
    // backgroundColor:'red'
  },
  profileMenuText: {
    color: colors.black,
    fontWeight: "bold",
    fontSize: fontSize.medium,
    marginLeft: sizes.screenWidth * 0.04,
  },
  horizontalLine: {
    width: sizes.screenWidth * 0.85,
    height: sizes.screenHeight * 0.001,
    backgroundColor: colors.disabledBg,
    alignSelf: "center",
    marginTop: sizes.screenHeight * 0.02,
    marginBottom: sizes.screenHeight * 0.02,
  },
  mainModal: {
    backgroundColor: "white",
    height: sizes.screenHeight * 0.25,
    borderTopRightRadius: sizes.screenWidth * 0.08,
    borderTopLeftRadius: sizes.screenWidth * 0.08,
    width: sizes.screenWidth,
    alignSelf: "center",
    marginTop: sizes.screenHeight * 0.75,
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
    width: sizes.screenWidth * 0.32,
    height: sizes.screenWidth * 0.12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: sizes.screenHeight * 0.05,
  },
  modalBtnView1: {
    backgroundColor: colors.black,
    width: sizes.screenWidth * 0.32,
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

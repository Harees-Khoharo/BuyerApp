import { Dimensions, StyleSheet } from "react-native";
import { colors, fontFamily, fontSize, sizes } from "../../services";
import SignUp from ".";
import codegenNativeCommands from "react-native/Libraries/Utilities/codegenNativeCommands";

export const styles = StyleSheet.create({
  landingBody: {
    height: sizes.screenHeight,
    width: sizes.screenWidth,
    paddingHorizontal: sizes.screenWidth * 0.04,
    backgroundColor: colors.white,

  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: sizes.screenHeight * 0.02,
    marginBottom: sizes.screenHeight * 0.06,
  },

  headerImg: {
    resizeMode: "contain",
    height: sizes.screenHeight * 0.03,
    width: sizes.screenWidth * 0.03,
  },

  headerHeading: {
    width: sizes.screenWidth * 0.86,
    textAlign: "center",
    fontSize: fontSize.h4,
    fontWeight: "700",
    color: colors.black,
  },

  inputField: {
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingHorizontal: sizes.screenWidth * 0.03,
    paddingVertical: sizes.screenHeight * 0.01,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: sizes.screenHeight * 0.03,
  },

  inputFieldText: {
    color: colors.disabledBg2,
    marginLeft: 4,
  },

  input: {
    height: sizes.screenHeight * 0.046,
    width: sizes.screenWidth * 0.7,
    color: colors.black,
    fontSize: fontSize.regular,
  },

  grenTick: {
    resizeMode: "contain",
    height: sizes.screenWidth * 0.06,
    width: sizes.screenWidth * 0.06,
  },

  rightArrowRedContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    marginVertical: sizes.screenHeight * 0.02,
  },

  signUpBtn: {
    alignSelf: "center",
    height: sizes.screenHeight * 0.07,
    width: sizes.screenWidth * 0.9,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.black,
    borderRadius: sizes.screenHeight * 0.3,
    marginTop: sizes.screenHeight * 0.09,
  },

  signUpBtnText: {
    fontSize: fontSize.medium,
    color: colors.white,
    fontWeight: "600",
  },

  textBlack: {
    fontSize: fontSize.smallM,
    color: colors.black,
    alignSelf: "center",
  },

  textRed: {
    color: "red",
    alignSelf: "center",
    fontSize: 12,
  },
});

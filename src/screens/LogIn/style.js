import { Dimensions, StyleSheet } from "react-native";
import { colors, fontFamily, fontSize, sizes } from "../../services";
import SignUp from ".";
import codegenNativeCommands from "react-native/Libraries/Utilities/codegenNativeCommands";

export const styles = StyleSheet.create({
  landingBody: {
    height: sizes.screenHeight,
    width: sizes.screenWidth,
    paddingHorizontal: sizes.screenWidth * 0.04,
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
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 1,
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

  rightArrowRedText: {
    color: colors.black,
  },

  rightArrowRed: {
    resizeMode: "contain",
    height: sizes.screenHeight * 0.01,
    width: sizes.screenWidth * 0.05,
    marginHorizontal: sizes.screenWidth * 0.02,
  },

  signUpBtn: {
    alignSelf: "center",
    height: sizes.screenHeight * 0.07,
    width: sizes.screenWidth * 0.9,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.black,
    borderRadius: sizes.screenHeight * 0.1,
    marginVertical: sizes.screenHeight * 0.01,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },

  signUpBtnText: {
    fontSize: fontSize.medium,
    color: colors.white,
    fontWeight: "600",
  },

  socialContainer: {
    width: sizes.screenWidth * 0.9,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: sizes.screenHeight * 0.04,
  },

  socialIcon: {
    resizeMode: "contain",
    height: sizes.screenHeight * 0.06,
    width: sizes.screenHeight * 0.06,
  },

  textBlack: {
    fontSize: fontSize.smallM,
    color: colors.black,
    alignSelf: "center",
  },

  bottom: {
    position: "absolute",
    bottom: sizes.screenHeight * 0.1,
    alignSelf: "center",
  },
});

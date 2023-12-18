import { Dimensions, StyleSheet } from "react-native";
import { colors, fontFamily, fontSize, sizes } from "../../services";
import SignUp from ".";
import codegenNativeCommands from "react-native/Libraries/Utilities/codegenNativeCommands";

export const styles = StyleSheet.create({
  landingBody: {
    height: sizes.screenHeight * 1,
    width: sizes.screenWidth * 1,
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

  locationnn: {
    resizeMode: "contain",
    height: sizes.screenHeight * 0.28,
    width: sizes.screenHeight * 0.28,
    alignSelf: "center",
    marginTop: sizes.screenHeight * 0.08,
  },

  heading: {
    alignSelf: "center",
    fontSize: fontSize.h4,
    fontWeight: "700",
    color: colors.black,
    marginVertical: sizes.screenHeight * 0.02,
  },

  textBlack: {
    color: colors.black,
    width: sizes.screenWidth * 0.7,
    fontSize: fontSize.medium,
    textAlign: "center",
    alignSelf: "center",
    marginVertical: sizes.screenHeight * 0.01,
  },

  btnBlack: {
    backgroundColor: colors.black,
    height: sizes.screenHeight * 0.07,
    width: sizes.screenWidth * 0.7,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: sizes.screenHeight * 0.1,
    marginVertical: sizes.screenHeight * 0.01,
  },

  btnBlackText: {
    color: colors.white,
    fontSize: fontSize.medium,
    fontWeight: "500",
  },

  btnWhite: {
    backgroundColor: colors.white,
    height: sizes.screenHeight * 0.07,
    width: sizes.screenWidth * 0.7,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: sizes.screenHeight * 0.1,
    marginVertical: sizes.screenHeight * 0.01,
    borderWidth: 1,
    borderColor: colors.black,
  },

  btnWhiteText: {
    color: colors.black,
    fontSize: fontSize.medium,
    fontWeight: "500",
  },

  nextIconContainer: {
    position: "absolute",
    bottom: sizes.screenHeight * 0.07,
    right: sizes.screenHeight * 0.07,
  },

  nextIcon: {
    resizeMode: "contain",
    height: sizes.screenHeight * 0.08,
    width: sizes.screenHeight * 0.08,
  },
});

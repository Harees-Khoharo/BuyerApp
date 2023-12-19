import { Dimensions, StyleSheet } from "react-native";
import { colors, fontFamily, fontSize, sizes } from "../../services";
import SignUp from ".";
import codegenNativeCommands from "react-native/Libraries/Utilities/codegenNativeCommands";

export const styles = StyleSheet.create({
  landingBody: {
    height: sizes.screenHeight * 1,
    width: sizes.screenWidth * 1,
    paddingHorizontal: sizes.screenWidth * 0.04,
    backgroundColor: colors.white,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: sizes.screenHeight * 0.02,
    marginBottom: sizes.screenHeight * 0.04,
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

  textBold: {
    textAlign: "center",
    fontSize: fontSize.h5,
    fontWeight: "500",
    color: colors.black,
    marginVertical: sizes.screenHeight * 0.03,
  },

  b: {
    alignSelf: "center",
    resizeMode: "contain",
    height: sizes.screenHeight * 0.08,
    width: sizes.screenHeight * 0.08,
    marginTop: sizes.screenHeight * 0.02,
  },

  heading: {
    textAlign: "center",
    fontSize: fontSize.h5,
    fontWeight: "700",
    color: "#4F4F4F",
    alignSelf: "center",
    marginVertical: sizes.screenHeight * 0.02,
  },

  btnRow: {
    flexDirection: "row",
    alignSelf: "center",
    width: sizes.screenWidth * 0.8,
    justifyContent: "space-between",
  },

  btnWhiteSmall: {
    backgroundColor: colors.white,
    height: sizes.screenHeight * 0.038,
    width: sizes.screenWidth * 0.38,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: sizes.screenHeight * 0.1,
    borderWidth: 1,
    borderColor: colors.black,
  },

  btnWhiteTextSmall: {
    color: colors.black,
    fontSize: fontSize.medium,
    fontWeight: "500",
  },

  btnBlackSmall: {
    backgroundColor: colors.black,
    height: sizes.screenHeight * 0.038,
    width: sizes.screenWidth * 0.38,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: sizes.screenHeight * 0.1,
    borderWidth: 1,
    borderColor: colors.black,
  },

  btnBlackTextSmall: {
    color: colors.white,
    fontSize: fontSize.medium,
    fontWeight: "500",
  },

  removeStore: {
    width: sizes.screenWidth,
    resizeMode: "contain",
    alignSelf: "center",
    marginVertical: sizes.screenHeight * 0.01,
  },

  btnWhite: {
    backgroundColor: colors.white,
    height: sizes.screenHeight * 0.064,
    width: sizes.screenWidth * 0.66,
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
    fontSize: fontSize.h6,
    fontWeight: "600",
  },
});

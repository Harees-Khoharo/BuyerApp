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

  myStoreImg: {
    resizeMode: "contain",
    height: sizes.screenHeight * 0.2,
    width: sizes.screenHeight * 0.2,
    alignSelf: "center",
  },

  senterText: {
    width: sizes.screenWidth * 0.6,
    textAlign: "center",
    alignSelf: "center",
    fontSize: fontSize.medium,
    color: "#4F4F4F",
    marginVertical: sizes.screenHeight * 0.01,
  },

  textLight: {
    color: colors.borderGrey,
    marginLeft: 4,
    fontSize: fontSize.medium,
  },

  input: {
    fontSize: fontSize.large,
    color: "#4F4F4F",
  },

  hr: {
    height: 0.5,
    width: sizes.screenWidth * 0.9,
    backgroundColor: "#DBDBDE",
    marginBottom: sizes.screenHeight * 0.02,
  },

  shadow: {
    resizeMode: "contain",
    width: sizes.screenWidth,
    alignSelf: "center",
    height: sizes.screenHeight * 0.22,
    position: "absolute",
    bottom: -20,
  },

  bottomBtn: {
    height: sizes.screenHeight * 0.064,
    backgroundColor: colors.black,
    width: sizes.screenWidth * 0.86,
    position: "absolute",
    bottom: 28,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: sizes.screenHeight * 0.1,
  },

  bottomBtnText: {
    color: colors.white,
    fontSize: fontSize.extraLarge,
    fontWeight: "600",
  },
});

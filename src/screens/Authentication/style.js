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

  textNormal: {
    fontSize: fontSize.large,
    width: sizes.screenWidth * 0.7,
    alignSelf: "center",
    textAlign: "center",
    color: colors.borderGrey,
    marginVertical: sizes.screenHeight * 0.07,
  },

  inputField: {
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingHorizontal: sizes.screenWidth * 0.03,
    paddingVertical: sizes.screenHeight * 0.01,
    alignItems: "center",
    flexDirection: "row",
    marginTop: sizes.screenHeight * 0.03,
  },

  inputFieldText: {
    color: colors.disabledBg2,
    marginLeft: 4,
  },

  input: {
    height: sizes.screenHeight * 0.07,
    width: sizes.screenWidth * 0.6,
    color: colors.black,
    fontSize: fontSize.regular,
    marginLeft: sizes.screenWidth * 0.06,
  },

  grenTick: {
    resizeMode: "contain",
    height: sizes.screenWidth * 0.07,
    width: sizes.screenWidth * 0.07,
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

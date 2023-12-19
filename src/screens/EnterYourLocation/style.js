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

  ////////////

  inputField: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.borderColor,
    width: sizes.screenWidth * 0.9,
    alignSelf: "center",
    paddingHorizontal: sizes.screenWidth * 0.03,
    borderRadius: 8,
  },

  icon: {
    resizeMode: "contain",
    height: sizes.screenHeight * 0.04,
    width: sizes.screenHeight * 0.04,
  },

  input: {
    width: sizes.screenWidth * 0.64,
    fontSize: fontSize.medium,
    color: colors.black,
  },

  currentLocationRow: {
    flexDirection: "row",
    width: sizes.screenWidth * 0.9,
    alignItems: "center",
    marginTop: sizes.screenHeight * 0.03,
  },
  currentLocationRow2: {
    flexDirection: "row",
    width: sizes.screenWidth * 0.9,
    alignItems: "center",
    marginVertical: sizes.screenHeight * 0.01,
  },

  locationText: {
    color: colors.black,
    fontSize: fontSize.smallM,
    fontWeight: "500",
    marginLeft: sizes.screenWidth * 0.02,
  },

  locationText2: {
    color: colors.black,
    fontSize: fontSize.small,
    fontWeight: "500",
    marginLeft: sizes.screenWidth * 0.02,
  },

  enable: {
    color: colors.black,
    fontSize: fontSize.smallM,
    fontWeight: "500",
    backgroundColor: colors.borderColor,
    paddingHorizontal: sizes.screenWidth * 0.02,
    paddingVertical: sizes.screenWidth * 0.01,
    borderRadius: sizes.screenHeight * 0.1,
    marginLeft: "auto",
  },

  hr: {
    height: 3,
    width: sizes.screenWidth * 0.9,
    alignSelf: "center",
    backgroundColor: colors.disabledBg,
    marginVertical: sizes.screenHeight * 0.02,
  },

  search: {
    color: colors.disabledBg2,
    marginLeft: sizes.screenWidth * 0.04,
  },
});

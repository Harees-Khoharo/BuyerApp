import { Dimensions, StyleSheet } from "react-native";
import { colors, fontFamily, fontSize, sizes } from "../../services";
import SignUp from ".";
import codegenNativeCommands from "react-native/Libraries/Utilities/codegenNativeCommands";

export const styles = StyleSheet.create({
  landingBody: {
    height: sizes.screenHeight * 1,
    width: sizes.screenWidth * 1,
    backgroundColor: colors.white,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: sizes.screenHeight * 0.02,
    marginBottom: sizes.screenHeight * 0.04,
    paddingHorizontal: sizes.screenWidth * 0.05,
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

  scrollContainer: {
    alignItems: "center",
    flexDirection: "row",
    height: sizes.screenHeight * 0.2,
  },

  addPhotosImg: {
    resizeMode: "contain",
    height: sizes.screenHeight * 0.18,
    width: sizes.screenWidth * 0.46,
    marginTop: 5,
  },

  productImggg: {
    resizeMode: "contain",
    height: sizes.screenHeight * 0.16,
    width: sizes.screenWidth * 0.4,
    marginHorizontal: 8,
  },

  crossBlackIconContainer: {
    position: "absolute",
    right: 4,
    top: -4,
  },

  crossBlackIcon: {
    resizeMode: "contain",
    height: sizes.screenWidth * 0.07,
    width: sizes.screenWidth * 0.07,
  },

  textLight2: {
    color: colors.borderGrey,
    marginLeft: sizes.screenWidth * 0.05,
    fontSize: fontSize.regular,
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

  hr2: {
    height: 0.5,
    width: sizes.screenWidth * 0.3,
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

  greyBtn: {
    backgroundColor: "#D8D8D8",
    paddingHorizontal: sizes.screenWidth * 0.04,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: sizes.screenWidth * 0.01,
    marginLeft: sizes.screenWidth * 0.01,
    borderRadius: 26,
  },

  greyBtnText: {
    color: "#4F4F4F",
    fontSize: fontSize.regular,
  },

  crossIconn: {
    height: sizes.screenWidth * 0.03,
    width: sizes.screenWidth * 0.03,
    marginLeft: sizes.screenWidth * 0.04,
  },

  dollarImg: {
    resizeMode: "contain",
    height: sizes.screenHeight * 0.02,
    marginRight: sizes.screenWidth * 0.05,
  },

  input2: {
    fontSize: fontSize.large,
    color: "#4F4F4F",
    fontWeight: "600",
    width: sizes.screenWidth * 0.18,
  },
});

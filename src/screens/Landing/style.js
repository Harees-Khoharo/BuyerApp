import { Dimensions, StyleSheet } from "react-native";
import { colors, fontFamily, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
  landingBody: {
    height: sizes.screenHeight,
    width: sizes.screenWidth,
  },

  landingImg: {
    resizeMode: "contain",
    width: sizes.screenWidth * 1.03,
    height: sizes.screenHeight * 0.69,
    alignSelf: "center",
    bottom: 10,
  },

  heading: {
    fontSize: fontSize.h3,
    color: colors.black,
    fontWeight: "700",
    marginLeft: sizes.screenWidth * 0.04,
    marginBottom: sizes.screenHeight * 0.02,
  },

  textBlack: {
    fontSize: fontSize.smallM,
    color: colors.black,
    alignSelf: "center",
  },

  bottomBtn: {
    alignSelf: "center",
    position: "absolute",
    bottom: sizes.screenHeight * 0.03,
    height: sizes.screenHeight * 0.07,
    width: sizes.screenWidth * 0.7,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.black,
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },

  bottomBtnText: {
    fontSize: fontSize.h5,
    color: colors.white,
    fontWeight: "700",
  },
});

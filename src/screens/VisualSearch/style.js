import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    height: sizes.screenHeight,
  },
  visualBg: {
    resizeMode: "contain",
    height: sizes.screenHeight,
    width: sizes.screenWidth,
    marginTop: sizes.screenHeight * 0.02,
  },
  contentView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  whiteText: {
    color: colors.white,
    fontSize: fontSize.h5,
    width: sizes.screenWidth * 0.9,
    alignSelf: "flex-start",
    paddingLeft: sizes.screenWidth * 0.07,
  },
  btnTop: {},
  bottomBtn: {
    marginLeft: sizes.screenWidth * 0.01,
    marginTop: sizes.screenHeight * 0.05,
    borderRadius: sizes.screenWidth * 0.1,
    height: sizes.screenHeight * 0.06,
    backgroundColor: colors.black,
    width: sizes.screenHeight * 0.44,
    justifyContent: "center",
  },
  bottomBtnText: {
    color: colors.white,
    fontSize: fontSize.medium,
    textAlign: "center",
  },
  bottomBtn1: {
    marginLeft: sizes.screenWidth * 0.01,
    marginTop: sizes.screenHeight * 0.02,
    borderRadius: sizes.screenWidth * 0.1,
    height: sizes.screenHeight * 0.06,
    // backgroundColor: colors.white,
    width: sizes.screenHeight * 0.44,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.white,
  },
  bottomBtnText1: {
    color: colors.white,
    fontSize: fontSize.medium,
    textAlign: "center",
  },
});

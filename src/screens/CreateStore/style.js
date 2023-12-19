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

  Heading: {
    width: sizes.screenWidth * 0.9,
    fontSize: fontSize.h4,
    fontWeight: "700",
    color: colors.black,
    marginLeft: sizes.screenWidth * 0.03,
  },

  myStoreImg: {
    resizeMode: "contain",
    height: sizes.screenHeight * 0.2,
    width: sizes.screenHeight * 0.2,
    alignSelf: "center",
    marginTop: sizes.screenHeight * 0.04,
  },

  textBold: {
    textAlign: "center",
    fontSize: fontSize.h5,
    fontWeight: "500",
    color: colors.black,
    marginVertical: sizes.screenHeight * 0.03,
  },

  createStoreBtn: {
    height: sizes.screenHeight * 0.06,
    backgroundColor: colors.black,
    width: sizes.screenWidth * 0.6,
    borderRadius: sizes.screenHeight * 0.1,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: sizes.screenHeight * 0.02,
  },

  createStoreBtnText: {
    fontSize: fontSize.large,
    fontWeight: "500",
    color: colors.white,
  },

  locationnn: {
    resizeMode: "contain",
    height: sizes.screenHeight * 0.28,
    width: sizes.screenHeight * 0.28,
    alignSelf: "center",
    marginTop: sizes.screenHeight * 0.08,
  },
});

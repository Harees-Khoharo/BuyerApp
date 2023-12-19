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

  searchField: {
    backgroundColor: "#f7f7f7",
    alignItems: "center",
    flexDirection: "row",
    width: sizes.screenWidth * 0.9,
    alignSelf: "center",
    borderRadius: sizes.screenHeight * 0.1,
  },

  searchIcon: {
    resizeMode: "contain",
    height: sizes.screenHeight * 0.03,
    width: sizes.screenHeight * 0.03,
    marginHorizontal: sizes.screenWidth * 0.03,
  },

  input: {
    color: colors.black,
    fontSize: fontSize.medium,
  },

  heading2: {
    fontSize: fontSize.h5,
    fontWeight: "700",
    color: "#4F4F4F",
    marginVertical: sizes.screenHeight * 0.02,
    marginLeft: sizes.screenWidth * 0.01,
  },

  product: {
    borderColor: colors.borderGrey,
    borderWidth: 1,
    borderRadius: 14,
    height: sizes.screenHeight * 0.26,
    width: sizes.screenWidth * 0.42,
    overflow: "hidden",
  },

  productImg: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.42,
    height: sizes.screenHeight * 0.17,
  },

  editProductContainer: {
    position: "absolute",
    top: sizes.screenHeight * 0.06,
    left: sizes.screenWidth * 0.07,
  },

  deleteProductContainer: {
    position: "absolute",
    top: sizes.screenHeight * 0.06,
    right: sizes.screenWidth * 0.07,
  },

  editProduct: {
    height: sizes.screenHeight * 0.04,
    width: sizes.screenHeight * 0.04,
  },

  productName: {
    color: colors.disabledBg2,
    marginVertical: sizes.screenHeight * 0.01,
    marginLeft: sizes.screenWidth * 0.02,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: sizes.screenWidth * 0.02,
    width: sizes.screenWidth * 0.4,
    justifyContent: "space-between",
  },

  b2: {
    resizeMode: "contain",
    height: sizes.screenWidth * 0.05,
    width: sizes.screenWidth * 0.05,
  },

  storeName: {
    color: colors.borderGrey,

    marginLeft: sizes.screenWidth * 0.01,
  },

  value1: {
    textDecorationLine: "line-through",
    color: colors.disabledBg2,
    marginRight: sizes.screenWidth * 0.02,
  },

  value2: {
    color: colors.black,
    fontWeight: "600",
  },

  addProductImg2: {
    resizeMode: "contain",
    height: sizes.screenHeight * 0.26,
    width: sizes.screenWidth * 0.42,
  },
});

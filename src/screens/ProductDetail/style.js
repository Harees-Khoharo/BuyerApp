import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    height: sizes.screenHeight,
  },
  pdBg: {
    resizeMode: "contain",
    height: sizes.screenHeight * 0.9,
    width: sizes.screenWidth,
    bottom: sizes.screenHeight * 0.31,
  },
  backBtnView: {
    position: "absolute",
    zIndex: 9,
    padding: sizes.screenHeight * 0.02,
  },
  backBtn: {
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.12,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  shareBtnView: {
    position: "absolute",
    zIndex: 9,
    padding: sizes.screenHeight * 0.02,
    left: sizes.screenWidth * 0.5,
  },
  heartBtnView: {
    position: "absolute",
    zIndex: 9,
    padding: sizes.screenHeight * 0.02,
    left: sizes.screenWidth * 0.65,
  },
  dotBtnView: {
    position: "absolute",
    zIndex: 9,
    padding: sizes.screenHeight * 0.02,
    left: sizes.screenWidth * 0.8,
  },
  heading: {
    color: colors.black,
    fontSize: fontSize.h4,
    fontWeight: "500",
  },
  bottom: {
    bottom: sizes.screenHeight * 0.58,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnView: {
    backgroundColor: colors.black,
    width: sizes.screenWidth * 0.32,
    height: sizes.screenWidth * 0.12,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: sizes.screenWidth * 0.02,
    borderRadius: sizes.screenWidth * 0.06,
  },
  btnText: {
    color: colors.white,
    fontSize: fontSize.medium,
    fontWeight: "500",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  padding: {
    padding: sizes.screenHeight * 0.02,
  },
  leftText: {
    left: sizes.screenWidth * 0.04,
  },
  singleStar: {
    resizeMode: "contain",
    height: sizes.screenHeight * 0.03,
  },
  text: {
    color: colors.black,
  },

  subHeading: {
    color: colors.black,
    fontSize: fontSize.h6,
    fontWeight: "bold",
  },
  bold: {
    fontWeight: "600",
    fontSize: fontSize.medium,
  },
  sellingTopView: {
    marginRight: sizes.screenWidth * 0.03,
    marginTop: sizes.screenHeight * 0.015,
  },
  sellingImg: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.43,
    height: sizes.screenHeight * 0.24,
    borderRadius: sizes.screenWidth * 0.03,
    // backgroundColor:'red'
  },
  percentView: {
    backgroundColor: "red",
    width: sizes.screenWidth * 0.11,
    height: sizes.screenHeight * 0.03,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: sizes.screenWidth * 0.05,
    position: "absolute",
    left: 9,
    top: 10,
  },
  percent: {
    color: colors.white,
    fontSize: fontSize.smallM,
  },
  heartImg: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.12,
    height: sizes.screenHeight * 0.06,
  },
  heartImgView: {
    position: "absolute",
    top: sizes.screenHeight * 0.213,
    left: sizes.screenWidth * 0.33,
  },
  ratingSty: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.28,
    height: sizes.screenHeight * 0.02,
    marginTop: sizes.screenHeight * 0.01,
  },
  ratingText: {
    color: colors.disabledBg3,
  },
  ratingText1: {
    color: colors.black,
    fontWeight: "bold",
    fontSize: fontSize.extraLarge,
  },
  ratingText2: {
    color: colors.disabledBg3,
    textDecorationLine: "line-through",
    // fontWeight:'400'
    // textDecorationLine:"line-through"
  },
  ratingText3: {
    color: colors.red,
    marginLeft: sizes.screenWidth * 0.01,
  },
  ratingText4: {
    color: colors.black,
    fontWeight: "bold",
    // marginLeft:sizes.screenWidth * 0.01
  },
  sellingHeading: {
    color: colors.gray,
    fontSize: fontSize.large,
    marginTop: sizes.screenHeight * 0.01,
    fontWeight: "bold",
  },
  rowCenter: {
    alignSelf: "center",
  },
  top: {
    marginTop: sizes.screenHeight * 0.02,
  },
  locationIcon: {
    height: sizes.screenHeight * 0.03,
    width: sizes.screenHeight * 0.03,
  },
  shippingText: {
    color: colors.black,
    left: sizes.screenWidth * 0.04,
    fontWeight: "600",
  },
  fromText: {
    color: colors.black,
    padding: sizes.screenHeight * 0.02,
  },
  salonImg: {
    resizeMode: "contain",
    height: sizes.screenHeight * 0.13,
    width: sizes.screenWidth * 0.29,
  },
  rightView: {
    left: sizes.screenWidth * 0.03,
  },
  arrowIcon: {
    height: sizes.screenHeight * 0.02,
    width: sizes.screenHeight * 0.02,
  },
  priceText: {
    color: colors.black,
    fontWeight: "600",
    left: sizes.screenWidth * 0.05,
  },
  salon2: {
    height: sizes.screenHeight * 0.12,
    width: sizes.screenHeight * 0.12,
  },
  bottomContainer: {
    padding: sizes.screenHeight * 0.02,
    height: sizes.screenHeight * 0.11,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    elevation: 10,
    backgroundColor: colors.white,
  },
  store: {
    height: sizes.screenHeight * 0.05,
  },
});

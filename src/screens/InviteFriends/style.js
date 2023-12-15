import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: colors.white,
    height: sizes.screenHeight,
    // width: sizes.screenWidth,
  },
  headerView: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: sizes.screenWidth * 0.05,
    marginTop: sizes.screenWidth * 0.05,
  },
  headerImg: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.015,
    height: sizes.screenHeight * 0.015,
  },
  headerTitle: {
    marginLeft: sizes.screenWidth * 0.25,
    fontSize: fontSize.h5,
    color: colors.black,
    fontWeight: "bold",
  },
  bottomMainView: {
    paddingLeft: sizes.screenWidth * 0.04,
    marginTop: sizes.screenHeight * 0.03,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    elevation: 10,
    backgroundColor: colors.white,
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.2,
    borderRadius: sizes.screenWidth * 0.02,
    alignSelf: "center",
  },

  Img: {
    flexDirection: "row",
    alignItems: "center",
  },
  creditText: {
    color: colors.black,
    fontWeight: "500",
    fontSize: fontSize.medium,
    position: "absolute",
    left: sizes.screenWidth * 0.06,
  },
  passTextSty: {
    color: colors.black,
    fontWeight: "500",
    fontSize: fontSize.medium,
    position: "absolute",
    left: sizes.screenWidth * 0.12,
    top: sizes.screenHeight * 0.01,
    paddingLeft: sizes.screenWidth * 0.03,
  },
  phoneNum: {
    color: "#9B9B9B",
    fontWeight: "500",
    fontSize: fontSize.medium,
    position: "absolute",
    left: sizes.screenWidth * 0.022,
    top: sizes.screenHeight * 0.012,
  },
  user: {
    // resizeMode: "contain",
    width: sizes.screenWidth * 0.125,
    height: sizes.screenHeight * 0.06,
    top: sizes.screenHeight * 0.005,
    // backgroundColor:'red'
  },
  passViewMain: {
    paddingLeft: sizes.screenWidth * 0.04,
    marginTop: sizes.screenHeight * 0.015,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    elevation: 10,
    backgroundColor: colors.white,
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.1,
    borderRadius: sizes.screenWidth * 0.02,
    alignSelf: "center",
  },
  bottomViewAllingment: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: sizes.screenHeight * 0.01,
    width: sizes.screenWidth * 0.81,
    // paddingTop:sizes.screenHeight * 0.006
  },
  downArrowSty: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.035,
    height: sizes.screenHeight * 0.015,
  },
  height: {
    height: sizes.screenHeight * 0.05,
  },
  rightArrowIconSty: {
    // resizeMode: "contain",
    width: sizes.screenWidth * 0.16,
    height: sizes.screenWidth * 0.06,
    // position: "absolute",
    // right: sizes.screenWidth * 0.01,
    top: sizes.screenHeight * 0.01,
  },
  top: {
    marginTop: sizes.screenHeight * 0.05,
  },
  labelView: {
    paddingBottom: sizes.screenHeight * 0.02,
  },
});

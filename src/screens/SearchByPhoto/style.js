import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    height: sizes.screenHeight,
  },
  girlImg: {
    // resizeMode:'contain',
    alignSelf: "center",
    width: sizes.screenWidth * 1,
    height: sizes.screenHeight * 0.8,
    backgroundColor: "red",
    marginTop: sizes.screenHeight * 0.02,
  },
  cameraRow: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
    width: sizes.screenWidth * 0.5,
    marginTop: sizes.screenHeight * 0.015,
  },
  imgSiz: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.06,
    height: sizes.screenHeight * 0.03,
    // backgroundColor:'red'
  },
  imgSiz1: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.11,
    height: sizes.screenHeight * 0.06,
    // backgroundColor:'red'
  },
  imgSiz2: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.11,
    height: sizes.screenHeight * 0.06,
    alignSelf: "center",
    marginTop: sizes.screenWidth * 0.04,
    // backgroundColor:'red'
  },
  modalMainView: {
    width: sizes.screenWidth * 1,
    height: sizes.screenHeight * 0.35,
    backgroundColor: colors.white,
    alignSelf: "center",
    borderTopRightRadius:sizes.screenWidth * 0.07,
    borderTopLeftRadius:sizes.screenWidth * 0.07,
    marginTop: sizes.screenWidth * 1.25,
  },
  modalText: {
    color: colors.black,
    alignSelf: "center",
    fontSize: fontSize.medium,
    width: sizes.screenWidth * 0.87,
    marginTop: sizes.screenWidth * 0.03,
  },
  modalText1: {
    color: colors.black,
    backgroundColor: colors.disabledBg,
    width: sizes.screenWidth * 0.88,
    height: sizes.screenHeight * 0.14,
    alignSelf: "center",
    borderRadius: sizes.screenWidth * 0.03,
    fontSize: fontSize.medium,
    padding: sizes.screenWidth * 0.03,
    marginTop: sizes.screenWidth * 0.07,
  },
  imgSiz3: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.7,
    height: sizes.screenHeight * 0.3,
    alignSelf: "center",
    position:'absolute',
    // backgroundColor:'red',
    top:40,
    left:33
    // marginTop: sizes.screenWidth * 0.04,
    // backgroundColor:'red'
  },
});

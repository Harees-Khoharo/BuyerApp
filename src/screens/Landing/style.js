import { Dimensions, StyleSheet } from "react-native";
import { colors, fontFamily, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
  landingBody: {
    height: sizes.screenHeight,
    width: sizes.screenWidth,
    backgroundColor: colors.white,
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
    width: sizes.screenWidth * 0.86,
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
  textField:{
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'center',
    // backgroundColor:'red',
    width:sizes.screenWidth * 0.85,
    // borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    backgroundColor: colors.white,
    paddingHorizontal:sizes.screenWidth * 0.03,
    marginTop:sizes.screenHeight * 0.015
  },
  flagSiz:{
    resizeMode:'contain',
    width:sizes.screenWidth * 0.06,
    height:sizes.screenHeight * 0.03,
  },
  dropDownSiz:{
    resizeMode:'contain',
    width:sizes.screenWidth * 0.04,
    height:sizes.screenHeight * 0.04,
  },
  textInput:{
    width:sizes.screenWidth * 0.65,
    color:colors.black,
    marginLeft:sizes.screenWidth * 0.01
  },
});

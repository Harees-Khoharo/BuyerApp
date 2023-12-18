import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
  mainView: {
    backgroundColor: colors.white,
    height:sizes.screenHeight,
  },
  cartImgSty: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.05,
    height: sizes.screenWidth * 0.05,
  },
  cartImgView: {
    position: "absolute",
    right: sizes.screenWidth * 0.06,
    top: sizes.screenHeight * 0.037,
  },
  row: {
    flexDirection: "row",
    // borderWidth:1,
    padding:sizes.screenWidth * 0.01,
    width:sizes.screenWidth * 0.99,
    height:sizes.screenHeight * 0.15,
    borderRadius:sizes.screenWidth * 0.03,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    elevation: 3,
    backgroundColor:'white',
    marginTop:sizes.screenHeight * 0.02
  },
  imgSty: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.3,
    height: sizes.screenWidth * 0.3,
    // backgroundColor:'red',
  },
  row2: {
    flexDirection: "row",
    // justifyContent:'space-evenly',
    // alignItems:'center',
    width: sizes.screenWidth * 0.6,
    // backgroundColor:'blue'
  },
  row3: {
    flexDirection: "row",
    alignItems: "center",
  },
  row4: {
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:sizes.screenWidth * 0.05,
    borderRadius:sizes.screenWidth * 0.03,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    elevation: 3,
    backgroundColor:'white',
    width:sizes.screenWidth * 0.92,
    height:sizes.screenHeight * 0.07,
    marginTop:sizes.screenHeight * 0.02,
    alignSelf:'center',
    color:colors.black
  },
  threeDotSty: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.05,
    height: sizes.screenWidth * 0.05,
  },
  prices:{
    color:colors.black,
    fontWeight:'500',
    top:sizes.screenHeight * 0.07,
  },
  threeDotSty2: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.13,
    height: sizes.screenWidth * 0.15,
    marginTop:sizes.screenHeight * 0.02
  },
  middleCol: {
    paddingLeft:sizes.screenWidth * 0.02,
    marginTop:sizes.screenHeight * 0.001
  },
  middleColText: {
    color: colors.black,
    fontSize: fontSize.medium,
  },
  textColor:{
    marginRight:sizes.screenWidth * 0.02,
    color:colors.disabledBg3
  },
  lastView:{
    marginLeft:sizes.screenWidth * 0.25,
  },
  textQuantity: {
    color: colors.black,
    fontSize: fontSize.medium,
    width: sizes.screenWidth * 0.06,
    textAlign: 'center',
  },
  threeDotSty3: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.1,
    height: sizes.screenWidth * 0.1,
  },
  inputField:{
    width: sizes.screenWidth * 0.6,
  },
  row5:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:sizes.screenWidth * 0.03,
    marginTop:sizes.screenHeight * 0.03,
    alignItems:'center'
  },
  bottomText1:{
    color:colors.disabledBg3,
    fontSize:fontSize.medium
  },
  bottomText2:{
    fontSize:fontSize.large,
    color:colors.black,
    fontWeight:'bold'
  },
  btnText:{
    color:colors.white
  },
  btnView:{
    top:sizes.screenHeight*0.04,
    backgroundColor:colors.black,
    height:sizes.screenHeight*0.05,
    width:sizes.screenWidth*0.9,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    borderRadius:sizes.screenWidth*0.3
  },
  //   quantityContainer: {
  //     height: sizes.screenHeight * 0.04,
  //     backgroundColor: colors.borderColor,
  //     width: sizes.screenWidth * 0.2,
  //     justifyContent: "space-between",
  //     paddingLeft: sizes.screenWidth * 0.03,
  //     paddingRight: sizes.screenWidth * 0.03,
  //     flexDirection: "row",
  //     alignItems: "center",
  //     borderRadius: sizes.screenHeight * 0.05,
  //   },

  //   textQuantityMinus: {
  //     color: colors.black,
  //     fontSize: fontSize.large,
  //     bottom: sizes.screenHeight * 0.008,
  //   },

  //   textQuantity: {
  //     color: colors.black,
  //     fontSize: fontSize.medium,
  //     width: sizes.screenWidth * 0.06,
  //     textAlign: "center",
  //   },

  //   textQuantityPlus: {
  //     color: colors.black,
  //     fontSize: fontSize.large,
  //   },
});

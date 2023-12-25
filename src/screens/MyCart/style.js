import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
  mainView: {
    backgroundColor: colors.white,
    height:sizes.screenHeight,
    width:sizes.screenWidth,
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
    height:sizes.screenHeight*0.07,
    width:sizes.screenWidth*0.9,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    borderRadius:sizes.screenWidth*0.3
  },
  modalMainView:{
    backgroundColor:colors.white,
    width:sizes.screenWidth * 1,
    height:sizes.screenHeight * 0.6,
    alignSelf:'center',
    marginTop:sizes.screenHeight * 0.5,
    borderTopRightRadius:sizes.screenWidth * 0.1,
    borderTopLeftRadius:sizes.screenWidth * 0.1
  },
  modalText:{
    color:colors.black,
    fontSize:fontSize.large,
    marginTop:sizes.screenHeight * 0.03
  },
  padding:{
    paddingLeft:sizes.screenWidth * 0.04
  },
  horiLine:{
    width:sizes.screenWidth * 0.19,
    height:sizes.screenHeight * 0.01,
    backgroundColor:colors.disabledBg3,
    alignSelf:'center',
    top:sizes.screenHeight * 0.015,
    marginBottom:sizes.screenHeight * 0.02,
    borderRadius:sizes.screenWidth * 0.3
  },
  row6:{
    flexDirection:'row',
    alignItems:'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    elevation: 3,
    backgroundColor:'white',
    borderRadius:sizes.screenWidth * 0.03,
    width:sizes.screenWidth * 0.9,
    marginTop:sizes.screenHeight * 0.02
  },
  discountImgSty:{
    resizeMode:'contain',
    width:sizes.screenWidth * 0.2,
    height:sizes.screenHeight * 0.1,
  },
  bottomModaView:{
    marginLeft:sizes.screenWidth * 0.04
  },
  bottomModaView2:{
    alignItems:'center',
    marginLeft:sizes.screenWidth * 0.15
  },
  modalTextSty:{
    color:colors.black,
  },
  modalTextSty1:{
    color:colors.disabledBg3,
    fontSize:fontSize.small,
    // backgroundColor:'red',
    width:sizes.screenWidth * 0.25
  },
  modalTextSty2:{
    color:colors.disabledBg3,
    fontSize:fontSize.small
  },
  modalTextSt3:{
    color:colors.white,
    textAlign:'center',
  },
  modalBtn:{
    backgroundColor:'#DB3022',
    width:sizes.screenWidth * 0.23,
    height:sizes.screenHeight * 0.05,
    justifyContent:'center',
    borderRadius:sizes.screenWidth * 0.3,
    marginTop:sizes.screenHeight * 0.01
  },
  secondModalMainView:{
    backgroundColor:colors.white,
    width:sizes.screenWidth * 1,
    height:sizes.screenHeight * 0.5,
    alignSelf:'center',
    marginTop:sizes.screenHeight * 0.67,
    borderTopRightRadius:sizes.screenWidth * 0.1,
    borderTopLeftRadius:sizes.screenWidth * 0.1
  },
  cartHeading:{
    alignSelf:'center',
    color:colors.black,
    marginTop:sizes.screenHeight * 0.02,
    fontSize:fontSize.extraLarge,
    fontWeight:'bold'
  },
  modalRow:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginTop:sizes.screenHeight * 0.04
  },
  modalBtn1:{
    borderWidth:1,
    height:sizes.screenHeight * 0.07,
    width:sizes.screenWidth * 0.35,
    borderRadius:sizes.screenWidth * 0.3,
    justifyContent:'center'
  },
  modalTextStyMod:{
    color:colors.black,
    textAlign:'center',
    fontSize:fontSize.large
  },
  modalBtn2:{
    borderWidth:1,
    height:sizes.screenHeight * 0.07,
    width:sizes.screenWidth * 0.35,
    borderRadius:sizes.screenWidth * 0.3,
    justifyContent:'center',
    backgroundColor:colors.black
  },
  modalTextStyMod1:{
    color:colors.white,
    textAlign:'center',
    fontSize:fontSize.large
  },
});

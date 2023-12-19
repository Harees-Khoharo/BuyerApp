import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
  topMainContainer: {
    backgroundColor: colors.white,
    height: sizes.screenHeight,
    width: sizes.screenWidth,
  },
  headerImg: {
    resizeMode: "contain",
    width: sizes.screenWidth * 1,
    height: sizes.screenHeight * 0.27,
  },
  headerBtnView:{
    position:'absolute',
    top:sizes.screenHeight * 0.045,
    left:sizes.screenWidth * 0.05
  },
  headerBackBtn: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.1,
    height: sizes.screenHeight * 0.05,
  },
  margin:{
    marginLeft:sizes.screenWidth * 0.03,
    marginTop:sizes.screenWidth * 0.02,
    marginBottom:sizes.screenWidth * 0.02
  },
  headingTxt:{
    color:colors.black,
    fontSize:fontSize.large,
    fontWeight:'500'
  },
  headingTxt2:{
    color:colors.disabledBg3,
    fontSize:fontSize.small
  },
  row:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:sizes.screenHeight * 0.015
  },
  starImg:{
    resizeMode: "contain",
    width: sizes.screenWidth * 0.04,
    height: sizes.screenHeight * 0.02,
  },
  headingTxt3:{
    color:colors.disabledBg3,
    marginLeft:sizes.screenWidth * 0.01,
    fontSize:fontSize.small
  },
  itemsMainView: {
    flexDirection: "row",
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
    elevation: 8,
    backgroundColor:'white',
    marginTop:sizes.screenHeight * 0.01
  },
  imgSty: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.3,
    height: sizes.screenWidth * 0.3,
  },
  imgSty2: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.25,
    height: sizes.screenWidth * 0.06,
  },
  prices:{
    color:colors.black,
    fontWeight:'500',
  },
  itemsText:{
    color:colors.black,
    fontSize:fontSize.large,
    fontWeight:'bold',
    marginTop:sizes.screenHeight * 0.01
  },
  itemsText1:{
    color:colors.disabledBg3,
  },
  padding:{
    marginBottom:sizes.screenHeight * 0.05
  },
});

import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:colors.white,
        width:sizes.screenWidth,
        height:sizes.screenHeight,
    },
    padding:{
        paddingHorizontal:sizes.screenWidth * 0.03
    },
    row: {
        flexDirection: "row",
        // borderWidth:1,
        paddingHorizontal:sizes.screenWidth * 0.05,
        width:sizes.screenWidth * 0.99,
        height:sizes.screenHeight * 0.15,
        // borderRadius:sizes.screenWidth * 0.03,
        // shadowColor: '#000',
        // shadowOffset: {
        //   width: 0,
        //   height: 0,
        // },
        // shadowOpacity: 0.1,
        // shadowRadius: 0,
        // elevation: 3,
        // backgroundColor:'white',
        marginTop:sizes.screenHeight * 0.05,
        alignSelf:'center'
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
      threeDotSty: {
        resizeMode: "contain",
        width: sizes.screenWidth * 0.05,
        height: sizes.screenWidth * 0.05,
      },
      prices:{
        color:colors.black,
        fontWeight:'500',
        marginTop:sizes.screenHeight * 0.01,
      },
      textBlack:{
        color:colors.black
      },
      textColor:{
        marginRight:sizes.screenWidth * 0.02,
        color:colors.disabledBg3
      },
      middleCol: {
        paddingLeft:sizes.screenWidth * 0.01,
        marginTop:sizes.screenHeight * 0.01
      },
      middleColText: {
        color: colors.black,
        fontSize: fontSize.medium,
      },
      horizontalLine:{
        width:sizes.screenWidth * 0.93,
        height:sizes.screenHeight * 0.001,
        backgroundColor:'#C4C4C4',
        alignSelf:'center',
        marginTop:sizes.screenHeight * 0.02,
        marginBottom:sizes.screenHeight * 0.02,
    },
})
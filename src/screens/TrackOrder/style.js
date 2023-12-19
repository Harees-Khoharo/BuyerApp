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
        paddingHorizontal:sizes.screenWidth * 0.05,
        width:sizes.screenWidth * 0.99,
        height:sizes.screenHeight * 0.15,
        marginTop:sizes.screenHeight * 0.05,
        alignSelf:'center'
      },
      imgSty: {
        resizeMode: "contain",
        width: sizes.screenWidth * 0.3,
        height: sizes.screenWidth * 0.3,
        borderRadius:sizes.screenWidth * 0.05
      },
      row2: {
        flexDirection: "row",
        width: sizes.screenWidth * 0.6,
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
        marginTop:sizes.screenHeight * 0.03,
        marginBottom:sizes.screenHeight * 0.02,
    },
    orderRowMainText:{
        color:colors.black,
        fontSize:fontSize.extraLarge,
        fontWeight:'bold',
        marginTop:sizes.screenHeight * 0.02,
    },
    orderRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:sizes.screenHeight * 0.02
    },
    orderRowText:{
        color:colors.disabledBg3,
        fontSize:fontSize.large
    },
    orderRowText2:{
        color:colors.disabledBg3,
        fontWeight:'bold',
        fontSize:fontSize.large
    },
    deliveryPhase:{
        flexDirection:'row',
        marginTop:sizes.screenHeight * 0.02,
        marginLeft:sizes.screenWidth * 0.06,
        // alignItems:'center'
    },
    deliveryPhaseText:{
        color:colors.black,
        fontSize:fontSize.large
    },
    deliveryPhaseTextMiddle:{
            color:colors.black,
            fontSize:fontSize.large,
            marginTop:sizes.screenHeight * 0.07
    },
    deliveryPhaseText2:{
        color:colors.disabledBg3
    },
    orderImg:{
        resizeMode:'contain',
        width:sizes.screenWidth * 0.07,
        height:sizes.screenHeight * 0.04,
        // backgroundColor:'red'
    },
    orderLineImg:{
        resizeMode:'contain',
        width:sizes.screenWidth * 0.07,
        height:sizes.screenHeight * 0.28,
        // backgroundColor:'red'
    },
    margin:{
        marginLeft:sizes.screenWidth * 0.02
    },
    deliveryImg:{
        justifyContent:'space-between',
        marginLeft:sizes.screenWidth * 0.27
    },
})
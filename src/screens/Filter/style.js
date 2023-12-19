import { StyleSheet } from "react-native";
import { create } from "react-test-renderer";
import { colors, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:colors.white,
        width:sizes.screenWidth,
        height:sizes.screenHeight,
    },
    row: {
        flexDirection: "row",
      },
      top: {
        marginTop: sizes.screenHeight * 0.02,
      },
      options: {
        backgroundColor: colors.disabledBg,
        height: sizes.screenHeight * 0.045,
        width: sizes.screenWidth * 0.28,
        borderRadius: sizes.screenWidth * 0.3,
        alignItems: "center",
        justifyContent: "center",
        marginRight: sizes.screenWidth * 0.03,
      },
      text: {
        color: colors.black,
        textAlign: "center",
      },
      options1: {
        backgroundColor: colors.black,
        height: sizes.screenHeight * 0.045,
        width: sizes.screenWidth * 0.28,
        borderRadius: sizes.screenWidth * 0.3,
        alignItems: "center",
        justifyContent: "center",
        marginRight: sizes.screenWidth * 0.03,
      },
      text1: {
        color: colors.white,
        textAlign: "center",
      },
      heading:{
        color:colors.black,
        fontSize:fontSize.large,
        fontWeight:'bold',
        marginTop:sizes.screenHeight * 0.02
      },
      padding:{
        paddingLeft:sizes.screenWidth * 0.04
      },
      ratingRow:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:sizes.screenHeight * 0.01
      },
      starImg:{
        resizeMode:'contain',
        width:sizes.screenWidth * 0.4,
        height:sizes.screenHeight * 0.04,
      },
      starImg2:{
        resizeMode:'contain',
        width:sizes.screenWidth * 0.3,
        height:sizes.screenHeight * 0.03,
      },
      ratingeTxt:{
        color:colors.black,
        marginLeft:sizes.screenWidth * 0.02,
        fontSize:fontSize.medium,
        // backgroundColor:'red',
        width:sizes.screenWidth * 0.3
      },
    })
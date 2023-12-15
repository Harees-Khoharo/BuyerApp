import { StyleSheet } from "react-native";
import { create } from "react-test-renderer";
import { colors, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
    bookImg:{
        resizeMode:'contain',
        width:sizes.screenWidth * 0.25,
        height:sizes.screenWidth * 0.25,
        alignSelf:'center',
        marginTop:sizes.screenHeight * 0.04
    },
    modalBottomBtn: {
        textAlignVertical:'center',
        textAlign:'center',
        marginTop: sizes.screenHeight * 0.1,
        borderRadius:sizes.screenWidth * 0.02,    
        height: sizes.screenHeight * 0.06,
        backgroundColor:colors.black,
        width: sizes.screenHeight * 0.37,
        alignItems:'center',
        paddingTop:sizes.screenHeight * 0.015,
        alignSelf:'center',
      },
      bottomBtnText:{
        color:colors.white,
        fontSize:fontSize.medium,
        fontWeight:'500',
        marginLeft:sizes.screenWidth * 0.02,
      },
      bookText:{
        color:colors.black,
        textAlign:'center',
        marginTop:sizes.screenHeight * 0.05,
        fontSize:fontSize.large,
        fontWeight:'bold'
      },
})
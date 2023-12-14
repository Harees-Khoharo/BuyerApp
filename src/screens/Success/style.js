import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
    container:{
        color:colors.white
    },
    bagImg:{
        resizeMode:'contain',
        width:sizes.screenWidth * 0.7,
        height:sizes.screenWidth * 0.7,
        alignSelf:'center',
        marginTop:sizes.screenHeight * 0.15
    },
    textMainView:{
        alignSelf:'center',
        alignItems:'center',
        marginTop:sizes.screenHeight * 0.02
    },
    textView:{
        marginTop:sizes.screenHeight * 0.01,
        marginBottom:sizes.screenHeight * 0.01,
        color:colors.black,
        fontSize:fontSize.h4
    },
    textView1:{
        color:colors.black,
    },
    bottomBtn: {
        marginLeft: sizes.screenWidth * 0.01,
        marginTop: sizes.screenHeight * 0.05,
        borderRadius:sizes.screenWidth * 0.1,    
        height: sizes.screenHeight * 0.06,
        backgroundColor:colors.black,
        width: sizes.screenHeight * 0.44,
        justifyContent:'center'
      },
      bottomBtn1: {
        marginLeft: sizes.screenWidth * 0.01,
        marginTop: sizes.screenHeight * 0.02,
        borderRadius:sizes.screenWidth * 0.1,    
        height: sizes.screenHeight * 0.06,
        backgroundColor:colors.white,
        width: sizes.screenHeight * 0.44,
        justifyContent:'center',
        borderWidth:1
      },
      bottomBtnText:{
        color:colors.white,
        fontSize:fontSize.medium,
        textAlign:'center',
      },
      bottomBtnText1:{
        color:colors.black,
        fontSize:fontSize.medium,
        textAlign:'center',
      },
})
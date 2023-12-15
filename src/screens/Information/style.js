import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
    mainContainer:{
        paddingHorizontal:sizes.screenWidth * 0.04
    },
    centerView:{
        paddingHorizontal:sizes.screenWidth * 0.1,
        marginTop:sizes.screenHeight * 0.07
    },
    textField:{
        borderWidth:1,
        marginTop:sizes.screenHeight * 0.01,
        paddingHorizontal:sizes.screenWidth * 0.03,
        borderRadius:sizes.screenWidth * 0.03,
        width:sizes.screenWidth * 0.77,
        borderColor:'#0000001a',
        color:colors.black
    },
    textFieldRow:{
        borderWidth:1,
        marginTop:sizes.screenHeight * 0.01,
        marginRight:sizes.screenHeight * 0.02,
        paddingHorizontal:sizes.screenWidth * 0.03,
        borderRadius:sizes.screenWidth * 0.03,
        width:sizes.screenWidth * 0.36,
        borderColor:'#0000001a',
        color:colors.black
    },
    text:{
        color:colors.black,
        marginLeft:sizes.screenWidth * 0.01
    },
    margin:{
        marginBottom:sizes.screenHeight * 0.02
    },
    row:{
        flexDirection:'row',
        alignItems:'center'
    },
    checkBoxImg:{
        resizeMode:'contain',
        width:sizes.screenWidth * 0.05,
        height:sizes.screenWidth * 0.05,
    },
    checkBoxText:{
        color:colors.black,
        marginLeft:sizes.screenWidth * 0.02
    },
    modalBottomBtn: {
        textAlignVertical:'center',
        textAlign:'center',
        marginTop: sizes.screenHeight * 0.14,
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
})
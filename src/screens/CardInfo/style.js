import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
    mainContainer:{
        paddingHorizontal:sizes.screenWidth * 0.04
    },
    centerView:{
        alignSelf:'center',
        // paddingHorizontal:sizes.screenWidth * 0.1,
        marginTop:sizes.screenHeight * 0.07,
    },
    cartImgSty: {
        resizeMode: "contain",
        width: sizes.screenWidth * 0.07,
        height: sizes.screenWidth * 0.07,
      },
      cartImgView:{
        position:'absolute',
        right:sizes.screenWidth * 0.03,
        top:sizes.screenHeight * 0.03
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
        marginRight:sizes.screenHeight * 0.042,
        paddingHorizontal:sizes.screenWidth * 0.03,
        borderRadius:sizes.screenWidth * 0.03,
        width:sizes.screenWidth * 0.28,
        borderColor:'#0000001a',
        color:colors.black
    },
    textFieldRow1:{
        borderWidth:1,
        marginTop:sizes.screenHeight * 0.01,
        marginRight:sizes.screenHeight * 0.02,
        paddingHorizontal:sizes.screenWidth * 0.03,
        borderRadius:sizes.screenWidth * 0.03,
        width:sizes.screenWidth * 0.18,
        borderColor:'#0000001a',
        color:colors.black
    },
    textFieldRow2:{
        borderWidth:1,
        marginTop:sizes.screenHeight * 0.037,
        marginRight:sizes.screenHeight * 0.02,
        paddingHorizontal:sizes.screenWidth * 0.03,
        borderRadius:sizes.screenWidth * 0.03,
        width:sizes.screenWidth * 0.18,
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
        marginTop: sizes.screenHeight * 0.05,
        borderRadius:sizes.screenWidth * 0.02,    
        height: sizes.screenHeight * 0.06,
        backgroundColor:colors.black,
        width: sizes.screenHeight * 0.39,
        alignItems:'center',
        paddingTop:sizes.screenHeight * 0.015,
        alignSelf:'center',
      },
      bottomBtnText:{
        color:colors.white,
        fontSize:fontSize.medium,
        fontWeight:'500',
      },
      visaSize:{
        resizeMode:'contain',
        width:sizes.screenWidth * 0.9,
        height:sizes.screenHeight * 0.24,
      },
      sliderView:{
        marginTop:sizes.screenHeight * 0.03,
        alignSelf:'center',
      },
      horizontalLine:{
        width:sizes.screenWidth * 0.3,
        height:sizes.screenHeight * 0.001,
        backgroundColor:colors.disabledBg,
        marginTop:sizes.screenHeight * 0.01,
        marginBottom:sizes.screenHeight * 0.01,
    },
    optionView:{
        width:sizes.screenWidth * 0.35,
        height:sizes.screenHeight * 0.1,
        paddingLeft:sizes.screenWidth * 0.03,
        justifyContent:'center',
        borderRadius:sizes.screenWidth * 0.03,
        backgroundColor:'white',
        marginLeft:sizes.screenWidth * 0.55,
    },
    optionText:{
        color:colors.black,
    },
    optionText1:{
        color:colors.red
    },
    mainModal:{
        backgroundColor:'white',
        height:sizes.screenHeight * 0.25,
        borderRadius:sizes.screenWidth * 0.08,
        marginTop:sizes.screenHeight * 0.1,
    },
    modalFirstView:{
        alignSelf:'center',
        alignItems:'center',
        marginTop:sizes.screenHeight * 0.033,
        marginBottom:sizes.screenHeight * 0.01
    },
    modalFirstViewText:{
        fontSize:fontSize.large,
        color:colors.black,
        fontWeight:'bold'
    },
    modalSecondView:{
        flexDirection:'row',
        alignSelf:'center',
        marginTop:sizes.screenHeight * 0.02
    },
    modalBtn:{
        color:colors.black,
        fontSize:fontSize.medium,
        fontWeight:'bold'
    },
    modalBtn1:{
        color:colors.white,
        fontSize:fontSize.medium,
        fontWeight:'bold'
    },
    modalBtnView:{
        width:sizes.screenWidth * 0.32,
        height:sizes.screenWidth * 0.12,
        alignItems:'center',
        justifyContent:'center',
    },
    modalBtnView1:{
        backgroundColor:colors.black,
        width:sizes.screenWidth * 0.32,
        height:sizes.screenWidth * 0.12,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:sizes.screenWidth * 0.02,
        borderRadius:sizes.screenWidth * 0.03
    },
})
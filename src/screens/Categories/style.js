import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:colors.white,
        height:sizes.screenHeight,
        width:sizes.screenWidth,
    },
    textFeildView:{
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        paddingLeft:sizes.screenWidth * 0.06,
        borderRadius:sizes.screenWidth * 0.1,
        marginTop:sizes.screenHeight * 0.03,
        borderColor:colors.disabledBg3
    },
    searchImg:{
        resizeMode:'contain',
        width:sizes.screenWidth * 0.05,
        height:sizes.screenHeight * 0.05,
    },
    textField:{
        color:colors.black,
        // backgroundColor:'red',
        width:sizes.screenWidth * 0.8,
        marginLeft:sizes.screenWidth * 0.04
    },
    padding:{
        paddingHorizontal:sizes.screenWidth * 0.04
    },
    textStyling:{
        color:colors.black,
        fontSize:fontSize.medium,
        fontWeight:'500',
        marginTop:sizes.screenHeight * 0.02
    },
    categoryMainView:{
        flexDirection:'row',
        marginTop:sizes.screenHeight * 0.01
    },
    categoryView:{
        // borderWidth:1,
        width:sizes.screenWidth * 0.4,
        height:sizes.screenHeight * 0.14,
        justifyContent:'center',
        borderRadius:sizes.screenWidth * 0.03,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 0,
        elevation: 7,
        backgroundColor:'white',
        marginTop:sizes.screenHeight * 0.02,
        marginRight:sizes.screenHeight * 0.03,
    },
    imgStyling:{
        resizeMode:'contain',
        width:sizes.screenWidth * 0.4,
        height:sizes.screenHeight * 0.1,
        // backgroundColor:'red'
    },
    categoryText:{
        color:colors.black,
        textAlign:'center',
        marginTop:sizes.screenHeight * 0.01,
        marginBottom:sizes.screenHeight * 0.01,
    },
})
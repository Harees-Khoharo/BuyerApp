import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:colors.white,
        height:sizes.screenHeight,
        width:sizes.screenWidth,
    },
    padding:{
        paddingHorizontal:sizes.screenWidth * 0.04
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
    TextRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:sizes.screenHeight * 0.02
    },
    textStyling:{
        color:colors.black,
        fontSize:fontSize.medium,
        fontWeight:'500'
    },
    horizontalLine:{
        width:sizes.screenWidth * 0.93,
        height:sizes.screenHeight * 0.001,
        backgroundColor:'#C4C4C4',
        alignSelf:'center',
        marginTop:sizes.screenHeight * 0.02,
        marginBottom:sizes.screenHeight * 0.02,
    },
    searchHistory:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:sizes.screenWidth * 0.03,
        alignItems:'center',
        // marginTop:sizes.screenHeight * 0.02
    },
    textStyling1:{
        color:colors.disabledBg3,
        fontSize:fontSize.medium
    },
})
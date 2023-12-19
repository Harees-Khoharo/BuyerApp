import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:colors.white,
        height:sizes.screenHeight,
        width:sizes.screenWidth,
    },
    Ratingrow:{
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center',
        marginTop:sizes.screenHeight * 0.05
    },
    ratingText:{
        color:colors.black,
        fontSize:fontSize.h2,
        fontWeight:'500'
    },
    ratingText1:{
        color:colors.disabledBg3,
        right:sizes.screenWidth*0.01
    },
    ratingImg:{
        resizeMode:'contain',
        width:sizes.screenWidth * 0.7,
        height:sizes.screenHeight * 0.15,
        // backgroundColor:'red'
    },
    reviewText2:{
        color:colors.black,
        fontSize:fontSize.h6,
        fontWeight:'500'
    },
    reView:{
        padding:sizes.screenWidth*0.05,
        flexDirection:'row',
        alignItems:'center',

    },
    noWithPhoto:{
        resizeMode:'contain',
        height:sizes.screenHeight*0.02,
        width:sizes.screenWidth*0.3
    },
    withPhoto:{
        resizeMode:'contain',
        height:sizes.screenHeight*0.02,
        width:sizes.screenWidth*0.3
    },
    imageLeft:{
        left:sizes.screenWidth*0.4,
        alignSelf:'center',
    },
    kinStyle:{
        color:colors.black,
        fontSize:fontSize.large
    },
    month:{
        color:colors.disabledBg3,
        fontSize:fontSize.small
    },
    showPhotoRow:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    starSiz:{
        resizeMode:'contain',
        width:sizes.screenWidth * 0.25,
        height:sizes.screenHeight * 0.02,
        // backgroundColor:'red'
    },
    mainReviewBox:{
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

        width:sizes.screenWidth * 0.9 ,
        alignSelf:'center',
        // overflow:'hidden',
        paddingBottom: sizes.screenHeight*0.02
    },
    textColor:{
        color:colors.disabledBg3,
        marginTop:sizes.screenHeight * 0.01,
        marginBottom:sizes.screenHeight * 0.01,
    },
    photo:{
        resizeMode:'contain',
        width:sizes.screenWidth * 0.3,
        height:sizes.screenHeight * 0.15,
        marginRight:sizes.screenWidth * 0.02
        // backgroundColor:'red'
    },
    imgRow:{
        flexDirection:'row',
        paddingLeft: sizes.screenWidth*0.07
    },
})
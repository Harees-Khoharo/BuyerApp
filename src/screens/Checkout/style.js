import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
  topMainContainer:{
    color:colors.white,
  },
    MainCartView: {
        padding: sizes.screenWidth * 0.03,
        marginTop: sizes.screenHeight * 0.02,
        height: sizes.screenHeight * 0.13,
        width: sizes.screenWidth * 0.9,
        borderRadius: sizes.screenWidth * 0.03,
        backgroundColor: colors.white,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,
        alignSelf:'center'
      },
      firstCart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: sizes.screenHeight * 0.02,
      },
      secondRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: sizes.screenHeight * 0.02,
        marginTop: sizes.screenHeight * 0.04,
        paddingHorizontal:sizes.screenWidth * 0.03
      },
      secondCart: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: sizes.screenHeight * 0.02,
      },
      firstCartText: {
        color: colors.black,
      },
      secondRowText:{
        color: colors.black,
        fontSize:fontSize.large,
      },
      firstCartText1: {
        color: colors.red,
      },
      secondRowText2:{
        color: colors.red,
        marginRight:sizes.screenWidth * 0.05,
      },

      heading:{
        color:colors.black,
        fontSize:fontSize.large,
        marginLeft: sizes.screenHeight * 0.02,
        marginTop: sizes.screenHeight * 0.03,
        fontWeight:'500'
      },
      row:{
        flexDirection:'row',
        marginLeft:sizes.screenWidth * 0.04,
        alignItems:'center',
        marginBottom:sizes.screenHeight * 0.02
      },
      imgSize:{
        resizeMode:'contain',
        width:sizes.screenWidth * 0.2,
        height:sizes.screenHeight * 0.06,
      },
      pinText:{
        marginLeft:sizes.screenWidth * 0.04,
        color:colors.black
      },
      horizontalView:{
        flexDirection:'row',
        marginTop:sizes.screenWidth * 0.05,
        marginBottom:sizes.screenWidth * 0.15
      },
      horizontalView1:{
        // borderWidth:1,
        backgroundColor: colors.white,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,
        alignItems:'center',
        justifyContent:'center',
        width:sizes.screenWidth * 0.27,
        height:sizes.screenHeight * 0.1,
        borderRadius:sizes.screenWidth * 0.03,
        marginLeft:sizes.screenWidth * 0.05
      },
      pricesStyling: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: sizes.screenWidth * 0.07,
        marginTop:sizes.screenHeight * 0.012
      },
      pricesStyling2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: sizes.screenWidth * 0.07,
        marginTop: sizes.screenHeight * 0.012,
      },
      priceText1: {
        color: colors.disabledBg3,
      },
      priceNumber1: {
        color: colors.black,
        fontWeight: 'bold',
      },
      priceText2: {
        color: colors.disabledBg3,
        fontSize: fontSize.medium,
        fontWeight:'bold'
      },
      priceNumber2: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: fontSize.medium,
      },
      bottomBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: sizes.screenWidth * 0.04,
        paddingHorizontal: sizes.screenWidth * 0.03,
        marginTop: sizes.screenHeight * 0.03,
        borderRadius:sizes.screenWidth * 0.1,    
        height: sizes.screenHeight * 0.06,
        backgroundColor:colors.black,
        width: sizes.screenHeight * 0.46,
      },
      modalBottomBtn: {
        textAlignVertical:'center',
        textAlign:'center',
        marginLeft: sizes.screenWidth * 0.04,
        marginTop: sizes.screenHeight * 0.07,
        borderRadius:sizes.screenWidth * 0.1,    
        height: sizes.screenHeight * 0.06,
        backgroundColor:colors.btnBlue,
        width: sizes.screenHeight * 0.46,
        alignItems:'center',
        paddingTop:sizes.screenHeight * 0.015,
      },
      bottomBtnText:{
        color:colors.white,
        fontSize:fontSize.medium,
        fontWeight:'500',
        marginLeft:sizes.screenWidth * 0.02,
      },
})
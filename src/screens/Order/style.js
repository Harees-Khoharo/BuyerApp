import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
  mainContainer: {
    // paddingHorizontal:sizes.screenWidth * 0.03
  },
  firstView: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: '#D9D9D9',
    paddingHorizontal: sizes.screenWidth * 0.05,
    height:sizes.screenHeight * 0.04,
    alignItems:'center',
    marginTop:sizes.screenHeight * 0.02
  },
  textStyling: {
    color: colors.black,
    fontSize: fontSize.medium,
    fontWeight: "500",
  },
  cartSizing:{
    alignSelf:'center',
    resizeMode:'contain',
    width:sizes.screenWidth * 0.2,
    height:sizes.screenWidth * 0.2,
    marginTop:sizes.screenHeight * 0.03
  },
  textStyling2:{
    alignSelf:'center',
    alignItems:'center',
    marginTop:sizes.screenHeight * 0.02
},
text:{
    color:colors.black,
    fontWeight:'bold',
    marginBottom:sizes.screenHeight * 0.02
},
text1:{
    color:colors.black,
},
btnView: {
    alignItems: 'center',
    marginTop: sizes.screenWidth * 0.1,
  },
  btnText: {
    color: colors.white,
    backgroundColor: colors.black,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.9,
    borderRadius: sizes.screenWidth * 0.2,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: '500',
    fontSize: fontSize.medium,
  },
  horizontailLine:{
    height:sizes.screenHeight * 0.004,
    width:sizes.screenWidth * 0.43,
    backgroundColor:'black'
  },
  horizontailLine2:{
    height:sizes.screenHeight * 0.004,
    width:sizes.screenWidth * 0.43,
    backgroundColor:'black',
    alignSelf: "flex-end"
  }
});

import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
 
    redBtnText:{
    textAlign:'center',
    fontSize:fontSize.h6,
    color:colors.white,
    fontFamily:'Formula1-Bold'    
  },
  btnRed:{
    height:sizes.screenHeight*0.053,
    width:sizes.screenWidth*0.8,
    alignSelf:'center',
    justifyContent:'center'

  }
});

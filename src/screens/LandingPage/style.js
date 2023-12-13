import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  landingBg: {
    height: sizes.screenHeight,
  },
  textView: {
    marginTop: sizes.screenHeight * 0.63,
  },
  head: {
    color: colors.white,
    textAlign: 'center',
    fontSize: fontSize.h3,
    textTransform: 'uppercase',
    fontFamily:'Formula1-Bold'    
  },
  content:{
    color: colors.disabledIcon,
    textAlign: 'center',
    padding:sizes.screenHeight*0.03,
    fontSize:fontSize.h6,
    width:sizes.screenWidth*0.9,
    alignSelf:'center',

  },
  btnTop:{
    marginTop:sizes.screenHeight*0.015
  }
});

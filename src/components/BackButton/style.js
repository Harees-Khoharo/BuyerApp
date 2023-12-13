import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  padding: {
    padding: sizes.screenWidth * 0.05,
    marginTop: sizes.screenHeight * 0.02,
  },
  backArrow: {
    height: sizes.screenHeight * 0.015,
    width: sizes.screenHeight * 0.015,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: fontSize.h5,
    color: colors.white,
    fontFamily: 'Formula1-Bold',
  },
});

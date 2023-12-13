import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';

export default function Button({title, onPress, dark, loader, disabled}) {
  return (
    <TouchableOpacity onPress={onPress}>
      {!disabled ? (
        <ImageBackground
          source={!dark ? images.btnRed : images.btnBlack}
          style={styles.btnRed}>
          <Text
            style={
              // !dark ? styles.greenBtnText :
              styles.redBtnText
            }>
            {title}
          </Text>
        </ImageBackground>
      ) : (
        <ImageBackground source={images.disableBtn} style={styles.btnRed}>
          <Text
            style={
              // !dark ? styles.greenBtnText :
              styles.redBtnText
            }>
            {title}
          </Text>
        </ImageBackground>
      )}
    </TouchableOpacity>
  );
}

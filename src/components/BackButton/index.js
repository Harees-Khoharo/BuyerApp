import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import images from '../../services/utilities/images';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';

export default function BackButton({title}) {
  const navigation = useNavigation();

  return (
    <View style={[styles.padding, styles.row]}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
        <Image source={images.backBtn} style={styles.backArrow} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

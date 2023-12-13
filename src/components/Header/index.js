import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from './style';

export default function Header({backImage, title, addToCartImage}) {
    return (
      <SafeAreaView>
        <View style={styles.headerView}>
          <TouchableOpacity>
            <Image source={backImage} style={styles.imgSty} />
          </TouchableOpacity>
          <Text style={styles.headerText}>{title}</Text>
          <TouchableOpacity>
            <Image source={addToCartImage} style={styles.cartImgSty} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'
import images from '../../services/utilities/images'
import { colors } from '../../services'
import Header from '../../components/Header'

export default function TrackOrder() {
  return (
    <SafeAreaView>
        <View style={styles.mainContainer}>
            <Header backImage={images.backArrow} title={'Track Order'} />
            <View style={styles.padding}>
            <View style={styles.row}>
              <Image source={images.myCartImgTwo} style={styles.imgSty} />
              <View style={styles.middleCol}>
                <Text style={styles.middleColText}>Automotive</Text>
                <View style={styles.row3}>
                  <Text style={styles.textColor}>
                    Color:<Text style={styles.textBlack}>Black</Text>
                  </Text>
                  <Text style={styles.textColor}>
                    Size:<Text style={styles.textBlack}>M</Text>
                  </Text>
                </View>
                <Text>Quality:<Text style={styles.textBlack}>2 pcs</Text></Text>
                <Text style={styles.prices}>$55</Text>
              </View>
            </View>
            <View style={styles.horizontalLine}></View>
            </View>
        </View>
    </SafeAreaView>
  )
}
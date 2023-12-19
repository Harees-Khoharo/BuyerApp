import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'
import images from '../../services/utilities/images'
import { colors, sizes } from '../../services'
import Header from '../../components/Header'

export default function TrackOrder() {
  return (
    <SafeAreaView>
        <View style={styles.mainContainer}>
            <Header backImage={images.backArrow} title={'Track Order'} />
            <View style={styles.padding}>
            <View style={styles.row}>
              <Image source={images.myCartImg} style={styles.imgSty} />
              <View style={styles.middleCol}>
                <Text style={styles.middleColText}>Pullover</Text>
                <View style={styles.row3}>
                  <Text style={styles.textColor}>
                    Color:<Text style={styles.textBlack}>Black</Text>
                  </Text>
                  <Text style={styles.textColor}>
                    Size:<Text style={styles.textBlack}>L</Text>
                  </Text>
                </View>
                <Text style={styles.textColor}>Quality:<Text style={styles.textBlack}>2 pcs</Text></Text>
                <Text style={styles.prices}>$55</Text>
              </View>
            </View>
            <View style={styles.horizontalLine}></View>
            <Text style={styles.orderRowMainText}>Order Details</Text>
            <View style={styles.orderRow}>
                <Text style={styles.orderRowText}>Expected Delivery date</Text>
                <Text style={styles.orderRowText2}>03 Nov 2023</Text>
            </View>
            <View style={styles.orderRow}>
                <Text style={styles.orderRowText}>Tracking ID</Text>
                <Text style={styles.orderRowText2}>TRK453840685</Text>
            </View>
            <View style={styles.horizontalLine}></View>
            <View style={styles.deliveryPhase}>
                <Image source={images.orderLine} style={styles.orderLineImg}/> 
                <View style={styles.margin}>
                    <Text style={styles.deliveryPhaseText}>Order Placed</Text>
                    <Text style={styles.deliveryPhaseText2}>28 Nov 2023, 04:34pm</Text>
                    <Text style={styles.deliveryPhaseTextMiddle}>In Progress</Text>
                    <Text style={styles.deliveryPhaseText2}>28 Nov 2023, 04:34pm</Text>
                    <Text style={styles.deliveryPhaseTextMiddle}>Delivered</Text>
                    <Text style={styles.deliveryPhaseText2}>23 Jan 2323, 04:34pm</Text>
                </View>
                <View style={styles.deliveryImg}>
                <Image source={images.order} style={styles.orderImg}/>
                <Image source={images.timer} style={styles.orderImg}/>
                <Image source={images.deliver} style={styles.orderImg}/>
                </View>
            </View>
            </View>
        </View>
    </SafeAreaView>
  )
}
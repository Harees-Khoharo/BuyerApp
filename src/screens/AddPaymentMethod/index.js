import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import images from "../../services/utilities/images";

export default function AddPaymentMethod({navigation}) {
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={images.leftArrowIcon} style={styles.headerImg} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Payment Methods</Text>
        </View>
        <View style={styles.top}>
          <View style={styles.labelView}>
            <Text style={styles.creditText}>Credit & Debit Card</Text>
          </View>
            <View style={styles.passViewMain}>
          <TouchableOpacity  onPress={() => navigation.navigate('CardInfo')}>
              <View style={styles.bottomViewAllingment}>
                <View style={styles.Img}>
                  <Image source={images.wallet} style={styles.passViewSty} />
                  <Text style={styles.passTextSty}>Add New Card</Text>
                </View>
                <Image source={images.add} style={styles.rightArrowIconSty} />
              </View>
          </TouchableOpacity>
            </View>

          <View style={styles.height}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

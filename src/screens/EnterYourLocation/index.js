import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./style";
import images from "../../services/utilities/images";
import { colors } from "../../services";
import Feather from "react-native-vector-icons/Feather";

export default function EnterYourLocation({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.landingBody}>
        <View style={styles.header}>
          <TouchableOpacity  onPress={() => navigation.goBack()}>
            <Image style={styles.headerImg} source={images.leftIcon} />
          </TouchableOpacity>
          <Text style={styles.headerHeading}>Enter Your Location</Text>
        </View>

        <View style={styles.inputField}>
          <TouchableOpacity>
            <Image style={styles.icon} source={images.searchIcon} />
          </TouchableOpacity>
          <TextInput
            placeholder="Enter a new address"
            placeholderTextColor={colors.disabledBg2}
            style={styles.input}
          />
          <TouchableOpacity>
            <Image style={styles.icon} source={images.crossIcon} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.currentLocationRow}>
          <Image style={styles.icon} source={images.locationIcon} />
          <Text style={styles.locationText}>Use your current location</Text>
          <Text style={styles.enable}>Enable</Text>
        </TouchableOpacity>

        <View style={styles.hr}></View>

        <Text style={styles.search}>SEARCH RESULT</Text>

        <TouchableOpacity style={styles.currentLocationRow2}>
          <Image style={styles.icon} source={images.locationIcon} />
          <Text style={styles.locationText}>Golden Avenue</Text>
        </TouchableOpacity>

        <Text style={styles.locationText2}>8502 Preston Rd. ingl..</Text>
      </View>
    </SafeAreaView>
  );
}

import React, { useRef, useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./style";
import images from "../../services/utilities/images";
import { TextInput } from "react-native-gesture-handler";
import { colors } from "../../services";

export default function Landing({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.landingBody}>
        <Image style={styles.landingImg} source={images.landingImg} />
        <Text style={styles.heading}>Select Country</Text>
        <Text style={styles.textBlack}>
          This will be use to show item available in your region/country
        </Text>
        <View style={styles.textField}>
          <Image source={images.usFlag} style={styles.flagSiz} />
          <TextInput
            placeholder="United State"
            placeholderTextColor={colors.black}
            style={styles.textInput}
          />
          <TouchableOpacity>
            <Image source={images.dropdown} style={styles.dropDownSiz} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.bottomBtn}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.bottomBtnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

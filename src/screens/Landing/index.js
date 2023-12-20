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

export default function Landing({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.landingBody}>
        <Image style={styles.landingImg} source={images.landingImg} />
        <Text style={styles.heading}>Select Country</Text>
        <Text style={styles.textBlack}>
          This will be use to show item available in your region/country
        </Text>

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

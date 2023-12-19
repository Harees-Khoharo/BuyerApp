import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import Header from "../../components/Header";
import images from "../../services/utilities/images";
import { colors, sizes } from "../../services";

export default function VisualSearch() {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header backImage={images.backArrow} title={"Visual search"} />
        <ImageBackground source={images.visualBg} style={styles.visualBg}>
          <View style={styles.contentView}>
            <Text style={styles.whiteText}>
              Search for an item by taking a photo or uploading an image
            </Text>
            <View style={styles.btnTop}>
              <TouchableOpacity style={styles.bottomBtn}>
                <Text style={styles.bottomBtnText}>TAKE A PHOTO</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottomBtn1}>
                <Text style={styles.bottomBtnText1}>UPLOAD AN IMAGE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

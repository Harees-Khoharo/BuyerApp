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

export default function MyStore() {
  return (
    <SafeAreaView>
      <View style={styles.landingBody}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image style={styles.headerImg} source={images.leftIcon} />
          </TouchableOpacity>
          <Text style={styles.headerHeading}>My Store</Text>
        </View>

        <Image style={styles.b} source={images.b} />

        <Text style={styles.heading}>Badly Store</Text>

        <View style={styles.btnRow}>
          <TouchableOpacity style={styles.btnWhiteSmall}>
            <Text style={styles.btnWhiteTextSmall}>Edit Store</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnBlackSmall}>
            <Text style={styles.btnBlackTextSmall}>View Store</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Image style={styles.removeStore} source={images.removeStore} />
        </TouchableOpacity>

        <Text style={styles.textBold}>You don't have any products</Text>
        <TouchableOpacity style={styles.btnWhite}>
          <Text style={styles.btnWhiteText}>Add Product</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

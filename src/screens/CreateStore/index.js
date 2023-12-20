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

export default function CreateStore({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.landingBody}>
        <View style={styles.header}>
          <Text style={styles.Heading}>My Store</Text>
        </View>

        <Image style={styles.myStoreImg} source={images.myStoreImg} />

        <Text style={styles.textBold}>You Dont Have a Store</Text>
        <TouchableOpacity
          style={styles.createStoreBtn}
          onPress={() => navigation.navigate("CreateNewStore")}
        >
          <Text style={styles.createStoreBtnText}>Create Store</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

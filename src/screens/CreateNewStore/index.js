import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./style";
import images from "../../services/utilities/images";
import { colors, sizes } from "../../services";
import Feather from "react-native-vector-icons/Feather";

export default function CreateNewStore() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(false);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(false);

  return (
    <SafeAreaView>
      <View style={styles.landingBody}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image style={styles.headerImg} source={images.leftIcon} />
          </TouchableOpacity>
          <Text style={styles.headerHeading}>My Store</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image style={styles.myStoreImg} source={images.myStoreImg} />

          <Text style={styles.senterText}>
            This information is used to set up your shop
          </Text>

          <Text style={styles.textLight}>Store Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Badly Store"
            placeholderTextColor={colors.disabledBg2}
          />
          <View style={styles.hr}></View>

          <Text style={styles.textLight}>Store eb Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Badlystore.shop"
            placeholderTextColor={colors.disabledBg2}
          />
          <View style={styles.hr}></View>

          <Text style={styles.textLight}>Store Description</Text>
          <TextInput
            style={styles.input}
            placeholder="Sell Croceries and homecare products"
            placeholderTextColor={colors.disabledBg2}
          />
          <View style={styles.hr}></View>

          <Text style={styles.textLight}>Store Type</Text>
          <TextInput
            style={styles.input}
            placeholder="Groceries Store"
            placeholderTextColor={colors.disabledBg2}
          />
          <View style={styles.hr}></View>

          <Text style={styles.textLight}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="123 Crescent Ave, Woodbury"
            placeholderTextColor={colors.disabledBg2}
          />
          <View style={styles.hr}></View>

          <Text style={styles.textLight}>State</Text>
          <TextInput
            style={styles.input}
            placeholder="Newyork"
            placeholderTextColor={colors.disabledBg2}
          />
          <View style={styles.hr}></View>

          <Text style={styles.textLight}>Country</Text>
          <TextInput
            style={styles.input}
            placeholder="USA"
            placeholderTextColor={colors.disabledBg2}
          />
          <View style={styles.hr}></View>
          <View style={{ height: sizes.screenHeight * 0.16 }}></View>
        </ScrollView>
        <Image style={styles.shadow} source={images.shadow} />
        <TouchableOpacity style={styles.bottomBtn}>
          <Text style={styles.bottomBtnText}>Create</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

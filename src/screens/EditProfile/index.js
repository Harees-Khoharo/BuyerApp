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

export default function EditProfile({navigation}) {
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={images.leftArrowIcon} style={styles.headerImg} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Edit my Profile</Text>
        </View>
        <View style={styles.top}>

        <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
          <View style={styles.passViewMain}>
            <View style={styles.bottomViewAllingment}>
              <View style={styles.Img}>
                <Image
                  source={images.notificationSetting}
                  style={styles.passViewSty}
                />
                <Text style={styles.passTextSty}>Notification Settings</Text>
              </View>
              <Image
                source={images.rightArrow}
                style={styles.rightArrowIconSty}
              />
            </View>
          </View>
        </TouchableOpacity >
        <TouchableOpacity onPress={() => navigation.navigate("PasswordManager")}>
          <View style={styles.passViewMain}>
            <View style={styles.bottomViewAllingment}>
              <View style={styles.Img}>
                <Image source={images.password} style={styles.passViewSty} />
                <Text style={styles.passTextSty}>Password Manager</Text>
              </View>
              <Image
                source={images.rightArrow}
                style={styles.rightArrowIconSty}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.passViewMain}>
            <View style={styles.bottomViewAllingment}>
              <View style={styles.Img}>
                <Image source={images.recycle} style={styles.passViewSty} />
                <Text style={styles.passTextSty}>Delete Account</Text>
              </View>
              <Image
                source={images.rightArrow}
                style={styles.rightArrowIconSty}
              />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.height}></View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

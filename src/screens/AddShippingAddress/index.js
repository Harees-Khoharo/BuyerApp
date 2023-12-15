import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native";
import React from "react";
import { styles } from "./style";
import images from "../../services/utilities/images";
import Header from "../../components/Header";
import { colors, sizes } from "../../services";

export default function AddShippingAddress() {
  return (
    <SafeAreaView>
      <ImageBackground style={styles.container}>
        <Header
          title={"Adding Shipping Addresses"}
          backImage={images.backArrow}
        />
        <View style={styles.mainContainer}>
          <View style={styles.MainCartView}>
            <TextInput
              placeholder="Full name"
              placeholderTextColor={colors.disabledBg2}
              style={styles.inputFieldName}
            />
          </View>
          <View style={styles.MainCartView}>
            <Text style={styles.labelName}>Address</Text>
            <TextInput
              placeholder="3 Newbrifge Court"
              placeholderTextColor={colors.black}
              style={styles.inputField}
            />
          </View>

          <View style={styles.MainCartView}>
            <Text style={styles.labelName}>City</Text>
            <TextInput
              placeholder="Chino Hills"
              placeholderTextColor={colors.black}
              style={styles.inputField}
            />
          </View>

          <View style={styles.MainCartView}>
            <Text style={styles.labelName}>State/Province/Region</Text>
            <TextInput
              placeholder="California"
              placeholderTextColor={colors.black}
              style={styles.inputField}
            />
          </View>

          <View style={styles.MainCartView}>
            <Text style={styles.labelName}>Zip Code (Postal Code)</Text>
            <TextInput
              placeholder="91709"
              placeholderTextColor={colors.black}
              style={styles.inputField}
            />
          </View>
          <TouchableOpacity>
            <View style={styles.MainCartView}>
              <Text style={styles.labelName}>Country</Text>
              <View style={styles.row}>
                <Text
                  style={[
                    styles.inputField,
                    { top: sizes.screenHeight * 0.005 },
                  ]}
                >
                  United States
                </Text>
                <Image source={images.rightArrow} style={styles.arrowSizing} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomBtn}>
            <Text style={styles.bottomBtnText}>Save Address</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

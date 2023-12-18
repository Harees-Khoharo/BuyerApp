import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import images from "../../services/utilities/images";
import { styles } from "./style";
import { colors, sizes } from "../../services";

export default function Information() {
  const [tabName, setTabName] = useState(false);
  return (
    <SafeAreaView
      style={{ backgroundColor: colors.white, height: sizes.screenHeight }}
    >
      <View style={styles.mainContainer}>
        <Header
          backImage={images.backArrow}
          title={"Back"}
          addToCartImage={images.threeDot}
        />
        <View style={styles.centerView}>
          <View style={styles.margin}>
            <Text style={styles.text}>Name</Text>
            <TextInput
              placeholder="Name"
              placeholderTextColor={colors.disabledBg3}
              style={styles.textField}
            />
          </View>
          <View style={styles.margin}>
            <Text style={styles.text}>Address</Text>
            <TextInput
              placeholder="Address"
              placeholderTextColor={colors.disabledBg3}
              style={styles.textField}
            />
          </View>
          <View style={styles.row}>
            <View style={styles.margin}>
              <Text style={styles.text}>City</Text>
              <TextInput
                placeholder="City"
                placeholderTextColor={colors.disabledBg3}
                style={styles.textFieldRow}
              />
            </View>
            <View style={styles.margin}>
              <Text style={styles.text}>ZIP Code</Text>
              <TextInput
                placeholder="ZIP Code"
                placeholderTextColor={colors.disabledBg3}
                style={styles.textFieldRow}
              />
            </View>
          </View>
          <View style={styles.margin}>
            <Text style={styles.text}>Mobile Number</Text>
            <TextInput
              placeholder="Mobile Number"
              placeholderTextColor={colors.disabledBg3}
              style={styles.textField}
            />
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => setTabName(!tabName)}>
              <Image
                source={tabName ? images.checkboxoff : images.checkboxon}
                style={styles.checkBoxImg}
              />
            </TouchableOpacity>
            <Text style={styles.checkBoxText}>Set as default address</Text>
          </View>
          <TouchableOpacity style={styles.modalBottomBtn}>
            <Text style={styles.bottomBtnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

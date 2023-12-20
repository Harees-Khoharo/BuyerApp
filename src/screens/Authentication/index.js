import React, { useRef, useState } from "react";
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

export default function Authentication({ navigation }) {
  const [phone, setPhone] = useState("");

  return (
    <SafeAreaView>
      <View style={styles.landingBody}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.headerImg} source={images.leftIcon} />
          </TouchableOpacity>
          <Text style={styles.headerHeading}>Authentication</Text>
        </View>
        <Text style={styles.textNormal}>
          Enter your number below. A code will be sent for verification.
        </Text>
        <View style={styles.inputField}>
          <Image style={styles.grenTick} source={images.phoneIcon} />
          <View>
            <TextInput
              style={styles.input}
              value={phone}
              placeholder="Mobile Number"
              placeholderTextColor={colors.borderGrey}
              onChangeText={(text) => {
                setPhone(text);
              }}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.nextIconContainer}
          onPress={() => navigation.navigate("Verification")}
        >
          <Image style={styles.nextIcon} source={images.nextIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

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

export default function EnableLocationNow({ navigation }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(false);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(false);

  return (
    <SafeAreaView>
      <View style={styles.landingBody}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.headerImg} source={images.leftIcon} />
          </TouchableOpacity>
          <Text style={styles.headerHeading}></Text>
        </View>

        <Image style={styles.locationnn} source={images.locationnn} />

        <Text style={styles.heading}>Enable Location</Text>
        <Text style={styles.textBlack}>
          We need access to your location to be able to use this service.
        </Text>

        <TouchableOpacity
          style={styles.btnBlack}
          onPress={() => navigation.navigate("EnterYourLocation")}
        >
          <Text style={styles.btnBlackText}>Enable Location</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnWhite}>
          <Text style={styles.btnWhiteText}>Not Now</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextIconContainer} onPress={() => navigation.navigate("Home")}>
          <Image style={styles.nextIcon} source={images.nextIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

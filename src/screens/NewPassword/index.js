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

export default function NewPassword() {
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
          <Text style={styles.headerHeading}>Verification</Text>
        </View>
        <Text style={styles.textNormal}>
          Your new password muat be different from the old password
        </Text>

        <Text style={styles.inputLabel}>Password</Text>

        <View style={styles.inputField}>
          <TextInput
            placeholder="Password"
            placeholderTextColor={colors.disabledBg2}
            secureTextEntry={hidePassword ? false : true}
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
            <Feather
              name={hidePassword ? "eye" : "eye-off"}
              color={colors.disabledBg2}
              size={20}
              style={{
                alignSelf: "flex-end",
              }}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.inputLabel}>Confirm Password</Text>

        <View style={styles.inputField}>
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor={colors.disabledBg2}
            secureTextEntry={hideConfirmPassword ? false : true}
            style={styles.input}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
          <TouchableOpacity
            onPress={() => setHideConfirmPassword(!hideConfirmPassword)}
          >
            <Feather
              name={hideConfirmPassword ? "eye" : "eye-off"}
              color={colors.disabledBg2}
              size={20}
              style={{
                alignSelf: "flex-end",
              }}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.nextIconContainer}>
          <Image style={styles.nextIcon} source={images.nextIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

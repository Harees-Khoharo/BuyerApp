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
import Header from "../../components/Header";

export default function PasswordManager() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(false);
  const [hideConfirmNewPassword, setHideConfirmNewPassword] = useState(false);
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [hideConfirmPassword, setHideConfirmPassword] = useState(false);

  return (
    <SafeAreaView>
      <View style={styles.landingBody}>
        <Header backImage={images.backArrow} title={"Password Manager"} />

        <View style={styles.marginTop}>
          <Text style={styles.inputLabel}>Current Password</Text>

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
            <TouchableOpacity style={styles.flexEnd}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
          <Text style={styles.inputLabel}>New Password</Text>

          <View style={styles.inputField}>
            <TextInput
              placeholder="New Password"
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

          <Text style={styles.inputLabel}>Confirm New Password</Text>

          <View style={styles.inputField}>
            <TextInput
              placeholder="Confirm New Password"
              placeholderTextColor={colors.disabledBg2}
              secureTextEntry={hideConfirmNewPassword ? false : true}
              style={styles.input}
              value={confirmNewPassword}
              onChangeText={(text) => setConfirmNewPassword(text)}
            />
            <TouchableOpacity
              onPress={() => setHideConfirmNewPassword(!hideConfirmNewPassword)}
            >
              <Feather
                name={hideConfirmNewPassword ? "eye" : "eye-off"}
                color={colors.disabledBg2}
                size={20}
                style={{
                  alignSelf: "flex-end",
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

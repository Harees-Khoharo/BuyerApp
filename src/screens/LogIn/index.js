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

export default function LogIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView>
      <View style={styles.landingBody}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image style={styles.headerImg} source={images.leftIcon} />
          </TouchableOpacity>
          <Text style={styles.headerHeading}>Login</Text>
        </View>

        <View style={styles.inputField}>
          <View>
            <Text style={styles.inputFieldText}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={(text) => {
                setEmail(text);
              }}
            />
          </View>
          <Image style={styles.grenTick} source={images.grenTick} />
        </View>

        <View style={styles.inputField}>
          <View>
            <Text style={styles.inputFieldText}>Password</Text>
            <TextInput
              style={styles.input}
              value={password}
              secureTextEntry
              onChangeText={(text) => {
                setPassword(text);
              }}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.rightArrowRedContainer}>
          <Text style={styles.rightArrowRedText}>Forgot your password?</Text>
          <Image style={styles.rightArrowRed} source={images.rightArrowRed} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.signUpBtn}>
          <Text style={styles.signUpBtnText}>LOGIN</Text>
        </TouchableOpacity>

        <View style={styles.bottom}>
          <Text style={styles.textBlack}>
            Or Login with your social account
          </Text>
          <View style={styles.socialContainer}>
            <TouchableOpacity>
              <Image style={styles.socialIcon} source={images.googleIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.socialIcon} source={images.appleIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.socialIcon} source={images.fbIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

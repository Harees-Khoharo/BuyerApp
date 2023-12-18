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

export default function ForgotPassword() {
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
          <Text style={styles.headerHeading}>Forgot Password</Text>
        </View>
        <Text style={styles.textBlack}>
          Please, enter your email address. You will receive a link to create a
          new password via email.
        </Text>
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
          <Image style={styles.grenTick} source={images.crossRedIcon} />
        </View>
        <Text style={styles.textRed}>
          * Not a valid emails address. Should be your@gmail.com
        </Text>

        <TouchableOpacity style={styles.signUpBtn}>
          <Text style={styles.signUpBtnText}>SEND</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

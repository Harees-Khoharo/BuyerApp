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

export default function SignUp() {
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
          <Text style={styles.headerHeading}>Sign Up</Text>
        </View>
        <View style={styles.inputField}>
          <View>
            <Text style={styles.inputFieldText}>Name</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={(text) => {
                setName(text);
              }}
            />
          </View>
          <Image style={styles.grenTick} source={images.grenTick} />
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
          <Text style={styles.rightArrowRedText}>Already have an account?</Text>
          <Image style={styles.rightArrowRed} source={images.rightArrowRed} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.signUpBtn}>
          <Text style={styles.signUpBtnText}>SIGN UP</Text>
        </TouchableOpacity>

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
        <Text style={styles.textBlack}>
          Or sign up with your social account
        </Text>
      </View>
    </SafeAreaView>
  );
}

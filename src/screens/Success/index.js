import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { styles } from "./style";
import images from "../../services/utilities/images";

export default function Success({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={images.bags} style={styles.bagImg} />
        <View style={styles.textMainView}>
          <Text style={styles.textView}>Success!</Text>
          <Text style={styles.textView1}>
            Your order will be Review for delivery by
          </Text>
          <Text style={styles.textView1}>nearest Teader soon.</Text>
          <Text style={styles.textView1}>Thank you for choosing our app!</Text>
          <TouchableOpacity style={styles.bottomBtn} onPress={() => navigation.navigate("Home")}>
            <Text style={styles.bottomBtnText}>CONTINUE SHOPPING</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomBtn1} onPress={() => navigation.navigate("Booking")}>
            <Text style={styles.bottomBtnText1}>View Order Request</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

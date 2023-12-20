import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { styles } from "./style";
import Header from "../../components/Header";
import images from "../../services/utilities/images";
import { colors, sizes } from "../../services";

export default function Book({navigation}) {
  return (
    <SafeAreaView
      style={{ backgroundColor: colors.white, height: sizes.screenHeight }}
    >
      <Header
        backImage={images.backArrow}
        title={"Book"}
        addToCartImage={images.threeDot}
      />
      <Image source={images.book} style={styles.bookImg} />
      <Text style={styles.bookText}>You have not added any address yet</Text>
      <TouchableOpacity style={styles.modalBottomBtn}  onPress={() => navigation.navigate("Information")}>
        <Text style={styles.bottomBtnText}>Add new address</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

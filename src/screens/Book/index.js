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

export default function Book() {
  return (
    <SafeAreaView>
      <Header
        backImage={images.backArrow}
        title={"Book"}
        addToCartImage={images.threeDot}
      />
      <Image source={images.book} style={styles.bookImg} />
      <Text style={styles.bookText}>You have not added any address yet</Text>
      <TouchableOpacity style={styles.modalBottomBtn}>
        <Text style={styles.bottomBtnText}>Add new address</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

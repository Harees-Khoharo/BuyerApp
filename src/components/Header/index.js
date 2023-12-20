import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";

export default function Header({
  backImage,
  title,
  addToCartImage,
  searchIcon,
}) {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={backImage} style={styles.imgSty} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{title}</Text>
        <TouchableOpacity>
          <Image
            source={addToCartImage ? addToCartImage : searchIcon}
            style={styles.cartImgSty}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

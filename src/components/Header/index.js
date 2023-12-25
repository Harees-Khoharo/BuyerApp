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
  goto,
}) {
  const navigation = useNavigation();

  const handleGoto = ()=>{
    navigation.navigate(goto)
  }
  return (
    <SafeAreaView>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={backImage} style={styles.imgSty} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{title}</Text>
        <TouchableOpacity onPress={goto && handleGoto}>
          <Image
            source={addToCartImage ? addToCartImage : searchIcon}
            style={styles.cartImgSty}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

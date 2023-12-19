import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { styles } from "./style";
import images from "../../services/utilities/images";
import { colors } from "../../services";

export default function Accessories() {
  return (
    <SafeAreaView>
      <View style={styles.topMainContainer}>
        <Image source={images.electronics2} style={styles.headerImg} />
        <TouchableOpacity style={styles.headerBtnView}>
          <Image source={images.backbtn} style={styles.headerBackBtn} />
        </TouchableOpacity>
        <View style={styles.margin}>
        <Text style={styles.headingTxt}>Accessories</Text>
        <Text style={styles.headingTxt2}>Lorem Ipsum asbxuinajjhvjb</Text>
        <View style={styles.row}>
          <Image source={images.singleStar} style={styles.starImg}/>
          <Text style={styles.headingTxt3}>5.0 Exellent (100+)</Text>
        </View>
        </View>
        <ScrollView>
            <View>
        <TouchableOpacity style={styles.itemsMainView}>
          <Image source={images.myCartImg} style={styles.imgSty} />
          <View>
            <Text style={styles.itemsText}>Pullover</Text>
            <Text style={styles.itemsText1}>Mango</Text>
          <Image source={images.rating} style={styles.imgSty2} />
            <Text style={styles.prices}>$51</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemsMainView}>
          <Image source={images.myCartImg} style={styles.imgSty} />
          <View>
            <Text style={styles.itemsText}>Pullover</Text>
            <Text style={styles.itemsText1}>Mango</Text>
          <Image source={images.rating} style={styles.imgSty2} />
            <Text style={styles.prices}>$51</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemsMainView}>
          <Image source={images.myCartImg} style={styles.imgSty} />
          <View>
            <Text style={styles.itemsText}>Pullover</Text>
            <Text style={styles.itemsText1}>Mango</Text>
          <Image source={images.rating} style={styles.imgSty2} />
            <Text style={styles.prices}>$51</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemsMainView}>
          <Image source={images.myCartImg} style={styles.imgSty} />
          <View>
            <Text style={styles.itemsText}>Pullover</Text>
            <Text style={styles.itemsText1}>Mango</Text>
          <Image source={images.rating} style={styles.imgSty2} />
            <Text style={styles.prices}>$51</Text>
          </View>
    </TouchableOpacity>
        </View>
        <View style={styles.padding}></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import images from "../../services/utilities/images";
import Header from "../../components/Header";
import { colors } from "../../services";

export default function MyCart() {
  const [quantity, setQuantity] = useState(1);
  return (
    <SafeAreaView>
      <View style={styles.mainView}>
        <Header backImage={images.backArrow} title={"My Cart"} />
        <TouchableOpacity style={styles.cartImgView}>
          <Image source={images.search} style={styles.cartImgSty} />
        </TouchableOpacity>
        <View style={styles.row}>
          <Image source={images.myCartImg} style={styles.imgSty} />
          <View style={styles.middleCol}>
            <Text style={styles.middleColText}>Pullover</Text>
            <View style={styles.row3}>
              <Text style={styles.textColor}>
                Color:<Text style={{ color: colors.black }}>Black</Text>
              </Text>
              <Text style={styles.textColor}>
                Size:<Text style={{ color: colors.black }}>L</Text>
              </Text>
            </View>
            <View style={styles.row3}>
              <TouchableOpacity
                onPress={() => quantity > 0 && setQuantity(quantity - 1)}
              >
                <Image source={images.minus} style={styles.threeDotSty2} />
              </TouchableOpacity>
              <Text style={styles.textQuantity}>{quantity}</Text>
              <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                <Image source={images.plusTwo} style={styles.threeDotSty2} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.lastView}>
            <Image source={images.threeDot} style={styles.threeDotSty} />
            <Text style={styles.prices}>$51</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Image source={images.myCartImgOne} style={styles.imgSty} />
          <View style={styles.middleCol}>
            <Text style={styles.middleColText}>Whiskey</Text>
            <View style={styles.row3}>
              <Text style={styles.textColor}>
                Color:<Text style={{ color: colors.black }}>Gray</Text>
              </Text>
              <Text style={styles.textColor}>
                Size:<Text style={{ color: colors.black }}>L</Text>
              </Text>
            </View>
            <View style={styles.row3}>
              <TouchableOpacity
                onPress={() => quantity > 0 && setQuantity(quantity - 1)}
              >
                <Image source={images.minus} style={styles.threeDotSty2} />
              </TouchableOpacity>
              <Text style={styles.textQuantity}>{quantity}</Text>
              <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                <Image source={images.plusTwo} style={styles.threeDotSty2} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.lastView}>
            <Image source={images.threeDot} style={styles.threeDotSty} />
            <Text style={styles.prices}>$30</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Image source={images.myCartImgTwo} style={styles.imgSty} />
          <View style={styles.middleCol}>
            <Text style={styles.middleColText}>Automotive</Text>
            <View style={styles.row3}>
              <Text style={styles.textColor}>
                Color:<Text style={{ color: colors.black }}>Black</Text>
              </Text>
              <Text style={styles.textColor}>
                Size:<Text style={{ color: colors.black }}>M</Text>
              </Text>
            </View>
            <View style={styles.row3}>
              <TouchableOpacity
                onPress={() => quantity > 0 && setQuantity(quantity - 1)}
              >
                <Image source={images.minus} style={styles.threeDotSty2} />
              </TouchableOpacity>
              <Text style={styles.textQuantity}>{quantity}</Text>
              <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                <Image source={images.plusTwo} style={styles.threeDotSty2} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.lastView}>
            <Image source={images.threeDot} style={styles.threeDotSty} />
            <Text style={styles.prices}>$43</Text>
          </View>
        </View>
        <View style={styles.row4}>
          <TextInput
            placeholder="Enter your promo code"
            placeholderTextColor={colors.disabledBg3}
            style={styles.inputField}
          />
          <TouchableOpacity>
            <Image source={images.nextIcon} style={styles.threeDotSty3} />
          </TouchableOpacity>
        </View>
        <View style={styles.row5}>
          <Text style={styles.bottomText1}>Total amount:</Text>
          <Text style={styles.bottomText2}>$124</Text>
        </View>
        <TouchableOpacity style={styles.btnView}>
          <Text style={styles.btnText}>CHECK OUT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

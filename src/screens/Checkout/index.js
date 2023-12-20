import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { styles } from "./style";
import Header from "../../components/Header";
import images from "../../services/utilities/images";
import { colors, sizes } from "../../services";

export default function Checkout({navigation}) {
  return (
    <SafeAreaView
      style={{ backgroundColor: colors.white, height: sizes.screenHeight }}
    >
      <View style={styles.topMainContainer}>
        <Header backImage={images.backArrow} title={"Checkout"} />
        <Text style={styles.heading}>Shipping address</Text>
        <View style={styles.MainCartView}>
          <View style={styles.firstCart}>
            <Text style={styles.firstCartText}>Jane Doe</Text>
            <TouchableOpacity onPress={() => navigation.navigate("ShippingAddresses")} >
              <Text style={styles.firstCartText1}>Change</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.firstCartText}>3 Newbridge Court</Text>
          <Text style={styles.firstCartText}>
            Chino Hills, CA 91709, United States
          </Text>
        </View>
        <View style={styles.secondRow}>
          <Text style={styles.secondRowText}>Payment</Text>
          <TouchableOpacity onPress={() => navigation.navigate("PaymentMethods")}>
            <Text style={styles.secondRowText2}>Change</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Image source={images.mastercard} style={styles.imgSize} />
          <Text style={styles.pinText}>**** **** **** 3947</Text>
        </View>
        <Text style={styles.heading}>Delivery method</Text>
        <View style={styles.horizontalView}>
          <TouchableOpacity style={styles.horizontalView1}>
            <Image source={images.fedex} style={styles.imgSize} />
            <Text>2-3 days</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.horizontalView1}>
            <Image source={images.usps} style={styles.imgSize} />
            <Text>2-3 days</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.horizontalView1}>
            <Image source={images.dhl} style={styles.imgSize} />
            <Text>2-3 days</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.pricesStyling}>
          <Text style={styles.priceText1}>Order:</Text>
          <Text style={styles.priceNumber1}>$112</Text>
        </View>
        <View style={styles.pricesStyling}>
          <Text style={styles.priceText1}>Delivery:</Text>
          <Text style={styles.priceNumber1}>$15</Text>
        </View>
        <View style={styles.pricesStyling2}>
          <Text style={styles.priceText2}>Summary:</Text>
          <Text style={styles.priceNumber2}>$127</Text>
        </View>
        <TouchableOpacity style={styles.bottomBtn}  onPress={() => navigation.navigate("Success")}>
          <Text style={styles.bottomBtnText}>Submit Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

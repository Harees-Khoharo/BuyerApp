import React, { useEffect, useRef, useState } from "react";
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
import { colors, sizes } from "../../services";
import Feather from "react-native-vector-icons/Feather";

export default function Products() {
  return (
    <SafeAreaView>
      <View style={styles.landingBody}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image style={styles.headerImg} source={images.leftIcon} />
          </TouchableOpacity>
          <Text style={styles.headerHeading}>My Store</Text>
        </View>

        <Image style={styles.b} source={images.b} />

        <Text style={styles.heading}>Badly Store</Text>

        <View style={styles.btnRow}>
          <TouchableOpacity style={styles.btnWhiteSmall}>
            <Text style={styles.btnWhiteTextSmall}>Edit Store</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnBlackSmall}>
            <Text style={styles.btnBlackTextSmall}>View Store</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Image style={styles.removeStore} source={images.removeStore} />
        </TouchableOpacity>

        <View style={styles.searchField}>
          <TouchableOpacity>
            <Image style={styles.searchIcon} source={images.searchIcon} />
          </TouchableOpacity>
          <TextInput
            placeholder="Search Products"
            placeholderTextColor={colors.disabledBg2}
            style={styles.input}
          />
        </View>
        <Text style={styles.heading2}>Products</Text>
        <View
          style={{
            flexDirection: "row",
            width: sizes.screenWidth * 0.9,
            justifyContent: "space-between",
            alignSelf: "center",
          }}
        >
          <View style={styles.product}>
            <Image style={styles.productImg} source={images.productImg} />

            <TouchableOpacity style={styles.editProductContainer}>
              <Image style={styles.editProduct} source={images.editProduct} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.deleteProductContainer}>
              <Image style={styles.editProduct} source={images.deleteProduct} />
            </TouchableOpacity>

            <Text style={styles.productName}>Brocolli</Text>
            <View style={styles.row}>
              <View style={{ flexDirection: "row" }}>
                <Image style={styles.b2} source={images.b} />

                <Text style={styles.storeName}>Tradly</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.value1}>$30</Text>
                <Text style={styles.value2}>$15</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <Image
              style={styles.addProductImg2}
              source={images.addProductImg2}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

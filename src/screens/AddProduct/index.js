import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./style";
import images from "../../services/utilities/images";
import { colors, sizes } from "../../services";
import Feather from "react-native-vector-icons/Feather";

export default function AddProduct({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.landingBody}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image style={styles.headerImg} source={images.leftIcon} />
          </TouchableOpacity>
          <Text style={styles.headerHeading}>Add Product</Text>
        </View>
        <ScrollView>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.scrollContainer}>
              <TouchableOpacity>
                <Image
                  style={styles.addPhotosImg}
                  source={images.addPhotosImg}
                />
              </TouchableOpacity>
              <View>
                <Image
                  style={styles.productImggg}
                  source={images.productImggg}
                />
                <TouchableOpacity style={styles.crossBlackIconContainer}>
                  <Image
                    style={styles.crossBlackIcon}
                    source={images.crossBlackIcon}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Image
                  style={styles.productImggg}
                  source={images.productImggg}
                />
                <TouchableOpacity style={styles.crossBlackIconContainer}>
                  <Image
                    style={styles.crossBlackIcon}
                    source={images.crossBlackIcon}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Image
                  style={styles.productImggg}
                  source={images.productImggg}
                />
                <TouchableOpacity style={styles.crossBlackIconContainer}>
                  <Image
                    style={styles.crossBlackIcon}
                    source={images.crossBlackIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
          <Text style={styles.textLight2}>Max 4 photos per product</Text>
          <View style={{ marginLeft: sizes.screenWidth * 0.05 }}>
            <Text style={styles.textLight}>Product Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Brocolli"
              placeholderTextColor={"#4F4F4F"}
            />
            <View style={styles.hr}></View>

            <Text style={styles.textLight}>Product Category</Text>
            <TextInput
              style={styles.input}
              placeholder="Vegetables"
              placeholderTextColor={"#4F4F4F"}
            />
            <View style={styles.hr}></View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <View>
                <Text style={styles.textLight}>Price</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    width: sizes.screenWidth * 0.34,
                  }}
                >
                  <Image style={styles.dollarImg} source={images.dollarImg} />
                  <TextInput
                    style={styles.input2}
                    placeholder="30"
                    placeholderTextColor={"#4F4F4F"}
                  />
                  <Image />
                </View>
                <View style={styles.hr2}></View>
              </View>

              <View>
                <Text style={styles.textLight}>Offer Price</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    width: sizes.screenWidth * 0.34,
                  }}
                >
                  <Image style={styles.dollarImg} source={images.dollarImg} />
                  <TextInput
                    style={styles.input2}
                    placeholder="15"
                    placeholderTextColor={"#4F4F4F"}
                  />
                  <Image />
                </View>
                <View style={styles.hr2}></View>
              </View>
            </View>

            <Text style={styles.textLight}>Location Details</Text>
            <View
              style={{
                flexDirection: "row",
                width: sizes.screenWidth * 0.9,
                justifyContent: "space-between",
              }}
            >
              <TextInput
                style={styles.input}
                placeholder="Kualalumpur,Malaysia"
                placeholderTextColor={"#4F4F4F"}
              />
              <Image
                style={{ resizeMode: "contain", width: 28 }}
                source={images.locationDetailsImg}
              />
            </View>
            <View style={styles.hr}></View>

            <Text style={styles.textLight}>Product Description</Text>
            <TextInput
              style={styles.input}
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus placerat sit fringilla at facilisis. Quam vivamus non orci elit platea id sed est."
              placeholderTextColor={"#4F4F4F"}
              multiline={true}
            />
            <View style={styles.hr}></View>

            <Text style={styles.textLight}>Condition</Text>
            <TextInput
              style={styles.input}
              placeholder="Organic"
              placeholderTextColor={"#4F4F4F"}
            />
            <View style={styles.hr}></View>

            <Text style={styles.textLight}>Price Type</Text>
            <TextInput
              style={styles.input}
              placeholder="Fixed"
              placeholderTextColor={"#4F4F4F"}
            />
            <View style={styles.hr}></View>

            <Text style={styles.textLight}>Additional Details</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <View style={styles.greyBtn}>
                <Text style={styles.greyBtnText}>Cash on deliver</Text>
                <TouchableOpacity>
                  <Image style={styles.crossIconn} source={images.crossIconn} />
                </TouchableOpacity>
              </View>
              <View style={styles.greyBtn}>
                <Text style={styles.greyBtnText}>Available</Text>
                <TouchableOpacity>
                  <Image style={styles.crossIconn} source={images.crossIconn} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.hr}></View>
          </View>
          <View style={{ height: sizes.screenHeight * 0.16 }}></View>
        </ScrollView>

        <Image style={styles.shadow} source={images.shadow} />
        <TouchableOpacity
          style={styles.bottomBtn}
          onPress={() => navigation.navigate("EditProduct")}
        >
          <Text style={styles.bottomBtnText}>Add Product</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

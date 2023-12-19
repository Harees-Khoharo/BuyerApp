import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import Header from "../../components/Header";
import images from "../../services/utilities/images";
import { colors, sizes } from "../../services";

export default function ProductDetail() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.mainContainer}>
        <View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.backBtnView}>
              <Image source={images.backBtn2} style={styles.backBtn} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareBtnView}>
              <Image source={images.share} style={styles.backBtn} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.heartBtnView}>
              <Image source={images.heartBtn} style={styles.backBtn} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.dotBtnView}>
              <Image source={images.dotBtn} style={styles.backBtn} />
            </TouchableOpacity>
          </View>
          <Image source={images.pdBg} style={styles.pdBg} />
          <View style={styles.bottom}>
            <View style={[styles.row, styles.spaceBetween, styles.padding]}>
              <Text style={styles.heading}>Kaftani</Text>
              <TouchableOpacity style={styles.btnView}>
                <Text style={styles.btnText}>Add to cart</Text>
              </TouchableOpacity>
            </View>
            <Text style={[styles.heading, styles.leftText]}>$25</Text>
            <View style={[styles.row, styles.leftText]}>
              <Image source={images.singleStar} style={styles.singleStar} />
              <Text style={styles.text}>4.8 (3,279 reviews)</Text>
            </View>
            <View style={[styles.row, styles.spaceBetween, styles.padding]}>
              <Text style={styles.subHeading}>More Product</Text>
              <TouchableOpacity>
                <Text style={[styles.text, styles.bold]}>See all</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.row, styles.rowCenter]}>
              <View style={styles.sellingTopView}>
                <Image source={images.image} style={styles.sellingImg} />
                <View style={styles.percentView}>
                  <Text style={styles.percent}>-20%</Text>
                </View>
                <TouchableOpacity style={styles.heartImgView}>
                  <Image source={images.heart} style={styles.heartImg} />
                </TouchableOpacity>
                <Image source={images.rating} style={styles.ratingSty} />
                <Text style={styles.ratingText}>Dorothy Perkins</Text>
                <Text style={styles.ratingText1}>Blouse</Text>
                <View style={styles.row}>
                  <Text style={styles.ratingText2}>$21</Text>
                  <Text style={styles.ratingText3}>$14</Text>
                </View>
              </View>
              <View style={styles.sellingTopView}>
                <Image source={images.imageTwo} style={styles.sellingImg} />

                <TouchableOpacity style={styles.heartImgView}>
                  <Image source={images.heart} style={styles.heartImg} />
                </TouchableOpacity>
                <Image source={images.rating} style={styles.ratingSty} />
                <Text style={styles.ratingText}>Mango</Text>
                <Text style={styles.ratingText1}>T-Shirt SPANISH</Text>
                <Text style={styles.ratingText4}>$9</Text>
              </View>
            </View>
            <View style={[styles.padding, styles.top]}>
              <Text style={styles.subHeading}>Description </Text>
              <Text style={[styles.text, styles.top]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. View more...
              </Text>
            </View>
            <View style={[styles.padding, styles.row, styles.spaceBetween]}>
              <Text style={styles.subHeading}>Delivery ➞</Text>
              <View style={styles.row}>
                <Image
                  source={images.locationIcon2}
                  style={styles.locationIcon}
                />
                <Text style={styles.text}> To pretoria </Text>
              </View>
            </View>
            <Text style={[styles.shippingText]}>Shipping: R 234.99</Text>
            <Text style={styles.fromText}>
              From Johanessburg via Trader delivery means Estimated Delivery on
              DEC 08
            </Text>
            <View style={[styles.row, styles.rightView]}>
              <Image source={images.salon} style={styles.salonImg} />
              <View>
                <Text style={styles.subHeading}>{"   "}Dorothy perkens ➞</Text>
                <Text style={[styles.text, styles.bold]}>
                  {"   "}93.4% Positive Feedback
                </Text>
                <Text style={[styles.text, styles.bold]}>
                  {"   "}700 Followers{" "}
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.padding,
                styles.row,
                styles.spaceBetween,
                styles.top,
              ]}
            >
              <Text style={styles.subHeading}>Store Recommendations</Text>
              <TouchableOpacity>
                <View style={styles.row}>
                  <Text style={styles.text}> All item </Text>
                  <Image source={images.arrow} style={styles.arrowIcon} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={[styles.row, styles.padding, styles.spaceBetween]}>
              <TouchableOpacity>
                <Image source={images.salon2} style={styles.salon2} />
                <Text style={styles.priceText}> R 234.99 </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={images.salon2} style={styles.salon2} />
                <Text style={styles.priceText}> R 234.99 </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={images.salon2} style={styles.salon2} />
                <Text style={styles.priceText}> R 234.99 </Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.row, styles.padding, styles.spaceBetween]}>
              <TouchableOpacity>
                <Image source={images.salon2} style={styles.salon2} />
                <Text style={styles.priceText}> R 234.99 </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={images.salon2} style={styles.salon2} />
                <Text style={styles.priceText}> R 234.99 </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={images.salon2} style={styles.salon2} />
                <Text style={styles.priceText}> R 234.99 </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bottomContainer}>
                <Image source={images.store} style={styles.store}/>
              <Text style={{ color: colors.black,left:sizes.screenHeight*0.003 }}>Store</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

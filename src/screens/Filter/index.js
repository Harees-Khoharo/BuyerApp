import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useCallback, useState } from "react";
import { styles } from "./style";
import Header from "../../components/Header";
import images from "../../services/utilities/images";


export default function Filter() {
  const [reviewStatus, setReviewStatus] = useState("");

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header backImage={images.backArrow} title={"All Filters"} />
        <View style={styles.padding}>
          <Text style={styles.heading}>Category</Text>
          <View style={[styles.row, styles.top]}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <TouchableOpacity style={styles.options1}>
                <Text style={styles.text1}>All</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.options}>
                <Text style={styles.text}>Wears</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.options}>
                <Text style={styles.text}>Drinks</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.options}>
                <Text style={styles.text}>Alcohols</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.options}>
                <Text style={styles.text}>Toiletries</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.options}>
                <Text style={styles.text}>Appliances</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <Text style={styles.heading}>Sort by</Text>
          <View style={[styles.row, styles.top]}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <TouchableOpacity style={styles.options1}>
                <Text style={styles.text1}>most recent</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.options}>
                <Text style={styles.text}>popular</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.options}>
                <Text style={styles.text}>High price</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.options}>
                <Text style={styles.text}>popular</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <Text style={styles.heading}>Review</Text>
          <View style={{ flex: 1, flexDirection: "row" }}>
            {/* <RangeSlider
    minValue={0}
    maxValue={100}
    tintColor={'#da0f22'}
    handleBorderWidth={1}
    handleBorderColor="#454d55"
    selectedMinimum={20}
    selectedMaximum={40}
    style={{ flex: 1, height: 70, padding: 10, backgroundColor: '#ddd' }}
    onChange={ (data)=>{ console.log(data);} }
  /> */}
          </View>
          <Text style={styles.heading}>Review</Text>
          <TouchableOpacity onPress={() => setReviewStatus("first")}>
            <View style={styles.ratingRow}>
              <Image source={images.fiveStars} style={styles.starImg} />
              <Text style={styles.ratingeTxt}>4.5 and above</Text>
              <Image
                source={reviewStatus == "first" ? images.btnOff : images.btnOn}
                style={styles.starImg2}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setReviewStatus("second")}>
            <View style={styles.ratingRow}>
              <Image source={images.fiveStars} style={styles.starImg} />
              <Text style={styles.ratingeTxt}>4.0 - 4.5</Text>
              <Image
                source={reviewStatus == "second" ?  images.btnOff: images.btnOn }
                style={styles.starImg2}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setReviewStatus("third")}>
            <View style={styles.ratingRow}>
              <Image source={images.fiveStars} style={styles.starImg} />
              <Text style={styles.ratingeTxt}>3.5 - 4.0</Text>
              <Image
                source={reviewStatus == "third" ? images.btnOff : images.btnOn}
                style={styles.starImg2}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setReviewStatus("fourth")}>
            <View style={styles.ratingRow}>
              <Image source={images.fiveStars} style={styles.starImg} />
              <Text style={styles.ratingeTxt}>3.0 - 3.5</Text>
              <Image
                source={reviewStatus == "fourth" ? images.btnOff : images.btnOn}
                style={styles.starImg2}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setReviewStatus("fifth")}>
            <View style={styles.ratingRow}>
              <Image source={images.fiveStars} style={styles.starImg} />
              <Text style={styles.ratingeTxt}>2.5 - 3.0</Text>
              <Image
                source={reviewStatus == "fifth" ? images.btnOff : images.btnOn}
                style={styles.starImg2}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

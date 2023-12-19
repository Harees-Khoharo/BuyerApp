import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import Header from "../../components/Header";
import images from "../../services/utilities/images";
import { colors, sizes } from "../../services";

export default function RatingAndReview() {
  const [showWithPhoto, setShowWithPhoto] = useState(false);

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header backImage={images.backArrow} title={"Rating and reviews"} />
        <View style={styles.Ratingrow}>
          <View>
            <Text style={styles.ratingText}>4.3</Text>
            <Text style={styles.ratingText1}>23 ratings</Text>
          </View>
          <Image source={images.ratingReview} style={styles.ratingImg} />
        </View>
        <View style={styles.reView}>
          <Text style={styles.reviewText2}>8 reviews</Text>
          <TouchableOpacity
            style={styles.imageLeft}
            onPress={() => setShowWithPhoto(!showWithPhoto)}
          >
            <Image
              source={!showWithPhoto ? images.noWithPhoto : images.withPhoto}
              style={!showWithPhoto ? styles.noWithPhoto : styles.withPhoto}
            />
          </TouchableOpacity>
        </View>

        {showWithPhoto ? (
          <View>
            <View style={styles.mainReviewBox}>
                <View style={{        paddingHorizontal:sizes.screenWidth * 0.07,}}>

              <Text style={styles.kinStyle}>Kin Shine</Text>
              <View style={styles.showPhotoRow}>
                <Image source={images.ratingThree} style={styles.starSiz} />
                <Text style={styles.month}>Auguest 13, 2019</Text>
              </View>
              <Text style={styles.textColor}>
                I loved this dress so much as soon as I tried it on I knew I had
                to buy it in another color. I am 5'3 about 155lbs and I carry
                all my weight in my upper body. When I put it on I felt like it
                thinned me put and I got so many compliments.
              </Text>
              </View>
              <ScrollView horizontal>
              <View style={styles.imgRow}>
                <Image source={images.photo} style={styles.photo}/>
                <Image source={images.photoTwo} style={styles.photo}/>
                <Image source={images.photoThree} style={styles.photo}/>
              </View>
              </ScrollView>
            </View>
          </View>
        ) : (
          <View>
            <Text style={{ color: colors.black }}>no photo</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

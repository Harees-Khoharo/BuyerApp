import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { styles } from "./style";
import Header from "../../components/Header";
import images from "../../services/utilities/images";

export default function Search() {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header backImage={images.backArrow} title={"Search"} />
        <View style={styles.padding}>
          <View style={styles.textFeildView}>
            <Image source={images.search} style={styles.searchImg} />
            <TextInput placeholder="Search for" style={styles.textField} />
          </View>
          <View style={styles.TextRow}>
            <Text style={styles.textStyling}>Search history</Text>
            <Text style={styles.textStyling}>Clear All</Text>
          </View>
          <View style={styles.horizontalLine}></View>
          <View style={styles.searchHistory}>
            <Text style={styles.textStyling1}>Blue shirt</Text>
            <TouchableOpacity>
              <Image source={images.crossIcon} style={styles.searchImg}/>
            </TouchableOpacity>
          </View>
          <View style={styles.searchHistory}>
            <Text style={styles.textStyling1}>Sleeve dress</Text>
            <TouchableOpacity>
              <Image source={images.crossIcon} style={styles.searchImg}/>
            </TouchableOpacity>
          </View>
          <View style={styles.searchHistory}>
            <Text style={styles.textStyling1}>Alcohol</Text>
            <TouchableOpacity>
              <Image source={images.crossIcon} style={styles.searchImg}/>
            </TouchableOpacity>
          </View>
          <View style={styles.searchHistory}>
            <Text style={styles.textStyling1}>Shirt</Text>
            <TouchableOpacity>
              <Image source={images.crossIcon} style={styles.searchImg}/>
            </TouchableOpacity>
          </View>
          <View style={styles.searchHistory}>
            <Text style={styles.textStyling1}>Toilet pad</Text>
            <TouchableOpacity>
              <Image source={images.crossIcon} style={styles.searchImg}/>
            </TouchableOpacity>
          </View>
          <View style={styles.searchHistory}>
            <Text style={styles.textStyling1}>Tooth brush</Text>
            <TouchableOpacity>
              <Image source={images.crossIcon} style={styles.searchImg}/>
            </TouchableOpacity>
          </View>
          <View style={styles.searchHistory}>
            <Text style={styles.textStyling1}>Baskets</Text>
            <TouchableOpacity>
              <Image source={images.crossIcon} style={styles.searchImg}/>
            </TouchableOpacity>
          </View>
          <View style={styles.searchHistory}>
            <Text style={styles.textStyling1}>Air pod</Text>
            <TouchableOpacity>
              <Image source={images.crossIcon} style={styles.searchImg}/>
            </TouchableOpacity>
          </View>
          <View style={styles.searchHistory}>
            <Text style={styles.textStyling1}>Android</Text>
            <TouchableOpacity>
              <Image source={images.crossIcon} style={styles.searchImg}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

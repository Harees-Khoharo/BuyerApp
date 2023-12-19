import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import images from "../../services/utilities/images";

export default function Categories() {
    // const [categoryItem, setCategoryItem] = useState([
    //     {Image:images.categoryImg, name:'Groceries'},
    //     {Image:images.categoryImg, name:'Alcohol'},
    //     {Image:images.categoryImg, name:'Appliances'},
    //     {Image:images.categoryImg, name:'Toiletries'},
    //     {Image:images.categoryImg, name:'Wears'},
    //     {Image:images.categoryImg, name:'Accesories'},
    //     {Image:images.categoryImg, name:'Electronics'},
    //     {Image:images.categoryImg, name:'Drinks'},
    // ])
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.padding}>
          <View style={styles.textFeildView}>
            <Image source={images.search} style={styles.searchImg} />
            <TextInput placeholder="Search for" style={styles.textField} />
          </View>
          <Text style={styles.textStyling}>All Categories</Text>
                <View style={styles.categoryMainView}>
                <TouchableOpacity style={styles.categoryView}>
                    <Image source={images.categoryImg} style={styles.imgStyling}/>
                    <Text  style={styles.categoryText}>Groceries</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryView}>
                    <Image source={images.categoryImg} style={styles.imgStyling}/>
                    <Text  style={styles.categoryText}>Alcohol</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.categoryMainView}>
                <TouchableOpacity style={styles.categoryView}>
                    <Image source={images.categoryImg} style={styles.imgStyling}/>
                    <Text  style={styles.categoryText}>Appliances</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryView}>
                    <Image source={images.categoryImg} style={styles.imgStyling}/>
                    <Text  style={styles.categoryText}>Toiletries</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.categoryMainView}>
                <TouchableOpacity style={styles.categoryView}>
                    <Image source={images.categoryImg} style={styles.imgStyling}/>
                    <Text  style={styles.categoryText}>Wears</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryView}>
                    <Image source={images.categoryImg} style={styles.imgStyling}/>
                    <Text  style={styles.categoryText}>Accesories</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.categoryMainView}>
                <TouchableOpacity style={styles.categoryView}>
                    <Image source={images.categoryImg} style={styles.imgStyling}/>
                    <Text  style={styles.categoryText}>Electronics</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryView}>
                    <Image source={images.categoryImg} style={styles.imgStyling}/>
                    <Text  style={styles.categoryText}>Drinks</Text>
                </TouchableOpacity>
              </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

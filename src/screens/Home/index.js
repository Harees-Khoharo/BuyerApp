import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { styles } from "./style";
import images from "../../services/utilities/images";

export default function Home({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.topRowView}>
            <Text style={styles.topText}>Location</Text>
            <View style={styles.topRowFirstSection}>
              <Image source={images.location} style={styles.imgSty} />
              <Text style={styles.topRowText}>New york, USA</Text>
              <TouchableOpacity>
                <Image source={images.dropdown} style={styles.imgSty} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("MyCart")}>
              <Image source={images.cart} style={styles.imgSty2} />
            </TouchableOpacity>
          </View>
          <View style={styles.searchRow}>
            <TouchableOpacity onPress={() => navigation.navigate("Search")}>
              <Image source={images.search} style={styles.searchImg} />
            </TouchableOpacity>
            <TextInput placeholder="Search for" style={styles.fieldSty} />
            <TouchableOpacity
              onPress={() => navigation.navigate("VisualSearch")}
            >
              <Image source={images.camera} style={styles.searchImgSty} />
            </TouchableOpacity>
          </View>
          <View style={styles.menuTopView}>
            <View style={styles.menuMainCont}>

              <TouchableOpacity  onPress={() => navigation.navigate("Categories")}>

              <Text style={styles.menuText}>Menu Category</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Filter")}
              >
                <Image source={images.filter} style={styles.searchImg} />
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TouchableOpacity
                  style={styles.groceryView}
                  onPress={() => navigation.navigate("CategoryItems")}
                >
                  <Image source={images.grocery} style={styles.menuIgm} />
                  <Text style={styles.color}>Groceries</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.groceryView1}
                  onPress={() => navigation.navigate("Alcohol")}
                >
                  <Image source={images.drink} style={styles.menuIgm} />
                  <Text style={styles.color}>Drink</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.groceryView}
                  onPress={() => navigation.navigate("Wears")}
                >
                  <Image source={images.wear} style={styles.menuIgm} />
                  <Text style={styles.color}>Wear & accessories</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.groceryView}
                  onPress={() => navigation.navigate("Electronics")}
                >
                  <Image source={images.electronics} style={styles.menuIgm} />
                  <Text style={styles.color}>Electronics</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.groceryView}>
                  <Image source={images.furniture} style={styles.menuIgm} />
                  <Text style={styles.color}>Furniture</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.groceryView}
                  onPress={() => navigation.navigate("Toiletries")}
                >
                  <Image source={images.toiletries} style={styles.menuIgm} />
                  <Text style={styles.color}>Toiletries</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.groceryView}
                  onPress={() => navigation.navigate("Appliances")}
                >
                  <Image source={images.appliances} style={styles.menuIgm} />
                  <Text style={styles.color}>Appliances</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
            <Text style={styles.sellingHeading}>Top selling</Text>
            <View style={styles.row}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TouchableOpacity
                  style={styles.sellingTopView}
                  onPress={() => navigation.navigate("ProductDetail")}
                >
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
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.sellingTopView}
                  onPress={() => navigation.navigate("ProductDetail")}
                >
                  <Image source={images.imageTwo} style={styles.sellingImg} />
                  <View style={styles.percentView}>
                    <Text style={styles.percent}>-20%</Text>
                  </View>
                  <TouchableOpacity style={styles.heartImgView}>
                    <Image source={images.heart} style={styles.heartImg} />
                  </TouchableOpacity>
                  <Image source={images.rating} style={styles.ratingSty} />
                  <Text style={styles.ratingText}>Mango</Text>
                  <Text style={styles.ratingText1}>T-Shirt SPANISH</Text>
                  <Text style={styles.ratingText4}>$9</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.sellingTopView}
                  onPress={() => navigation.navigate("ProductDetail")}
                >
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
                </TouchableOpacity>
              </ScrollView>
            </View>
            <View style={styles.menuMainCont}>
              <Text style={styles.productHeading}>New Product</Text>
              <TouchableOpacity>
                <Text style={styles.seeAll}>See all</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
                  <View style={styles.percentView}>
                    <Text style={styles.percent}>-20%</Text>
                  </View>
                  <TouchableOpacity style={styles.heartImgView}>
                    <Image source={images.heart} style={styles.heartImg} />
                  </TouchableOpacity>
                  <Image source={images.rating} style={styles.ratingSty} />
                  <Text style={styles.ratingText}>Mango</Text>
                  <Text style={styles.ratingText1}>T-Shirt SPANISH</Text>
                  <Text style={styles.ratingText4}>$9</Text>
                </View>
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
              </ScrollView>
            </View>
            <View style={styles.menuMainCont}>
              <Text style={styles.productHeading}>Popular Product</Text>
              <TouchableOpacity>
                <Text style={styles.seeAll}>See all</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
                  <View style={styles.percentView}>
                    <Text style={styles.percent}>-20%</Text>
                  </View>
                  <TouchableOpacity style={styles.heartImgView}>
                    <Image source={images.heart} style={styles.heartImg} />
                  </TouchableOpacity>
                  <Image source={images.rating} style={styles.ratingSty} />
                  <Text style={styles.ratingText}>Mango</Text>
                  <Text style={styles.ratingText1}>T-Shirt SPANISH</Text>
                  <Text style={styles.ratingText4}>$9</Text>
                </View>
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
              </ScrollView>
            </View>
            <View style={styles.padding}></View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

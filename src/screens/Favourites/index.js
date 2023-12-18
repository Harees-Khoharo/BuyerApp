import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import images from "../../services/utilities/images";
import { fontSize, sizes } from "../../services";

export default function Favourites() {
  const [grid, setGrid] = useState(true);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.topRowView}>
          <Text style={styles.topText}>Favourites</Text>
          <View style={styles.topRowFirstSection}></View>
          <TouchableOpacity>
            <Image source={images.searchIcon} style={styles.imgSty2} />
          </TouchableOpacity>
        </View>

        <View style={styles.menuTopView}>
          <View style={[styles.row, styles.top]}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <TouchableOpacity style={styles.options}>
                <Text style={styles.text}>All</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.options}>
                <Text style={styles.text}>Drinks</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.options}>
                <Text style={styles.text}>Wears</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.options}>
                <Text style={styles.text}>Toiletries</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.options}>
                <Text style={styles.text}>Summer</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.options}>
                <Text style={styles.text}>T-Shirts</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.options}>
                <Text style={styles.text}>Shirts</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View
            style={[
              styles.row,
              styles.top,
              { justifyContent: "space-between" },
            ]}
          >
            <TouchableOpacity>
              <View style={styles.row}>
                <Image source={images.filter2} style={styles.filterImg} />
                <Text style={styles.filterText}>Filters</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.row}>
                <Image source={images.swap} style={styles.swap} />
                <Text style={styles.filterText}>Price: lowest to high</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setGrid(!grid)}>
              <View style={styles.row}>
                <Image
                  source={grid ? images.grid : images.list}
                  style={styles.filterImg}
                />
              </View>
            </TouchableOpacity>
          </View>

          {grid ? (
            <View>
              <View style={styles.row}>
                <View
                  style={[
                    styles.sellingTopView,
                    { marginLeft: sizes.screenWidth * 0.02 },
                  ]}
                >
                  <Image source={images.p1} style={styles.sellingImg} />

                  <TouchableOpacity style={styles.heartImgView}>
                    <Image
                      source={images.heartFilled}
                      style={styles.heartImg}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.closeView}>
                    <Image source={images.close} style={styles.closeImg} />
                  </TouchableOpacity>
                  <Image source={images.rating} style={styles.ratingSty} />
                  <Text style={styles.ratingText}>LIME</Text>
                  <Text style={styles.ratingText1}>Shirt</Text>
                  <View style={styles.row}>
                    <View style={[styles.row, styles.right]}>
                      <Text style={styles.ratingText2}>Color</Text>
                      <Text style={styles.ratingText3}>Blue</Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.ratingText2}>Size</Text>
                      <Text style={styles.ratingText3}>L</Text>
                    </View>
                  </View>
                  <Text style={styles.costText}>10$</Text>
                </View>

                <View style={styles.sellingTopView}>
                  <Image source={images.p2} style={styles.sellingImg} />

                  <TouchableOpacity style={styles.heartImgView}>
                    <Image
                      source={images.heartFilled2}
                      style={styles.heartImg}
                    />
                  </TouchableOpacity>
                  <View style={styles.newView}>
                    <Text style={styles.percent}>NEW</Text>
                  </View>

                  <TouchableOpacity style={styles.closeView}>
                    <Image source={images.close} style={styles.closeImg} />
                  </TouchableOpacity>
                  <Image source={images.nopoints} style={styles.ratingSty} />
                  <Text style={styles.ratingText}>Mango</Text>
                  <Text style={styles.ratingText1}>Longsleeve Violeta</Text>
                  <View style={styles.row}>
                    <View style={[styles.row, styles.right]}>
                      <Text style={styles.ratingText2}>Color</Text>
                      <Text style={styles.ratingText3}>Orange</Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.ratingText2}>Size</Text>
                      <Text style={styles.ratingText3}>S</Text>
                    </View>
                  </View>
                  <Text style={styles.costText}>46$</Text>
                </View>
              </View>

              <View style={styles.row}>
                <View
                  style={[
                    styles.sellingTopView,
                    { marginLeft: sizes.screenWidth * 0.02 },
                  ]}
                >
                  <Image source={images.p3} style={styles.sellingImg} />

                  <TouchableOpacity style={styles.heartImgView}>
                    <Image
                      source={images.heartFilled}
                      style={styles.heartImg}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.closeView}>
                    <Image source={images.close} style={styles.closeImg} />
                  </TouchableOpacity>
                  <Image source={images.rating} style={styles.ratingSty} />
                  <Text style={styles.ratingText}>Oliver</Text>
                  <Text style={styles.ratingText1}>Shirt</Text>
                  <View style={styles.row}>
                    <View style={[styles.row, styles.right]}>
                      <Text style={styles.ratingText2}>Color</Text>
                      <Text style={styles.ratingText3}>Gray</Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.ratingText2}>Size</Text>
                      <Text style={styles.ratingText3}>L</Text>
                    </View>
                  </View>
                  <Text style={styles.costText}>52$</Text>
                </View>
                <View style={styles.sellingTopView}>
                  <Image source={images.p4} style={styles.sellingImg} />
                  <View style={styles.percentView}>
                    <Text style={styles.percent}>-30%</Text>
                  </View>
                  <TouchableOpacity style={styles.heartImgView}>
                    <Image
                      source={images.heartFilled2}
                      style={styles.heartImg}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.closeView}>
                    <Image source={images.close} style={styles.closeImg} />
                  </TouchableOpacity>
                  <Image source={images.rating} style={styles.ratingSty} />
                  <Text style={styles.ratingText}>&Berries</Text>
                  <Text style={styles.ratingText1}>T-Shirt</Text>
                  <View style={styles.row}>
                    <View style={[styles.row, styles.right]}>
                      <Text style={styles.ratingText2}>Color</Text>
                      <Text style={styles.ratingText3}>Black</Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.ratingText2}>Size</Text>
                      <Text style={styles.ratingText3}>S</Text>
                    </View>
                  </View>
                  <View style={styles.row}>
                    <Text
                      style={[
                        styles.ratingText2,
                        {
                          textDecorationLine: "line-through",
                          fontSize: fontSize.h6,
                          fontWeight: "500",
                        },
                      ]}
                    >
                      55$
                    </Text>
                    <Text style={styles.redText}>39$</Text>
                  </View>
                </View>
              </View>
            </View>
          ) : (
            <View style={styles.top2}>
              <View style={[styles.row, styles.paddingBottom]}>
                <Image source={images.p1} style={styles.listProductImg} />
                <View style={styles.itemTop}>
                  <Text style={[styles.ratingText, styles.titleText]}>
                    LIME
                  </Text>
                  <Text style={[styles.ratingText1, styles.shirtLeft]}>
                    Shirt
                  </Text>
                  <View style={[styles.row, styles.shirtLeft]}>
                    <Text style={styles.ratingText2}>Color</Text>
                    <Text style={styles.ratingText3}>Blue</Text>
                    <View style={[styles.row, styles.sizeLeft]}>
                      <Text style={styles.ratingText2}>Size</Text>
                      <Text style={styles.ratingText3}>L</Text>
                    </View>
                  </View>
                  <View style={[styles.row]}>
                    <Text style={[styles.costTextList]}>32$</Text>
                    <Image
                      source={images.rating}
                      style={styles.ratingStyList}
                    />
                    <TouchableOpacity style={styles.heartViewList}>
                      <Image
                        source={images.heartFilled}
                        style={styles.heartImgList}
                      />
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity style={styles.closeViewList}>
                    <Image source={images.close} style={styles.closeImg} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={[styles.row, styles.paddingBottom]}>
                <Image source={images.p2} style={styles.listProductImg} />
                <View style={styles.newView}>
                  <Text style={styles.percent}>NEW</Text>
                </View>
                <View style={styles.itemTop}>
                  <Text style={[styles.ratingText, styles.titleText]}>
                    Mango
                  </Text>
                  <Text style={[styles.ratingText1, styles.shirtLeft]}>
                    Longsleeve Violeta
                  </Text>
                  <View style={[styles.row, styles.shirtLeft]}>
                    <Text style={styles.ratingText2}>Color</Text>
                    <Text style={styles.ratingText3}>Orange</Text>
                    <View style={[styles.row, styles.sizeLeft]}>
                      <Text style={styles.ratingText2}>Size</Text>
                      <Text style={styles.ratingText3}>S</Text>
                    </View>
                  </View>
                  <View style={[styles.row]}>
                    <Text style={[styles.costTextList]}>46$</Text>
                    <Image
                      source={images.rating}
                      style={styles.ratingStyList}
                    />
                    <TouchableOpacity style={styles.heartViewList}>
                      <Image
                        source={images.heartFilled}
                        style={styles.heartImgList}
                      />
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity style={styles.closeViewList}>
                    <Image source={images.close} style={styles.closeImg} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={[styles.row, styles.paddingBottom]}>
                <Image source={images.p3} style={styles.listProductImg} />
                <View style={styles.itemTop}>
                  <Text style={[styles.ratingText, styles.titleText]}>
                    Oliver
                  </Text>
                  <Text style={[styles.ratingText1, styles.shirtLeft]}>
                    Shirt
                  </Text>
                  <View style={[styles.row, styles.shirtLeft]}>
                    <Text style={styles.ratingText2}>Color</Text>
                    <Text style={styles.ratingText3}>Gray</Text>
                    <View style={[styles.row, styles.sizeLeft]}>
                      <Text style={styles.ratingText2}>Size</Text>
                      <Text style={styles.ratingText3}>L</Text>
                    </View>
                  </View>
                  <View style={[styles.row]}>
                    <Text style={[styles.costTextList]}>52$</Text>
                    <Image
                      source={images.rating}
                      style={styles.ratingStyList}
                    />
                    <TouchableOpacity style={styles.heartViewList}>
                      <Image
                        source={images.heartFilled}
                        style={styles.heartImgList}
                      />
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity style={styles.closeViewList}>
                    <Image source={images.close} style={styles.closeImg} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={[styles.row, styles.paddingBottom]}>
                <Image source={images.p4} style={styles.listProductImg} />
                <View style={styles.percentView}>
                  <Text style={styles.percent}>-30%</Text>
                </View>
                <View style={styles.itemTop}>
                  <Text style={[styles.ratingText, styles.titleText]}>
                    &Berries
                  </Text>
                  <Text style={[styles.ratingText1, styles.shirtLeft]}>
                    T-Shirt
                  </Text>
                  <View style={[styles.row, styles.shirtLeft]}>
                    <Text style={styles.ratingText2}>Color</Text>
                    <Text style={styles.ratingText3}>Black</Text>
                    <View style={[styles.row, styles.sizeLeft]}>
                      <Text style={styles.ratingText2}>Size</Text>
                      <Text style={styles.ratingText3}>S</Text>
                    </View>
                  </View>
                  <View style={[styles.row]}>
                    <Text style={[styles.costTextList]}>55$</Text>
                    <Image
                      source={images.rating}
                      style={styles.ratingStyList}
                    />
                    <TouchableOpacity style={styles.heartViewList}>
                      <Image
                        source={images.heartFilled}
                        style={styles.heartImgList}
                      />
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity style={styles.closeViewList}>
                    <Image source={images.close} style={styles.closeImg} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}

          <View style={styles.padding}></View>
        </View>
      </View>
    </ScrollView>
  );
}

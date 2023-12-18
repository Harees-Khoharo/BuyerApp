import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import images from "../../services/utilities/images";
import Header from "../../components/Header";
import { colors } from "../../services";
import Modal from "react-native-modal";

export default function MyCart() {
  const [quantity, setQuantity] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isShowRemoveModal, setIsShowRemoveModal] = useState(false);
  return (
    <SafeAreaView>
      <View style={styles.mainView}>
        <Header backImage={images.backArrow} title={"My Cart"} />
        <TouchableOpacity style={styles.cartImgView}>
          <Image source={images.search} style={styles.cartImgSty} />
        </TouchableOpacity>
        <View style={styles.row}>
          <Image source={images.myCartImg} style={styles.imgSty} />
          <View style={styles.middleCol}>
            <Text style={styles.middleColText}>Pullover</Text>
            <View style={styles.row3}>
              <Text style={styles.textColor}>
                Color:<Text style={{ color: colors.black }}>Black</Text>
              </Text>
              <Text style={styles.textColor}>
                Size:<Text style={{ color: colors.black }}>L</Text>
              </Text>
            </View>
            <View style={styles.row3}>
              <TouchableOpacity
                onPress={() => quantity > 0 && setQuantity(quantity - 1)}
              >
                <Image source={images.minus} style={styles.threeDotSty2} />
              </TouchableOpacity>
              <Text style={styles.textQuantity}>{quantity}</Text>
              <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                <Image source={images.plusTwo} style={styles.threeDotSty2} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.lastView}>
            <Image source={images.threeDot} style={styles.threeDotSty} />
            <Text style={styles.prices}>$51</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Image source={images.myCartImgOne} style={styles.imgSty} />
          <View style={styles.middleCol}>
            <Text style={styles.middleColText}>Whiskey</Text>
            <View style={styles.row3}>
              <Text style={styles.textColor}>
                Color:<Text style={{ color: colors.black }}>Gray</Text>
              </Text>
              <Text style={styles.textColor}>
                Size:<Text style={{ color: colors.black }}>L</Text>
              </Text>
            </View>
            <View style={styles.row3}>
              <TouchableOpacity
                onPress={() => quantity > 0 && setQuantity(quantity - 1)}
              >
                <Image source={images.minus} style={styles.threeDotSty2} />
              </TouchableOpacity>
              <Text style={styles.textQuantity}>{quantity}</Text>
              <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                <Image source={images.plusTwo} style={styles.threeDotSty2} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.lastView}>
            <Image source={images.threeDot} style={styles.threeDotSty} />
            <Text style={styles.prices}>$30</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Image source={images.myCartImgTwo} style={styles.imgSty} />
          <View style={styles.middleCol}>
            <Text style={styles.middleColText}>Automotive</Text>
            <View style={styles.row3}>
              <Text style={styles.textColor}>
                Color:<Text style={{ color: colors.black }}>Black</Text>
              </Text>
              <Text style={styles.textColor}>
                Size:<Text style={{ color: colors.black }}>M</Text>
              </Text>
            </View>
            <View style={styles.row3}>
              <TouchableOpacity
                onPress={() => quantity > 0 && setQuantity(quantity - 1)}
              >
                <Image source={images.minus} style={styles.threeDotSty2} />
              </TouchableOpacity>
              <Text style={styles.textQuantity}>{quantity}</Text>
              <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                <Image source={images.plusTwo} style={styles.threeDotSty2} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.lastView}>
            <Image source={images.threeDot} style={styles.threeDotSty} />
            <Text style={styles.prices}>$43</Text>
          </View>
        </View>
        <View style={styles.row4}>
          <TextInput
            placeholder="Enter your promo code"
            placeholderTextColor={colors.disabledBg3}
            style={styles.inputField}
          />
          <TouchableOpacity onPress={() => setIsModalVisible(!isModalVisible)}>
            <Image source={images.nextIcon} style={styles.threeDotSty3} />
          </TouchableOpacity>
        </View>
        <View style={styles.row5}>
          <Text style={styles.bottomText1}>Total amount:</Text>
          <Text style={styles.bottomText2}>$124</Text>
        </View>
        <TouchableOpacity
          style={styles.btnView}
          onPress={() => setIsShowRemoveModal(!isShowRemoveModal)}
        >
          <Text style={styles.btnText}>CHECK OUT</Text>
        </TouchableOpacity>
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => setIsModalVisible(false)}
        >
          <View style={styles.modalMainView}>
            <View style={styles.horiLine}></View>
            <View style={styles.row4}>
              <TextInput
                placeholder="Enter your promo code"
                placeholderTextColor={colors.disabledBg3}
                style={styles.inputField}
              />
              <TouchableOpacity
                onPress={() => setIsModalVisible(!isModalVisible)}
              >
                <Image source={images.nextIcon} style={styles.threeDotSty3} />
              </TouchableOpacity>
            </View>
            <ScrollView>
              <View style={styles.padding}>
                <Text style={styles.modalText}>Your Promo Codes</Text>
                <View style={styles.row6}>
                  <View>
                    <Image
                      source={images.discount}
                      style={styles.discountImgSty}
                    />
                  </View>
                  <View style={styles.bottomModaView}>
                    <Text style={styles.modalTextSty}>Personal offer</Text>
                    <Text style={styles.modalTextSty1}>mypromocode2020</Text>
                  </View>
                  <View style={styles.bottomModaView2}>
                    <Text style={styles.modalTextSty2}>6 days remaining</Text>
                    <TouchableOpacity style={styles.modalBtn}>
                      <Text style={styles.modalTextSt3}>Apply</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.row6}>
                  <View>
                    <Image
                      source={images.discountTwo}
                      style={styles.discountImgSty}
                    />
                  </View>
                  <View style={styles.bottomModaView}>
                    <Text style={styles.modalTextSty}>Summer Sale</Text>
                    <Text style={styles.modalTextSty1}>summer2020 </Text>
                  </View>
                  <View style={styles.bottomModaView2}>
                    <Text style={styles.modalTextSty2}>23 days remaining</Text>
                    <TouchableOpacity style={styles.modalBtn}>
                      <Text style={styles.modalTextSt3}>Apply</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.row6}>
                  <View>
                    <Image
                      source={images.discountThree}
                      style={styles.discountImgSty}
                    />
                  </View>
                  <View style={styles.bottomModaView}>
                    <Text style={styles.modalTextSty}>Personal offer</Text>
                    <Text style={styles.modalTextSty1}>mypromocode2020</Text>
                  </View>
                  <View style={styles.bottomModaView2}>
                    <Text style={styles.modalTextSty2}>6 days remaining</Text>
                    <TouchableOpacity style={styles.modalBtn}>
                      <Text style={styles.modalTextSt3}>Apply</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </Modal>
        <Modal
          isVisible={isShowRemoveModal}
          onBackdropPress={() => setIsShowRemoveModal(false)}
        >
          <View style={styles.secondModalMainView}>
            <Text style={styles.cartHeading}>Remove from cart?</Text>
            <View style={styles.row}>
              <Image source={images.myCartImgTwo} style={styles.imgSty} />
              <View style={styles.middleCol}>
                <Text style={styles.middleColText}>Automotive</Text>
                <View style={styles.row3}>
                  <Text style={styles.textColor}>
                    Color:<Text style={{ color: colors.black }}>Black</Text>
                  </Text>
                  <Text style={styles.textColor}>
                    Size:<Text style={{ color: colors.black }}>M</Text>
                  </Text>
                </View>
                <View style={styles.row3}>
                  <TouchableOpacity
                    onPress={() => quantity > 0 && setQuantity(quantity - 1)}
                  >
                    <Image source={images.minus} style={styles.threeDotSty2} />
                  </TouchableOpacity>
                  <Text style={styles.textQuantity}>{quantity}</Text>
                  <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                    <Image
                      source={images.plusTwo}
                      style={styles.threeDotSty2}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.lastView}>
                <Image source={images.threeDot} style={styles.threeDotSty} />
                <Text style={styles.prices}>$43</Text>
              </View>
            </View>
            <View style={styles.modalRow}>
              <TouchableOpacity style={styles.modalBtn1} onPress={()=> setIsShowRemoveModal(false)}>
                <Text style={styles.modalTextStyMod}>cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalBtn2} onPress={()=> setIsShowRemoveModal(false)}>
                <Text style={styles.modalTextStyMod1}>Yes, Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

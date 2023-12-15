import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import images from "../../services/utilities/images";
import Header from "../../components/Header";
import { styles } from "./style";
import { colors } from "../../services";
import Modal from "react-native-modal";

export default function CardInfo() {
  const [threeDotClick, setThreeDotClick] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header backImage={images.backArrow} title={"Back"} />
        <TouchableOpacity
          style={styles.cartImgView}
          onPress={() => setThreeDotClick(!threeDotClick)}
        >
          <Image source={images.threeDot} style={styles.cartImgSty} />
        </TouchableOpacity>
        {threeDotClick && (
          <View style={styles.optionView}>
            <TouchableOpacity>
              <Text style={styles.optionText}>Make default</Text>
            </TouchableOpacity>
            <View style={styles.horizontalLine}></View>
            <TouchableOpacity
              onPress={() => setIsModalVisible(!isModalVisible)}
            >
              <Text style={styles.optionText1}>Remove Card</Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.sliderView}>
          <Image source={images.visaCard} style={styles.visaSize} />
        </View>
        <View style={styles.centerView}>
          <View style={styles.margin}>
            <Text style={styles.text}>Cardholder Name</Text>
            <TextInput
              placeholder="Cardholder Name"
              placeholderTextColor={colors.disabledBg3}
              style={styles.textField}
            />
          </View>
          <View style={styles.margin}>
            <Text style={styles.text}>Card Number</Text>
            <TextInput
              placeholder="0000 0000 0000"
              placeholderTextColor={colors.disabledBg3}
              style={styles.textField}
            />
          </View>
          <View style={styles.row}>
            <View style={styles.margin}>
              <Text style={styles.text}>CVV/CVC</Text>
              <TextInput
                placeholder="000"
                placeholderTextColor={colors.disabledBg3}
                style={styles.textFieldRow}
              />
            </View>
            <View style={styles.margin}>
              <Text style={styles.text}>Exp. Date</Text>
              <TextInput
                placeholder="00"
                placeholderTextColor={colors.disabledBg3}
                style={styles.textFieldRow1}
              />
            </View>
            <View style={styles.margin}>
              <TextInput
                placeholder="00"
                placeholderTextColor={colors.disabledBg3}
                style={styles.textFieldRow2}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.modalBottomBtn}>
            <Text style={styles.bottomBtnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        isVisible={isModalVisible}
        onBackButtonPress={() => setIsModalVisible(false)}
      >
        <View style={styles.mainModal}>
          <View style={styles.modalFirstView}>
            <Text style={styles.modalFirstViewText}>Are you sure to</Text>
            <Text style={styles.modalFirstViewText}>remove</Text>
            <Text style={styles.modalFirstViewText}>this card?</Text>
          </View>
          <View style={styles.modalSecondView}>
            <TouchableOpacity style={styles.modalBtnView}>
              <Text style={styles.modalBtn}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalBtnView1} onPress={()=> setIsModalVisible(false)}>
              <Text style={styles.modalBtn1}>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import Header from "../../components/Header";
import images from "../../services/utilities/images";
import { Modal } from "react-native";
import { colors } from "../../services";

export default function PaymentMethods() {
  const [cardStatus, setCardStatus] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const [isModalVisisble, setIsModalVisisble] = useState(false);
  return (
    <SafeAreaView>
      <ImageBackground style={styles.container}>
        <Header title={"Payment methods"} backImage={images.backArrow} />
        <View style={styles.mainContainer}>
          <Text style={styles.headingSty}>Your Payment cards</Text>
          <Image source={images.card} style={styles.card} />
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                setCardStatus("First");
              }}
            >
              <Image
                source={
                  cardStatus == "First" ? images.checkboxon : images.checkboxoff
                }
                style={styles.checkBox}
              />
            </TouchableOpacity>
            <Text style={styles.headingSty2}>
              Use as default payment method
            </Text>
          </View>
          <Image source={images.cardTwo} style={styles.card} />
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                setCardStatus("Second");
              }}
            >
              <Image
                source={
                  cardStatus == "Second"
                    ? images.checkboxon
                    : images.checkboxoff
                }
                style={styles.checkBox}
              />
            </TouchableOpacity>
            <Text style={styles.headingSty2}>
              Use as default payment method
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => setIsModalVisisble(!isModalVisisble)}
          >
            <Image source={images.plus} style={styles.plusImg} />
          </TouchableOpacity>
        </View>
        <Modal
          visible={isModalVisisble}
            // isVisible={isModalVisisble}
          backdropOpacity={0.1}
          onBackdropPress={() => setIsModalVisisble(false)}
        >
          <View style={styles.modalBody}>
            <View style={styles.modalMainView}>
              <View style={styles.horizontalLine}></View>
              <Text style={styles.modalHeading}>Add New Card</Text>
              <View style={styles.modalInputField}>
                <TextInput
                  placeholder="Name on card"
                  style={styles.textInputField}
                  placeholderTextColor={colors.disabledBg3}
                />
              </View>
              <View style={styles.modalInputField2}>
                <View>
                  <Text style={styles.inputFieldLabel}>Card Number</Text>
                  <TextInput
                    placeholder="5546 8205 3693 3947"
                    style={styles.textInputField2}
                    placeholderTextColor={colors.black}
                    inputMode="numeric"
                  />
                </View>
                <Image source={images.mastercardTwo} style={styles.imageSize} />
              </View>
              <View style={styles.modalInputField2}>
                <Text style={styles.inputFieldLabel}>Expiry Date</Text>
                <TextInput
                  placeholder="05/23"
                  style={styles.textInputField2}
                  placeholderTextColor={colors.black}
                  inputMode="numeric"
                />
              </View>
              <View style={styles.modalInputField2}>
                <View>
                  <Text style={styles.inputFieldLabel}>CVV</Text>
                  <TextInput
                    placeholder="567"
                    style={styles.textInputField2}
                    placeholderTextColor={colors.black}
                    inputMode="numeric"
                  />
                </View>
                <Image source={images.help} style={styles.imageSize} />
              </View>
              <View style={styles.row2}>
            <TouchableOpacity
              onPress={() => {
                setCheckBox(!checkBox);
              }}
            >
              <Image
                source={
                  checkBox ? images.checkboxon : images.checkboxoff
                }
                style={styles.checkBox}
              />
            </TouchableOpacity>
            <Text style={styles.headingSty2}>
              Set as default payment method
            </Text>
          </View>
              <TouchableOpacity
                onPress={() => setIsModalVisisble(false)}
                style={styles.modalBottomBtn}
              >
                <Text style={styles.bottomBtnText}>ADD CARD</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </SafeAreaView>
  );
}

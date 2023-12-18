import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import Header from "../../components/Header";
import images from "../../services/utilities/images";
import { sizes } from "../../services";
import Modal from "react-native-modal";

export default function ChatRequest() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // {navigation}
  return (
    <SafeAreaView>
      <View style={styles.MainContainer}>
        <Header title={"Rajeshh"} backImage={images.backArrow} />
        <View style={styles.row}>
          <TouchableOpacity>
            <Image source={images.phoneImg} style={styles.imgSty} />
          </TouchableOpacity>
          <TouchableOpacity
          // onPress={() => navigation.navigate('Feedback')}
          >
            <Image source={images.threeDot} style={styles.imgSty} />
          </TouchableOpacity>
        </View>
        <Text style={[styles.columnView, { top: sizes.screenHeight * 0.05 }]}>
          Today at 5:03 PM
        </Text>
        <View style={styles.chatView}>
          <ImageBackground
            source={images.contblue}
            style={styles.messageWhiteImg}
          >
            <Text style={styles.messageTextBlack}>
              Hello, can you source this product for me from the store?
            </Text>
          </ImageBackground>
          <ImageBackground
            source={images.contblack1}
            style={styles.messageBlackImg}
          >
            <Text style={styles.textWhite}>Yes sure</Text>
          </ImageBackground>
          <ImageBackground
            source={images.contblue2}
            style={styles.messageWhiteImg2}
          >
            <Text style={styles.messageTextBlack2}>
              OK, I am waiting at Vinmark Store.
            </Text>
          </ImageBackground>
          <Text style={styles.columnView2}>5:33 PM</Text>
          <ImageBackground
            source={images.contblack2}
            style={styles.messageBlackImg2}
          >
            <Text style={styles.textWhite2}>
              Sorry, I'm stuck in traffic. {"\n"} Please give me a moment.
            </Text>
          </ImageBackground>
          <View style={styles.reqView}>
            <TouchableOpacity onPress={() => setIsModalVisible(true)}>
              <Text style={styles.confirmReqBtn}>Confirm Request</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.lastView}>
            <TouchableOpacity>
              <Image source={images.clip} style={styles.clipImg} />
            </TouchableOpacity>
            <TextInput placeholder="Message" style={styles.input} />
            <TouchableOpacity>
              <Image source={images.mic} style={styles.clipImg} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Modal
        isVisible={isModalVisible}
        onBackButtonPress={() => setIsModalVisible(false)}
      >
        <View style={styles.mainModal}>
          <View style={styles.modalFirstView}>
            <Text style={styles.modalFirstViewText}>Confirm the product?</Text>
            <View style={styles.line}></View>
            <Text style={styles.modalText}>
              Are you sure you are okay with the Product?
            </Text>
            <Text style={styles.subText}>
              Only your actual product money can be refund from your payment
              according to our policy
            </Text>
          </View>
          <View style={styles.modalSecondView}>
            <TouchableOpacity
              style={styles.modalBtnView}
              onPress={() => setIsModalVisible(false)}
            >
              <Text style={styles.modalBtn}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalBtnView1}
              onPress={() => setIsModalVisible(false)}
            >
              <Text style={styles.modalBtn1}> Yes, Confirm product</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

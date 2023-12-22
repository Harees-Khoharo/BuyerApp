import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import Header from "../../components/Header";
import images from "../../services/utilities/images";
import Modal from "react-native-modal";

export default function SearchByPhoto({navigation}) {
  const [isModalVisisble, setIsModalVisisble] = useState(false);
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header backImage={images.backArrow} title={"Search taking a photo"} />
        <Image source={images.cameraGirl} style={styles.girlImg} />
        <View style={styles.cameraRow}>
          <TouchableOpacity>
            <Image source={images.flash} style={styles.imgSiz} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsModalVisisble(!isModalVisisble)}
          >
            <Image source={images.cameraPhone} style={styles.imgSiz1} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={images.sync} style={styles.imgSiz} />
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        isVisible={isModalVisisble}
        onBackdropPress={() => setIsModalVisisble(false)}
        backdropOpacity={0.2}
      >
        <View style={styles.modalMainView}>
          <Text style={styles.modalText}>
            Input the description of your item to give you the best match among
            millions
          </Text>
          <Text style={styles.modalText1}>
            Lorem ipsum dolor sit amet consectetur. Scelerisque orci natoque sit
            scelerisque velit convallis. Pharetra nec elit a facilisis mi
            elementum.
          </Text>
          <TouchableOpacity 
              onPress={() => navigation.navigate("MatchItems")}
              >
            <Image
              source={images.buttonSearch}
              style={styles.imgSiz2}
            />
          </TouchableOpacity>
        </View>
        <Image source={images.girlLock} style={styles.imgSiz3} />
      </Modal>
    </SafeAreaView>
  );
}

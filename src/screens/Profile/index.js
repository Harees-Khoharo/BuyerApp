import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import images from "../../services/utilities/images";
import { styles } from "./style";
import { colors } from "../../services";
import Modal from "react-native-modal";

export default function Profile({ navigation }) {
  const [profileSettings, setProfileSettings] = useState([
    {
      logo: images.profileEdit,
      name: "Profile Edit",
      arrow: images.rightArrow,
    },
    { logo: images.message, name: "Inbox", arrow: images.rightArrow },
    { logo: images.order, name: "Order", arrow: images.rightArrow },
    { logo: images.order, name: "Track Order", arrow: images.rightArrow },
    { logo: images.payment, name: "Payment", arrow: images.rightArrow },
    { logo: images.setting, name: "Settings", arrow: images.rightArrow },
    { logo: images.help, name: "Help Center", arrow: images.rightArrow },
    { logo: images.address, name: "Address", arrow: images.rightArrow },
    {
      logo: images.privacy,
      name: "Privacy and Policy",
      arrow: images.rightArrow,
    },
    { logo: images.invite, name: "Invite Friends", arrow: images.rightArrow },
    { logo: images.logout, name: "Log out", arrow: images.rightArrow },
  ]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleLogout = () => {
    setIsModalVisible(true);
  };
  return (
    <ScrollView>
      <SafeAreaView style={{ backgroundColor: colors.white }}>
        <Header
          backImage={images.backArrow}
          title={"Profile"}
          addToCartImage={images.bellicon}
        />
        <Image source={images.profile} style={styles.profile} />
        <Text style={styles.profileName}>Welcome Tanessah</Text>
        <View style={styles.balanceView}>
          <Image source={images.balance} style={styles.iconSty} />
          <Text style={styles.balanceText}>Your Balance: R 250.00</Text>
        </View>
        {profileSettings.map((item, index) => {
          return (
            <View key={index}>
              <TouchableOpacity
                style={styles.profileMenu}
                onPress={() => {
                  if (item.name === "Log out") {
                    handleLogout();
                  } else if (item.name === "Profile Edit") {
                    navigation.navigate("EditMyProfile");
                  } else if (item.name === "Inbox") {
                    navigation.navigate("MessageList");
                  } else if (item.name === "Order") {
                    navigation.navigate("Order");
                  } else if (item.name === "Payment") {
                    navigation.navigate("AddPaymentMethod");
                  } else if (item.name === "Settings") {
                    navigation.navigate("EditProfile");
                  } else if (item.name === "Help Center") {
                    navigation.navigate("HelpCenter");
                  } else if (item.name === "Address") {
                    navigation.navigate("Book");
                  } else if (item.name === "Privacy and Policy") {
                    navigation.navigate("Privacy");
                  } else if (item.name === "Invite Friends") {
                    navigation.navigate("InviteFriends");
                  } else if (item.name === "Track Order") {
                    navigation.navigate("TrackOrder");
                  }
                }}
              >
                <Image source={item.logo} style={styles.iconSty} />
                <Text style={styles.profileMenuText}>{item.name}</Text>
                <Image source={item.arrow} style={styles.rightArrowIconSty} />
              </TouchableOpacity>
              <View style={styles.horizontalLine}></View>
            </View>
          );
        })}
        <View style={{ paddingBottom: 20 }}></View>
        <Modal
          isVisible={isModalVisible}
          onBackButtonPress={() => setIsModalVisible(false)}
        >
          <View style={styles.mainModal}>
            <View style={styles.modalFirstView}>
              <Text style={styles.modalFirstViewText}>Log out?</Text>
              <View style={styles.line}></View>
              <Text style={styles.modalText}>
                Are you sure you want to log out?{" "}
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
                <Text style={styles.modalBtn1}> Yes, Log out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </ScrollView>
  );
}

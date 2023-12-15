import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import images from "../../services/utilities/images";
import { styles } from "./style";

export default function Profile() {
  const [profileSettings, setProfileSettings] = useState([
    {
      logo: images.profileEdit,
      name: "Profile Edit",
      arrow: images.rightArrow,
    },
    { logo: images.message, name: "Inbox", arrow: images.rightArrow },
    { logo: images.order, name: "Order", arrow: images.rightArrow },
    { logo: images.payment, name: "Payment", arrow: images.rightArrow },
    { logo: images.setting, name: "Settings", arrow: images.rightArrow },
    { logo: images.help, name: "Help Center", arrow: images.rightArrow },
    { logo: images.address, name: "Address", arrow: images.rightArrow },
    { logo: images.privacy, name: "Privacy and Policy", arrow: images.rightArrow },
    { logo: images.invite, name: "Invite Friends", arrow: images.rightArrow },
    { logo: images.logout, name: "Log out", arrow: images.rightArrow },
  ]);
  return (
    <SafeAreaView>
      <ScrollView>
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
              <TouchableOpacity style={styles.profileMenu}>
                <Image source={item.logo} style={styles.iconSty} />
                <Text style={styles.profileMenuText}>{item.name}</Text>
                <Image
                  source={item.arrow}
                  style={styles.rightArrowIconSty}
                />
              </TouchableOpacity>
              <View style={styles.horizontalLine}></View>
            </View>
          );
        })}
      </ScrollView>
      {/* <TouchableOpacity style={styles.profileMenu}>
        <Image source={images.message} style={styles.iconSty}/>
        <Text style={styles.profileMenuText}>Inbox</Text>
        <Image source={images.rightArrow} style={styles.rightArrowIconSty} />
      </TouchableOpacity>
      <View style={styles.horizontalLine} ></View>
      <TouchableOpacity style={styles.profileMenu}>
        <Image source={images.order} style={styles.iconSty}/>
        <Text style={styles.profileMenuText}>Order</Text>
        <Image source={images.rightArrow} style={styles.rightArrowIconSty} />
      </TouchableOpacity>
      <View style={styles.horizontalLine} ></View>
      <TouchableOpacity style={styles.profileMenu}>
        <Image source={images.payment} style={styles.iconSty}/>
        <Text style={styles.profileMenuText}>Payment</Text>
        <Image source={images.rightArrow} style={styles.rightArrowIconSty} />
      </TouchableOpacity>
      <View style={styles.horizontalLine} ></View>
      <TouchableOpacity style={styles.profileMenu}>
        <Image source={images.setting} style={styles.iconSty}/>
        <Text style={styles.profileMenuText}>Settings</Text>
        <Image source={images.rightArrow} style={styles.rightArrowIconSty} />
      </TouchableOpacity>
      <View style={styles.horizontalLine} ></View>
      <TouchableOpacity style={styles.profileMenu}>
        <Image source={images.message} style={styles.iconSty}/>
        <Text style={styles.profileMenuText}>Inbox</Text>
        <Image source={images.rightArrow} style={styles.rightArrowIconSty} />
      </TouchableOpacity> */}
    </SafeAreaView>
  );
}

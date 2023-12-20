import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import images from "../../services/utilities/images";
import { styles } from "./style";
import { colors, sizes } from "../../services";

export default function Order({navigation}) {
  const [onOrder, setOnOrder] = useState("OngoingOrders");
  return (
    <SafeAreaView
      style={{ backgroundColor: colors.white, height: sizes.screenHeight }}
    >
      <Header backImage={images.backArrow} title={"Orders"} />
      <View style={styles.mainContainer}>
        <View style={styles.firstView}>
          <TouchableOpacity onPress={() => setOnOrder("OngoingOrders")}>
            <Text style={styles.textStyling}>Ongoing Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setOnOrder("ClosedOrders")}>
            <Text style={styles.textStyling}>Closed Orders</Text>
          </TouchableOpacity>
        </View>
        {onOrder === "OngoingOrders" ? (
          <View style={styles.horizontailLine}></View>
        ) : (
          <View style={styles.horizontailLine2}></View>
        )}
        {onOrder === "OngoingOrders" ? (
          <View>
            <Image source={images.cartTwo} style={styles.cartSizing} />
            <View style={styles.textStyling2}>
              <Text style={styles.text}>You have no active</Text>
              <Text style={styles.text1}>
                All your order will be saved here for you to access
              </Text>
              <Text style={styles.text1}>thier state anytime.</Text>
            </View>
            <TouchableOpacity style={styles.btnView}  onPress={() => navigation.navigate("MyTabs")}>
              <Text style={styles.btnText}>Continue shopping</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <Image source={images.cartTwo} style={styles.cartSizing} />
            <View style={styles.textStyling2}>
              <Text style={styles.text}>You dont have a close order yet</Text>
              <Text style={styles.text1}>
                All your order will be saved here for you to access
              </Text>
              <Text style={styles.text1}>thier state anytime.</Text>
            </View>
            <TouchableOpacity
              style={styles.btnView}
              onPress={() => navigation.navigate("MyTabs")}
            >
              <Text style={styles.btnText}>Continue shopping</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

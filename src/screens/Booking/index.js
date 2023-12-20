import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import images from "../../services/utilities/images";
import Header from "../../components/Header";
import Modal from "react-native-modal";

export default function Booking() {
  const [tabname, setTabname] = useState("Ongoing");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [pendingData, setPendingData] = useState([
    {
      day: "Mon 12 Dec 2022",
      profile: images.profile2,
      price: "12.5",
      name: "Aakash Kukadiya",
      location1: "Ghogha Circle, Bhavnagar",
      time1: "3:15 pm",
      location2: "Kaliyabid , Bhavnagar",
      time2: "3:45 pm",
    },
    {
      day: "Mon 12 Dec 2022",
      profile: images.profile2,
      price: "12.5",
      name: "Aakash Kukadiya",
      location1: "Ghogha Circle, Bhavnagar",
      time1: "3:15 pm",
      location2: "Kaliyabid , Bhavnagar",
      time2: "3:45 pm",
    },
    {
      day: "Mon 12 Dec 2022",
      profile: images.profile2,
      price: "12.5",
      name: "Aakash Kukadiya",
      location1: "Ghogha Circle, Bhavnagar",
      time1: "3:15 pm",
      location2: "Kaliyabid , Bhavnagar",
      time2: "3:45 pm",
    },
    {
      day: "Mon 12 Dec 2022",
      profile: images.profile2,
      price: "12.5",
      name: "Aakash Kukadiya",
      location1: "Ghogha Circle, Bhavnagar",
      time1: "3:15 pm",
      location2: "Kaliyabid , Bhavnagar",
      time2: "3:45 pm",
    },
  ]);
  const [completedData, setCompletedData] = useState([
    {
      day: "Mon 12 Dec 2022",
      profile: images.profile2,
      price: "12.5",
      name: "Aakash Kukadiya",
      location1: "Ghogha Circle, Bhavnagar",
      time1: "3:15 pm",
      location2: "Kaliyabid , Bhavnagar",
      time2: "3:45 pm",
    },
    {
      day: "Mon 12 Dec 2022",
      profile: images.profile2,
      price: "12.5",
      name: "Aakash Kukadiya",
      location1: "Ghogha Circle, Bhavnagar",
      time1: "3:15 pm",
      location2: "Kaliyabid , Bhavnagar",
      time2: "3:45 pm",
    },
    {
      day: "Mon 12 Dec 2022",
      profile: images.profile2,
      price: "12.5",
      name: "Aakash Kukadiya",
      location1: "Ghogha Circle, Bhavnagar",
      time1: "3:15 pm",
      location2: "Kaliyabid , Bhavnagar",
      time2: "3:45 pm",
    },
    {
      day: "Mon 12 Dec 2022",
      profile: images.profile2,
      price: "12.5",
      name: "Aakash Kukadiya",
      location1: "Ghogha Circle, Bhavnagar",
      time1: "3:15 pm",
      location2: "Kaliyabid , Bhavnagar",
      time2: "3:45 pm",
    },
  ]);
  const [cancelledData, setCancelledData] = useState([
    {
      day: "Mon 12 Dec 2022",
      profile: images.profile2,
      price: "12.5",
      name: "Aakash Kukadiya",
      location1: "Ghogha Circle, Bhavnagar",
      time1: "3:15 pm",
      location2: "Kaliyabid , Bhavnagar",
      time2: "3:45 pm",
    },
    {
      day: "Mon 12 Dec 2022",
      profile: images.profile2,
      price: "12.5",
      name: "Aakash Kukadiya",
      location1: "Ghogha Circle, Bhavnagar",
      time1: "3:15 pm",
      location2: "Kaliyabid , Bhavnagar",
      time2: "3:45 pm",
    },
    {
      day: "Mon 12 Dec 2022",
      profile: images.profile2,
      price: "12.5",
      name: "Aakash Kukadiya",
      location1: "Ghogha Circle, Bhavnagar",
      time1: "3:15 pm",
      location2: "Kaliyabid , Bhavnagar",
      time2: "3:45 pm",
    },
    {
      day: "Mon 12 Dec 2022",
      profile: images.profile2,
      price: "12.5",
      name: "Aakash Kukadiya",
      location1: "Ghogha Circle, Bhavnagar",
      time1: "3:15 pm",
      location2: "Kaliyabid , Bhavnagar",
      time2: "3:45 pm",
    },
  ]);

  const handleTabname = (name) => {
    setTabname(name);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header
            backImage={images.backArrow}
          title={"Orders"}
          //   searchIcon={images.search}
        />
        <View style={styles.tabView}>
          <TouchableOpacity
            style={styles.tabBtn}
            onPress={() => {
              handleTabname("Ongoing");
            }}
          >
            <Text
              style={
                tabname === "Ongoing" ? styles.btnTextActive : styles.btnText
              }
            >
              Ongoing
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabBtn}
            onPress={() => {
              handleTabname("completed");
            }}
          >
            <Text
              style={
                tabname === "completed" ? styles.btnTextActive : styles.btnText
              }
            >
              Completed
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabBtn}
            onPress={() => {
              handleTabname("cancelled");
            }}
          >
            <Text
              style={
                tabname === "cancelled" ? styles.btnTextActive : styles.btnText
              }
            >
              Cancelled
            </Text>
          </TouchableOpacity>
        </View>
        {tabname === "Ongoing" && (
          <ScrollView>
            <View>
              {pendingData.map((item, index) => {
                return (
                  <View key={index} style={styles.mapView}>
                    <Text style={styles.dayText}>{item.day}</Text>
                    <View style={styles.profilePriceView}>
                      <View style={styles.profileView}>
                        <Image
                          source={item.profile}
                          style={styles.profileImg}
                        />
                        <Text style={styles.nameText}>{item.name}</Text>
                      </View>
                      <Text style={styles.priceText}>{`$${item.price}`}</Text>
                    </View>
                    <View style={styles.locationMainView}>
                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={images.trackImg}
                          style={styles.trackImg}
                        />

                        <View style={styles.locationTextView}>
                          <View>
                            <Text style={styles.locationText}>
                              {item.location1}
                            </Text>

                            <Text style={styles.timeText}>{item.time1}</Text>
                          </View>
                          <Text style={styles.locationText}>
                            {item.location2}
                          </Text>
                        </View>
                        <TouchableOpacity style={styles.trackRight}>
                          <Image
                            source={images.trackOrder}
                            style={styles.trackOrder}
                          />
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity
                        style={styles.cancelRight}
                        onPress={() => setIsModalVisible(true)}
                      >
                        <Image
                          source={images.cancelOrder}
                          style={styles.cancelOrder}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
            </View>
            <View style={styles.marginBottom}></View>
          </ScrollView>
        )}
        {tabname === "completed" && (
          <ScrollView>
            <View>
              {completedData.map((item, index) => {
                return (
                  <View key={index} style={styles.mapView}>
                    <Text style={styles.dayText}>{item.day}</Text>
                    <View style={styles.profilePriceView}>
                      <View style={styles.profileView}>
                        <Image
                          source={item.profile}
                          style={styles.profileImg}
                        />
                        <Text style={styles.nameText}>{item.name}</Text>
                      </View>
                      <Text style={styles.priceText}>{`$${item.price}`}</Text>
                    </View>

                    <View style={styles.locationMainView}>
                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={images.trackImg}
                          style={styles.trackImg}
                        />
                        <View style={styles.locationTextView}>
                          <View>
                            <Text style={styles.locationText}>
                              {item.location1}
                            </Text>
                            <Text style={styles.timeText}>{item.time1}</Text>
                          </View>
                          <Text style={styles.locationText}>
                            {item.location2}
                          </Text>
                        </View>
                        <TouchableOpacity style={styles.leaveRight}>
                          <Image
                            source={images.leaveReview}
                            style={styles.cancelOrder}
                          />
                        </TouchableOpacity>
                      </View>

                      <TouchableOpacity style={styles.completeRight}>
                        <Image
                          source={images.completed}
                          style={styles.completedOrder}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
            </View>
            <View style={styles.marginBottom}></View>
          </ScrollView>
        )}
        {tabname === "cancelled" && (
          <ScrollView>
            <View>
              {cancelledData.map((item, index) => {
                return (
                  <View key={index} style={styles.mapView}>
                    <Text style={styles.dayText}>{item.day}</Text>
                    <View style={styles.profilePriceView}>
                      <View style={styles.profileView}>
                        <Image
                          source={item.profile}
                          style={styles.profileImg}
                        />
                        <Text style={styles.nameText}>{item.name}</Text>
                      </View>
                      <Text style={styles.priceText}>{`$${item.price}`}</Text>
                    </View>
                    <View style={styles.locationMainView}>
                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={images.trackImg}
                          style={styles.trackImg}
                        />
                        <View style={styles.locationTextView}>
                          <View>
                            <Text style={styles.locationText}>
                              {item.location1}
                            </Text>
                            <Text style={styles.timeText}>{item.time1}</Text>
                          </View>
                          <Text style={styles.locationText}>
                            {item.location2}
                          </Text>
                        </View>
                      </View>

                      <TouchableOpacity>
                        <Image
                          source={images.cancelled}
                          style={styles.completedOrder}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
            </View>
            <View style={styles.marginBottom}></View>
          </ScrollView>
        )}
        <Modal
          isVisible={isModalVisible}
          onBackButtonPress={() => setIsModalVisible(false)}
        >
          <View style={styles.mainModal}>
            <View style={styles.modalFirstView}>
              <Text style={styles.modalFirstViewText}>
                Cancel Ongoing Order
              </Text>
              <View style={styles.line}></View>
              <Text style={styles.modalText}>
                Are you sure you want to cancel your Product booking?
              </Text>
              <Text style={styles.subText}>
                Only 80% of the money you can refund fromyour payment according
                to our policy
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
                <Text style={styles.modalBtn1}> Yes, Cancel Order</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import images from "../../services/utilities/images";

export default function InviteFriends() {
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={images.leftArrowIcon} style={styles.headerImg} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Invite Friends</Text>
        </View>
        <View style={styles.top}>
          <View style={styles.passViewMain}>
            <View style={styles.bottomViewAllingment}>
              <View style={styles.Img}>
                <Image source={images.user} style={styles.user} />
                <Text style={styles.passTextSty}>Agbafina</Text>
                <View>
                  <Text style={styles.phoneNum}>(243) 555-0123</Text>
                </View>
              </View>
              <TouchableOpacity>
                <Image
                  source={images.inviteBtn}
                  style={styles.rightArrowIconSty}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.passViewMain}>
            <View style={styles.bottomViewAllingment}>
              <View style={styles.Img}>
                <Image source={images.user} style={styles.user} />
                <Text style={styles.passTextSty}>John doe</Text>
                <View>
                  <Text style={styles.phoneNum}>(243) 555-0123</Text>
                </View>
              </View>
              <TouchableOpacity>
                <Image
                  source={images.inviteBtn}
                  style={styles.rightArrowIconSty}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.passViewMain}>
            <View style={styles.bottomViewAllingment}>
              <View style={styles.Img}>
                <Image source={images.user} style={styles.user} />
                <Text style={styles.passTextSty}>Acaman fa</Text>
                <View>
                  <Text style={styles.phoneNum}>(243) 555-0123</Text>
                </View>
              </View>
              <TouchableOpacity>
                <Image
                  source={images.inviteBtn}
                  style={styles.rightArrowIconSty}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.passViewMain}>
            <View style={styles.bottomViewAllingment}>
              <View style={styles.Img}>
                <Image source={images.user} style={styles.user} />
                <Text style={styles.passTextSty}>benjamin benacer</Text>
                <View>
                  <Text style={styles.phoneNum}>(243) 555-0123</Text>
                </View>
              </View>
              <TouchableOpacity>
                <Image
                  source={images.inviteBtn}
                  style={styles.rightArrowIconSty}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.passViewMain}>
            <View style={styles.bottomViewAllingment}>
              <View style={styles.Img}>
                <Image source={images.user} style={styles.user} />
                <Text style={styles.passTextSty}>Ronald brewster</Text>
                <View>
                  <Text style={styles.phoneNum}>(243) 555-0123</Text>
                </View>
              </View>
              <TouchableOpacity>
                <Image
                  source={images.inviteBtn}
                  style={styles.rightArrowIconSty}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.passViewMain}>
            <View style={styles.bottomViewAllingment}>
              <View style={styles.Img}>
                <Image source={images.user} style={styles.user} />
                <Text style={styles.passTextSty}>Benard frank</Text>
                <View>
                  <Text style={styles.phoneNum}>(243) 555-0123</Text>
                </View>
              </View>
              <TouchableOpacity>
                <Image
                  source={images.inviteBtn}
                  style={styles.rightArrowIconSty}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.passViewMain}>
            <View style={styles.bottomViewAllingment}>
              <View style={styles.Img}>
                <Image source={images.user} style={styles.user} />
                <Text style={styles.passTextSty}>Ronald Riche</Text>
                <View>
                  <Text style={styles.phoneNum}>(243) 555-0123</Text>
                </View>
              </View>
              <TouchableOpacity>
                <Image
                  source={images.inviteBtn}
                  style={styles.rightArrowIconSty}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.height}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

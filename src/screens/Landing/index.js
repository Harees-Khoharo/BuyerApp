import React, { useRef, useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./style";
import images from "../../services/utilities/images";
import { TextInput } from "react-native-gesture-handler";
import { colors } from "../../services";
import CountryPicker from "react-native-country-picker-modal";
import Flag from 'react-native-flags';

export default function Landing({ navigation }) {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  return (
    <SafeAreaView>
      <View style={styles.landingBody}>
        <Image style={styles.landingImg} source={images.landingImg} />
        <View style={styles.heading}>

        <CountryPicker
          onSelect={(country) => handleCountrySelect(country)}
          withFlag
          withCountryNameButton
          withCallingCode
          withEmoji
        />
        </View>
        
        <Text style={styles.textBlack}>
          This will be use to show item available in your region/country
        </Text>
        <View style={styles.textField}>
          {selectedCountry ?(
            <>
            <Flag
              code={selectedCountry.cca2}
              size={32} 
            />
          <Text style={styles.textInput}>{selectedCountry?.name}</Text>
          </>

            )
          
          :(
            <Text style={styles.textInput}>Click Select Country</Text>

          )
          }
    
          <TouchableOpacity>
            <Image source={images.dropdown} style={styles.dropDownSiz} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.bottomBtn}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.bottomBtnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

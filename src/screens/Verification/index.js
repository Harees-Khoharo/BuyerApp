import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./style";
import images from "../../services/utilities/images";
import { colors } from "../../services";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

export default function Verification() {
  const [value, setValue] = useState("");
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(60);

  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const CELL_COUNT = 4;

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <SafeAreaView>
      <View style={styles.landingBody}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image style={styles.headerImg} source={images.leftIcon} />
          </TouchableOpacity>
          <Text style={styles.headerHeading}>Verification</Text>
        </View>
        <Text style={styles.textNormal}>
          Kindly enter the OTP sent to your mobile phone
        </Text>

        <View style={styles.padding}>
          <CodeField
            ref={ref}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}
              >
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>
        <View style={[styles.center, styles.row]}>
          {seconds > 9 ? (
            <Text style={styles.otpText}>
              Resend code in <Text style={styles.otpTime}>0:{seconds}</Text>s
            </Text>
          ) : (
            <Text style={styles.otpText}>
              Resend code in <Text style={styles.otpTime}>0:0{seconds}</Text>s
            </Text>
          )}
        </View>

        <TouchableOpacity style={styles.nextIconContainer}>
          <Image style={styles.nextIcon} source={images.nextIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

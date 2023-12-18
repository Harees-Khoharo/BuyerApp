import React from "react";
import { Text, View } from "react-native";
import Landing from "./src/screens/Landing";
import SignUp from "./src/screens/SignUp";
import LogIn from "./src/screens/LogIn";
import ForgotPassword from "./src/screens/ForgotPassword";
import Authentication from "./src/screens/Authentication";
import Verification from "./src/screens/Verification";
import NewPassword from "./src/screens/NewPassword";
import EnableLocationManual from "./src/screens/EnableLocationManual";
import EnableLocationNow from "./src/screens/EnableLocationNow";
import EnterYourLocation from "./src/screens/EnterYourLocation";

export default function App() {
  return (
    <View>
      {/* <Landing /> */}
      {/* <SignUp /> */}
      {/* <LogIn /> */}
      {/* <ForgotPassword /> */}
      {/* <Authentication /> */}
      {/* <Verification /> */}
      {/* <NewPassword /> */}
      {/* <EnableLocationManual /> */}
      {/* <EnableLocationNow /> */}
      <EnterYourLocation />
    </View>
  );
}

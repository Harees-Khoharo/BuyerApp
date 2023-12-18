import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Checkout from "./src/screens/Checkout";
import Header from "./src/components/Header";
import PaymentMethods from "./src/screens/PaymentMethods";
import ShippingAddresses from "./src/screens/ShippingAddresses";
import AddShippingAddress from "./src/screens/AddShippingAddress";
import Success from "./src/screens/Success";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import Book from "./src/screens/Book";
import Information from "./src/screens/Information";
import CardInfo from "./src/screens/CardInfo";
import EditMyProfile from "./src/screens/EditMyProfile";
import Notification from "./src/screens/Notification";
import Order from "./src/screens/Order";
import HelpCenter from "./src/screens/HelpCenter";
import Privacy from "./src/screens/Privacy";
import EditProfile from "./src/screens/EditProfile";
import AddPaymentMethod from "./src/screens/AddPaymentMethod";
import InviteFriends from "./src/screens/InviteFriends";
import MessageList from "./src/screens/MessageList";
import ChatRequest from "./src/screens/ChatRequest";
import Booking from "./src/screens/Booking";
import Landing from "./src/screens/Landing";
import SignUp from "./src/screens/SignUp";
import LogIn from "./src/screens/LogIn";
import ForgotPassword from "./src/screens/ForgotPassword";
import Authentication from "./src/screens/Authentication";
import Verification from "./src/screens/Verification";
import NewPassword from "./src/screens/NewPassword";
import PasswordManager from "./src/screens/PasswordManager";
import Favourites from "./src/screens/Favourites";
import MyCart from "./src/screens/MyCart";

export default function App() {
  return (
    <SafeAreaView>
      {/* ------------------------ */}
      {/* <Landing /> */}
      {/* <SignUp /> */}
      {/* <LogIn /> */}
      {/* <ForgotPassword /> */}
      {/* <Authentication /> */}
      {/* <Verification /> */}
      {/* <NewPassword /> */}
      {/* ------------------------ */}

      {/* <Checkout/> */}
      {/* <PaymentMethods/> */}
      {/* <ShippingAddresses/> */}
      {/* <AddShippingAddress/> */}
      {/* <Success/> */}
      {/* <Home/> */}
      {/* <Profile/> */}
      {/* <Book/> */}
      {/* <Information/> */}
      {/* <CardInfo/> */}
      {/* <Notification/> */}
      {/* <Order/> */}
      {/* <EditMyProfile/> */}
      {/* <EditProfile /> */}
      {/* <AddPaymentMethod /> */}
      {/* <PasswordManager /> */}
      {/* <HelpCenter/> */}
      {/* <Privacy/> */}
      {/* <InviteFriends /> */}
      {/* <MessageList /> */}
      {/* <ChatRequest /> */}
      {/* <Booking /> */}
      {/* <Favourites /> */}
      <MyCart />
    </SafeAreaView>
  );
}

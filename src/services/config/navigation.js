import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Checkout from "../../screens/Checkout";
import MyCart from "../../screens/MyCart";
import PaymentMethods from "../../screens/PaymentMethods";
import ShippingAddresses from "../../screens/ShippingAddresses";
import AddShippingAddress from "../../screens/AddShippingAddress";
import Success from "../../screens/Success";
import Home from "../../screens/Home";
import Profile from "../../screens/Profile";
import Book from "../../screens/Book";
import Information from "../../screens/Information";
import CardInfo from "../../screens/CardInfo";
import EditMyProfile from "../../screens/EditMyProfile";
import Notification from "../../screens/Notification";
import Order from "../../screens/Order";
import HelpCenter from "../../screens/HelpCenter";
import Privacy from "../../screens/Privacy";
import EditProfile from "../../screens/EditProfile";
import AddPaymentMethod from "../../screens/AddPaymentMethod";
import InviteFriends from "../../screens/InviteFriends";
import MessageList from "../../screens/MessageList";
import ChatRequest from "../../screens/ChatRequest";
import Booking from "../../screens/Booking";
import Landing from "../../screens/Landing";
import SignUp from "../../screens/SignUp";
import LogIn from "../../screens/LogIn";
import ForgotPassword from "../../screens/ForgotPassword";
import Authentication from "../../screens/Authentication";
import Verification from "../../screens/Verification";
import NewPassword from "../../screens/NewPassword";
import PasswordManager from "../../screens/PasswordManager";
import Favourites from "../../screens/Favourites";
import Search from "../../screens/Search";
import Categories from "../../screens/Categories";
import CategoryItems from "../../screens/CategoryItems";
import Alcohol from "../../screens/Alcohol";
import Appliances from "../../screens/Appliances";
import Toiletries from "../../screens/Toiletries";
import Wears from "../../screens/Wears";
import Accessories from "../../screens/Accessories";
import Electronics from "../../screens/Electronics";
import Filter from "../../screens/Filter";
import TrackOrder from "../../screens/TrackOrder";
import RatingAndReview from "../../screens/RatingAndReview";
import VisualSearch from "../../screens/VisualSearch";
import ProductDetail from "../../screens/ProductDetail";
import EnableLocationManual from "../../screens/EnableLocationManual";
import EnableLocationNow from "../../screens/EnableLocationNow";
import EnterYourLocation from "../../screens/EnterYourLocation";
import CreateStore from "../../screens/CreateStore";
import CreateNewStore from "../../screens/CreateNewStore";
import MyStore from "../../screens/MyStore";
import Products from "../../screens/Products";
import AddProduct from "../../screens/AddProduct";
import EditProduct from "../../screens/EditProduct";

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Profile" component={Profile} />

        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="MyCart" component={MyCart} />
        <Stack.Screen name="PaymentMethods" component={PaymentMethods} />
        <Stack.Screen name="ShippingAddresses" component={ShippingAddresses} />
        <Stack.Screen
          name="AddShippingAddress"
          component={AddShippingAddress}
        />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Book" component={Book} />
        <Stack.Screen name="Information" component={Information} />
        <Stack.Screen name="CardInfo" component={CardInfo} />
        <Stack.Screen name="EditMyProfile" component={EditMyProfile} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="HelpCenter" component={HelpCenter} />
        <Stack.Screen name="Privacy" component={Privacy} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="AddPaymentMethod" component={AddPaymentMethod} />
        <Stack.Screen name="InviteFriends" component={InviteFriends} />
        <Stack.Screen name="MessageList" component={MessageList} />
        <Stack.Screen name="ChatRequest" component={ChatRequest} />
        <Stack.Screen name="Booking" component={Booking} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Authentication" component={Authentication} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="PasswordManager" component={PasswordManager} />
        <Stack.Screen name="Favourites" component={Favourites} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="CategoryItems" component={CategoryItems} />
        <Stack.Screen name="Alcohol" component={Alcohol} />
        <Stack.Screen name="Appliances" component={Appliances} />
        <Stack.Screen name="Toiletries" component={Toiletries} />
        <Stack.Screen name="Wears" component={Wears} />
        <Stack.Screen name="Accessories" component={Accessories} />
        <Stack.Screen name="Electronics" component={Electronics} />
        <Stack.Screen name="Filter" component={Filter} />
        <Stack.Screen name="TrackOrder" component={TrackOrder} />
        <Stack.Screen name="RatingAndReview" component={RatingAndReview} />
        <Stack.Screen name="VisualSearch" component={VisualSearch} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen
          name="EnableLocationManual"
          component={EnableLocationManual}
        />
        <Stack.Screen name="EnableLocationNow" component={EnableLocationNow} />
        <Stack.Screen name="EnterYourLocation" component={EnterYourLocation} />
        <Stack.Screen name="CreateStore" component={CreateStore} />
        <Stack.Screen name="CreateNewStore" component={CreateNewStore} />
        <Stack.Screen name="MyStore" component={MyStore} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="AddProduct" component={AddProduct} />
        <Stack.Screen name="EditProduct" component={EditProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

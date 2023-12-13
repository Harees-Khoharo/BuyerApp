import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingPage from '../../screens/LandingPage';
import Signup from '../../screens/Signup';
import Signin from '../../screens/Signin';
import ForgotPassword from '../../screens/ForgotPassword';
import EmailOTP from '../../screens/EmailOTP';
import PhoneOTP from '../../screens/PhoneOTP';
import ForgotPasswordPhone from '../../screens/ForgotPasswordPhone';
import ResetPassword from '../../screens/ResetPassword';
import Settings from '../../screens/Settings';
import Notifications from '../../screens/Notifications';
import Language from '../../screens/Language';
import Securiy from '../../screens/Security';
import ContactUs from '../../screens/ContactUs';
import PrivacyPolicy from '../../screens/PrivacyPolicy';
import ProfileInformation from '../../screens/ProfileInformation';

export default function MainNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="ProfileInformation" component={ProfileInformation} />
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="EmailOTP" component={EmailOTP} />
        <Stack.Screen name="PhoneOTP" component={PhoneOTP} />
        <Stack.Screen name="ForgotPasswordPhone" component={ForgotPasswordPhone} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Language" component={Language} />
        <Stack.Screen name="Securiy" component={Securiy} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

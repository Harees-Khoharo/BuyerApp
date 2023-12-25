import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {sizes} from '../utilities/sizes';
import {colors} from '../utilities/colors';
import images from '../utilities/images';
import {Image, Text, View} from 'react-native';
import {fontSize} from '../utilities/fonts';
import Booking from '../../screens/Booking';
import Inbox from '../../screens/MessageList';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import Favourites from '../../screens/Favourites';
import MyStore from '../../screens/MyStore';
import CreateStore from '../../screens/CreateStore';
import Categories from '../../screens/Categories';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.white,
          width: sizes.screenWidth,
          height: sizes.screenHeight * 0.075,
          paddingTop: sizes.screenHeight * 0.01,
          paddingHorizontal: sizes.screenWidth * 0.04,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="bottom1"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={images.btmTaB1}
              style={{
                resizeMode: 'contain',
                width: sizes.screenWidth * 0.065,
                height: sizes.screenWidth * 0.065,
                tintColor: focused ? colors.black : colors.disabledBg,
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <CustomTabLabel focused={focused} label="Home" />
          ),
        }}
      />
      <Tab.Screen
        name="Browse"
        component={Categories}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={images.search}
              style={{
                resizeMode: 'contain',
                width: sizes.screenWidth * 0.065,
                height: sizes.screenWidth * 0.065,
                tintColor: focused ? colors.black : colors.disabledBg,
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <CustomTabLabel focused={focused} label="Browse" />
          ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={CreateStore}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={images.btmTaB3}
              style={{
                resizeMode: 'contain',
                width: sizes.screenWidth * 0.065,
                height: sizes.screenWidth * 0.065,
                tintColor: focused ? colors.black : colors.disabledBg,
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <CustomTabLabel focused={focused} label="Store" />
          ),
        }}
      />
      <Tab.Screen
        name="bottom4"
        component={Favourites}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={images.heartFilled2}
              style={{
                resizeMode: 'contain',
                width: sizes.screenWidth * 0.065,
                height: sizes.screenWidth * 0.065,
                tintColor: focused ? colors.black : colors.disabledBg,
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <CustomTabLabel focused={focused} label="Favourite" />
          ),
        }}
      />
      <Tab.Screen
        name="bottom5"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={images.btmTaB2}
              style={{
                resizeMode: 'contain',
                width: sizes.screenWidth * 0.065,
                height: sizes.screenWidth * 0.065,
                tintColor: focused ? colors.black : colors.disabledBg,
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <CustomTabLabel focused={focused} label="Profile" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const CustomTabLabel = ({focused, label}) => {
  const inactiveColor = colors.disabledBg2;
  const activeColor = colors.black;

  return (
    <Text
      style={{
        color: focused ? activeColor : inactiveColor,
        fontSize: fontSize.smallM,
        fontWeight: focused ? '800' : '400',
      }}>
      {label}
    </Text>
  );
};

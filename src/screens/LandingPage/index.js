import React from 'react';
import {ImageBackground, SafeAreaView, Text, View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Button from '../../components/Button';

export default function LandingPage({navigation}) {
  const handleSignup = () => {
    navigation.navigate('Signup');
  };
  const handleSignin = () => {
    navigation.navigate('Signin');
  };
  return (
    <SafeAreaView>
      <ImageBackground source={images.landingBg} style={styles.landingBg}>
        <View style={styles.textView}>
          <Text style={styles.head}>Luxury Cars</Text>
          <Text style={styles.content}>
            Find your driving tribe and embark on epic road trips with Luxury
            Cars.
          </Text>
          <View>
            <Button title={'Sign up'} onPress={handleSignup} />
          </View>
          <View style={styles.btnTop}>
            <Button title={'Sign in'} dark={true} onPress={handleSignin} />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

import React from 'react';
import {StyleSheet, View, ImageBackground, Image, Text} from 'react-native';
import AppButton from '../../components/AppButton';
import {colors, Images} from '../../constants';

const WelcomScreen = () => {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.backgroundImage}
      resizeMode="cover"
      source={Images.background}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={Images.redlogo} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color={colors.secondary} />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    padding: 10,
    width: '100%',
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  tagline: {
    fontWeight: '300',
    fontFamily: 'sans-serif-light',
    fontSize: 25,
    color: 'black',
    marginVertical: 10,
  },
});
export default WelcomScreen;

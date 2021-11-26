import React from 'react';
import {Platform, StyleSheet, Text} from 'react-native';

const AppText = ({children, style, ...otherProps}) => {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: 'black',
    fontFamily: Platform.OS === 'android' ? 'roboto' : 'avenir',
  },
});
export default AppText;

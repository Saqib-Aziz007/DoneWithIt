import React from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {colors, icons} from '../constants';

const AppTextInput = ({icon, width = '100%', ...otherProps}) => {
  return (
    <View style={[styles.container, {width}]}>
      {icon && <Image style={styles.icon} source={icon} />}
      <TextInput
        placeholderTextColor={colors.lightgrey}
        style={styles.input}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    width: '100%',
    flexDirection: 'row',
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
  },
  icon: {
    height: 30,
    width: 30,
    margin: 15,
    marginRight: 10,
  },
  input: {
    color: 'grey',
    fontSize: 18,
    flex: 1,
    marginLeft: 10,
  },
});

export default AppTextInput;

import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import AppText from './AppText';
import Icon from './Icon';

const CategoryPickerComponent = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon
        iconImage={item.icon}
        backgroundColor={item.backgroundColor}
        size={80}
      />
      <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    alignItems: 'center',
    width: '33%',
  },
  label: {
    marginTop: 5,
    textAlign: 'center',
  },
});

export default CategoryPickerComponent;

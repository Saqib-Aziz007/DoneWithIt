import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import AppText from './AppText';

const PickerItem = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  label: {
    padding: 20,
  },
});

export default PickerItem;

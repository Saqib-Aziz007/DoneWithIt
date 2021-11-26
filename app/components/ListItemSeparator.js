import React from 'react';
import {StyleSheet, View} from 'react-native';

const ListItemSeparator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    backgroundColor: 'lightgrey',
    height: 1,
    width: '100%',
  },
});

export default ListItemSeparator;

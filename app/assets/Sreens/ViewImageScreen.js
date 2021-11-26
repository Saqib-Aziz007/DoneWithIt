import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors, icons, Images} from '../../constants';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.closeButton} source={icons.close} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.deleteButton} source={icons.bin} />
      </TouchableOpacity>
      <Image resizeMode="contain" style={styles.image} source={Images.couch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  closeButton: {
    height: 30,
    width: 30,
    position: 'absolute',
    top: 30,
    left: 30,
  },
  deleteButton: {
    height: 35,
    width: 35,
    position: 'absolute',
    top: 30,
    right: 30,
  },
});
export default ViewImageScreen;

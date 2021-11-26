import React from 'react';
import {Image, View} from 'react-native';
import {colors} from '../constants';

const Icon = ({size = 50, iconImage, backgroundColor = '#000'}) => {
  return (
    <View
      style={{
        height: size,
        width: size,
        backgroundColor: backgroundColor,
        borderRadius: size / 2,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        style={{
          height: size / 2,
          width: size / 2,
        }}
        source={iconImage}
      />
    </View>
  );
};

export default Icon;

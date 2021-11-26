import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {colors} from '../constants';
import AppText from './AppText';

const Card = ({title, subTitle, image}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.itemImage} source={image} />
      <View style={styles.titleContainer}>
        <AppText style={styles.title} numberOfLines={1}>
          {title}
        </AppText>
        <AppText style={styles.subTitle} numberOfLines={2}>
          {subTitle}
        </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    marginBottom: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  itemImage: {
    width: '100%',
    height: 200,
  },
  titleContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
});
export default Card;

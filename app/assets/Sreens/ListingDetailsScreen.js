import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import AppText from '../../components/AppText';
import ListItem from '../../components/ListItem';
import {colors, icons, Images} from '../../constants';

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={Images.jackerUrl} />
      <View style={styles.titleContainer}>
        <AppText style={styles.title}>Chair For Sale</AppText>
        <AppText style={styles.subtitle}>$20</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={Images.redlogo}
            title="Muhammad Saqib"
            subtitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  titleContainer: {
    padding: 20,
  },
  title: {
    fontWeight: '500',
    fontSize: 24,
    color: 'black',
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 30,
  },
});

export default ListingDetailsScreen;

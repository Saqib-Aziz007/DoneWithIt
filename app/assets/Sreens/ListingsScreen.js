import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Card from '../../components/Card';
import {colors, listings} from '../../constants';

const ListingsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            image={item.image}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;

import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {colors} from '../constants';

const ListItemDeleteAction = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.deleteTile}>
        <Text style={styles.deletetext}>Delete</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  deleteTile: {
    backgroundColor: colors.danger,
    height: '100%',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deletetext: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
});

export default ListItemDeleteAction;

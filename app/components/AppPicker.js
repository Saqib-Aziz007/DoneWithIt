import React from 'react';
import {
  Button,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {colors, icons} from '../constants';
import AppText from './AppText';
import {useState} from 'react';
import PickerItem from './PickerItem';

const AppPicker = ({
  icon,
  items,
  placeholder,
  numberOfCoumns = 1,
  PickerItemComponent = PickerItem,
  selectedItem,
  width = '100%',
  onSelectItem,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, {width}]}>
          {icon && <Image style={styles.icon} source={icons.category} />}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          {<Image style={styles.icon} source={icons.arrowdown} />}
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Button title="Close" onPress={() => setModalVisible(false)} />
        <FlatList
          data={items}
          numColumns={numberOfCoumns}
          keyExtractor={item => item.value.toString()}
          renderItem={({item}) => (
            <PickerItemComponent
              item={item}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item);
              }}
            />
          )}></FlatList>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
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
    fontSize: 18,
    flex: 1,
  },
  placeholder: {
    color: colors.lightgrey,
    flex: 1,
    padding: 10,
  },
  text: {
    flex: 1,
    padding: 10,
  },
});

export default AppPicker;

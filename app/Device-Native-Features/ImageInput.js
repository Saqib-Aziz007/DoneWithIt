import React from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {colors, icons} from '../constants';

const ImageInput = ({imageUri, onChangeImage}) => {
  const handlePress = () => {
    if (!imageUri) selectFile();
    else {
      Alert.alert('Delete', 'Are you sure?', [
        {
          text: 'Yes',
          onPress: () => onChangeImage(null),
        },
        {
          text: 'No',
        },
      ]);
    }
  };

  const selectFile = () => {
    let options = {
      mediaType: 'photo',
      quality: 0.5,
    };
    launchImageLibrary(options, res => {
      console.log('Response = ', res);
      //console.log(res.assets[0].uri);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.errorMessage) {
        console.log('ImagePicker Error: ', res.errorMessage);
      } else {
        let source = res;
        onChangeImage(res.assets[0].uri);
      }
    });
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.cameraContainer}>
          {imageUri ? (
            <Image source={{uri: imageUri}} style={{height: 100, width: 100}} />
          ) : (
            <Image source={icons.camera} style={{height: 40, width: 40}} />
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  cameraContainer: {
    height: 100,
    width: 100,
    margin: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: colors.light,
  },
});

export default ImageInput;

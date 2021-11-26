import React, {useRef} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import ImageInput from '../Device-Native-Features/ImageInput';

const ImageInputList = ({imageUris = [], RemoveUri, AddUri}) => {
  const scrollRef = useRef();
  return (
    <View>
      <ScrollView
        ref={scrollRef}
        horizontal
        onContentSizeChange={() => scrollRef.current.scrollToEnd()}>
        <View style={styles.container}>
          {imageUris.map(uri => (
            <ImageInput
              key={uri}
              imageUri={uri}
              onChangeImage={() => RemoveUri(uri)}
            />
          ))}
          <ImageInput onChangeImage={uri => AddUri(uri)} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default ImageInputList;

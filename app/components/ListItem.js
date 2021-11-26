import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
  Animated,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import {colors, icons} from '../constants';
import AppText from './AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';

// const renderLeftActions = onPressForDelete => {
//   // const trans = dragX.interpolate({
//   //   inputRange: [0, 0, 0, 0],
//   //   outputRange: [-0, 100, 0, 1],
//   // });
//   return (
//     //<RectButton onPress={this.close}>
//     <View
//       style={[
//         styles.deleteTile,
//         // {
//         //   transform: [{translateX: trans}],
//         // },
//       ]}>
//       <TouchableWithoutFeedback onPress={onPressForDelete}>
//         <Text style={{color: 'white', fontSize: 20, fontWeight: '500'}}>
//           Delete
//         </Text>
//       </TouchableWithoutFeedback>
//     </View>
//     //</RectButton>
//   );
// };

const ListItem = ({
  image,
  title,
  subtitle,
  IconComponent,
  onPress,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.sellerContainer}>
          {IconComponent}
          {image && <Image source={image} style={styles.image} />}
          <View style={styles.sellerDetailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subtitle && (
              <AppText style={styles.subtitle} numberOfLines={2}>
                {subtitle}
              </AppText>
            )}
          </View>
          <Image source={icons.arrowRight} style={styles.arrowicon} />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  sellerContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  image: {
    borderRadius: 35,
    height: 70,
    width: 70,
  },
  sellerDetailsContainer: {
    flexDirection: 'column',
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontWeight: '500',
  },
  subtitle: {
    color: 'gray',
    marginTop: 3,
  },
  deleteTile: {
    backgroundColor: colors.danger,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  delImage: {
    backgroundColor: 'red',
  },
  arrowicon: {
    height: 15,
    width: 15,
    alignSelf: 'center',
  },
});

export default ListItem;

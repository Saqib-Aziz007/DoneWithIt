import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Icon from '../../components/Icon';
import ListItem from '../../components/ListItem';
import ListItemSeparator from '../../components/ListItemSeparator';
import {colors, icons, Images, menuItems, users} from '../../constants';

const Account = () => {
  return (
    <View>
      <View style={styles.container}>
        <ListItem
          title={users[0].username}
          subtitle={users[0].email}
          image={Images.redlogo}
        />
      </View>
      <View style={styles.FlatListcontainer}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => {
            menuItem.id.toString();
          }}
          renderItem={({item}) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  iconImage={item.icon.icon}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <ListItem
        title={'Log Out'}
        IconComponent={<Icon iconImage={icons.logout} backgroundColor="gold" />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  FlatListcontainer: {
    backgroundColor: colors.light,
    marginVertical: 25,
  },
  container: {backgroundColor: 'white'},
});
export default Account;

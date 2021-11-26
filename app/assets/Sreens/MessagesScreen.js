import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import ListItem from '../../components/ListItem';
import ListItemDeleteAction from '../../components/ListItemDeleteAction';
import ListItemSeparator from '../../components/ListItemSeparator';
import {colors, inititalmessages} from '../../constants';

const MessagesScreen = () => {
  const [messages, setmessages] = useState(inititalmessages);
  const [refreshing, setrefreshing] = useState(false);
  const handleDelete = message => {
    // console.log(message);
    // const newmessages = messages.filter(item => item.id !== message.id);
    // console.log(newmessages);
    setmessages(messages.filter(item => item.id !== message.id));
  };

  return (
    <FlatList
      data={messages}
      keyExtractor={message => message.id}
      renderItem={({item}) => (
        <ListItem
          image={item.image}
          title={item.title}
          subtitle={item.description}
          onPress={() => console.warn('pressed', item)}
          renderRightActions={() => (
            <ListItemDeleteAction onPress={() => handleDelete(item)} />
          )}
        />
      )}
      ItemSeparatorComponent={ListItemSeparator}
      refreshing={refreshing}
      onRefresh={() => setmessages([inititalmessages[1]])}
    />
  );
};

export default MessagesScreen;

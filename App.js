import React, {useState} from 'react';
import {
  Button,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import ListingDetailsScreen from './app/assets/Sreens/ListingDetailsScreen';
import MessagesScreen from './app/assets/Sreens/MessagesScreen';
import ViewImageScreen from './app/assets/Sreens/ViewImageScreen';
import WelcomScreen from './app/assets/Sreens/WelcomScreen';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListItemDeleteAction from './app/components/ListItemDeleteAction';
import AppleStyleSwipeableRow from './app/components/gestureHandler';
import Icon from './app/components/Icon';
import {colors, icons, categories} from './app/constants';
import ListItem from './app/components/ListItem';
import Account from './app/assets/Sreens/Account';
import ListingsScreen from './app/assets/Sreens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/assets/Sreens/LoginScreen';
import ListEditingScreen from './app/assets/Sreens/ListEditingScreen';
import ImageInput from './app/Device-Native-Features/ImageInput';
import ImageInputList from './app/components/ImageInputList';

const App = () => {
  return <ListEditingScreen />;
};
export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  FlatList,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import ContactsScreen from './src/screen/ContactsScreen';

import CallingScreen from './src/screen/CallingScreen';
import IncomingCallScreen from './src/screen/IncomingCallScreen';
import CallScreen from './src/screen/CallScreen';
const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      {/* <ContactsScreen/> */}
      {/* <CallingScreen/> */}
      {/* <IncomingCallScreen/> */}
  
      <CallScreen/>
    </SafeAreaView>
  );
};



export default App;

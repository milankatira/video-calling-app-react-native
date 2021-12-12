/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {contacts} from './assets/data/contacts.json';
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

const App = () => {
 // const contacts = ['milan', 'milan', 'milan'];

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.page}>
        <FlatList
          data={contacts}
          renderItem={({item}) => (
            <Text style={styles.contactName}>{item}</Text>
          )}
          ItemSeparatorComponent={()=> <View style={styles.separator}/>}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 15,
  },
  contactName: {
    fontSize:16,
    marginVertical:5,
  },
  separator:{
    width:'100%',
    height:1,
    backgroundColor:'#f0f0f0',
  }
});

export default App;

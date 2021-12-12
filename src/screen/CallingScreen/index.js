import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CallActionBox from '../CallActionBox';

const index = () => {
  return (
    <View style={styles.page}>
      <View style={styles.cameraPreview}>
        <Text style={styles.name}>calling</Text>
        <Text style={styles.ringing}>ringing +9172838955</Text>
      </View>
      <CallActionBox />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  page: {
    height: '100%',
    backgroundColor: '#7d4e80',
  },
  cameraPreview: {
    backgroundColor: '#7d4e80',
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15,
  },
  ringing: {
    fontSize: 20,
    color: 'white',
  },

});

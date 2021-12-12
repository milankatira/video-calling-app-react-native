import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const index = () => {
  return (
    <View style={styles.page}>
      <View style={styles.cameraPreview}>
        <Text style={styles.name}>calling</Text>
        <Text style={styles.ringing}>ringing +9172838955</Text>
      </View>
      <View style={styles.ButtonsContainer}>
        <View style={styles.iconButton}>
          <Ionicons name="ios-camera-reverse" size={30} color={'white'} />
        </View>

        <View style={styles.iconButton}>
          <MaterialIcons name="camera-off" size={30} color={'white'} />
        </View>

        <View style={styles.iconButton}>
          <MaterialIcons name="microphone-off" size={30} color={'white'} />
        </View>

        <View style={[styles.iconButton, {backgroundColor:"red"}]}>
          <MaterialIcons name="phone-hangup" size={30} color={'white'} />
        </View>
      </View>
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

  ButtonsContainer: {
    backgroundColor: '#333333',
    padding: 20,
    paddingBottom:40,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: '100%',
    marginTop: 'auto',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  iconButton: {
    backgroundColor: '#4a4a4a',
    padding: 15,
    borderRadius: 50,
  },
});

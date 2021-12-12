import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Pressable} from 'react-native';
import bg from '../../../assets/images/ios_bg.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
const IncomingCallScreen = () => {

  const onAccept = () => {
    console.warn('Accept')
  }

  const onDecline=()=>{
    console.warn('Decline')
  }
  return (
    <View style={styles.root}>
      <ImageBackground source={bg} style={styles.bg} resizeMode="cover">
        <Text style={styles.name}>calling</Text>
        <Text style={styles.ringing}>ringing +9172838955</Text>

        <View style={[styles.row, {marginTop: 'auto'}]}>
          <View style={styles.iconsContainer}>
            <Ionicons name="alarm" color="white" size={30} />
            <Text style={styles.iconText}>Remind me</Text>
          </View>
          <View style={styles.iconsContainer}>
            <Entypo name="message" color="white" size={30} />
            <Text style={styles.iconText}>Message</Text>
          </View>
        </View>

        <View style={styles.row}>
          <Pressable onPress={onDecline} style={styles.iconsContainer}>
            <View style={styles.iconsButtonContainer}>
              <Feather name="x" color="white" size={40} />
            </View>
            <Text style={styles.iconText}>Decline</Text>
          </Pressable>

          <Pressable onPress={onAccept}  style={styles.iconsContainer}>
            <View
              style={[
                styles.iconsButtonContainer,
                {backgroundColor: '#2e7bff'},
              ]}>
              <Feather name="check" color="white" size={40} />
            </View>
            <Text style={styles.iconText}>Accept</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default IncomingCallScreen;

const styles = StyleSheet.create({
  root: {
    height: '100%',
  },
  name: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 100,
    marginBottom: 15,
  },
  ringing: {
    fontSize: 20,
    color: 'white',
  },
  bg: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  iconsContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  iconText: {
    color: 'white',
    marginTop: 10,
  },
  iconsButtonContainer: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 50,
    margin: 10,
  },
});

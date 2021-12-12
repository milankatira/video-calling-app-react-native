import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CallActionBox from '../CallActionBox';

const CallScreen = () => {
  return (
    <View style={styles.root}>
      <View style={styles.cameraPreview} />
      <CallActionBox />
    </View>
  );
};

export default CallScreen;

const styles = StyleSheet.create({
  root: {
    height:'100%',
    backgroundColor: '#fff',
  },
  cameraPreview: {
    width: 100,
    height: 100,
    backgroundColor: '#ffff6e',
    position:'absolute',
    right:10,
    top:100,
    borderRadius:10,
  },
});

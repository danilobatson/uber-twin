import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { Map } from '../components';

const MapScreen = () => {
  return (
    <View>
      <Text>Here is the map stuff...</Text>
      <Map />
      <View style={tw`h-1/2`}></View>
      <View style={tw`h-1/2`}></View>
    </View>
  );
};

export default MapScreen;


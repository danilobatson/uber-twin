import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectNavState } from '../store/slices/navSlice';

const NavigateCard = () => {
  const { origin } = useSelector(selectNavState);
  return (
    <View>
      <Text>Navigate Card</Text>
    </View>
  );
};

export default NavigateCard;

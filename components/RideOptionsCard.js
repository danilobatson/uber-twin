import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { selectNavState } from '../store/slices/navSlice';

const RideOptionsCard = () => {
  const { origin } = useSelector(selectNavState);
  return (
    <View>
      <Text>Ride Options Card</Text>
    </View>
  );
};

export default RideOptionsCard;

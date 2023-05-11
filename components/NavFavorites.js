import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../store/slices/navSlice';

const data = [
  {
    id: '123',
    icon: 'home',
    location: 'Home',
    destination: '2nd Street, Long Beach, CA, USA',
    geometry: {
      location: { lat: 33.7616566, lng: -118.1379421 },
    },
  },
  {
    id: '456',
    icon: 'briefcase',
    location: 'Work',
    destination: 'Main Street, Santa Monica, Los Angeles, CA, USA',
    geometry: {
      location: { lat: 34.0024546, lng: -118.484051 },
    },
  },
];
const NavFavorites = ({ nav }) => {
  const dispatch = useDispatch();

  const callDispatch = (geometry, destination) => {
    
    nav === 'destination' &&
      dispatch(
        setDestination({
          location: geometry.location,
          description: destination,
        })
      );

    nav === 'origin' &&
      dispatch(
        setOrigin({
          location: geometry.location,
          description: destination,
        })
      );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
      renderItem={({ item: { location, destination, icon, geometry } }) => (
        <TouchableOpacity
          style={tw`flex-row items-center p-5`}
          onPress={() => {
            callDispatch(geometry, destination);
          }}
        >
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type='ionicon'
            color='white'
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorites;

const styles = StyleSheet.create({});

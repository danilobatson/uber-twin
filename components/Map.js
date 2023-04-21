import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectNavState } from '../store/slices/navSlice';

const Map = () => {
  const { origin } = useSelector(selectNavState);
  return (
    <View>
      <MapView
        style={tw`h-1/2`}
        mapType='mutedStandard'
        initialRegion={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        {origin?.location && (
          <Marker
            coordinate={{
              latitude: origin.location.lat,
              longitude: origin.location.lng,
            }}
            title='Origin'
            description={origin.description}
            identifier='origin'
          />
        )}
      </MapView>
    </View>
  );
};

export default Map;

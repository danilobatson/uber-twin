import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from '@env';
import { useDispatch, useSelector } from 'react-redux';
import {
  setOrigin,
  selectNavState,
  setDestination,
} from '../store/slices/navSlice';

const GoogleAutoComplete = () => {
  const dispatch = useDispatch();
  const { origin, destination, travelTimeInformation } =
    useSelector(selectNavState);
  console.log('origin', origin);

  return (
    <GooglePlacesAutocomplete
      placeholder='Where From?'
      nearbyPlacesAPI='GooglePlacesSearch'
      enablePoweredByContainer={false}
      minLength={2}
      returnKeyType={'search'}
      fetchDetails={true}
      onPress={(data, details = null) => {
        console.log(data, details);
        dispatch(
          setOrigin({
            location: details.geometry.location,
            description: data.description,
          })
        );
        dispatch(setDestination(null));
        console.log('origin', origin);
      }}
      debounce={400}
      styles={{
        container: {
          flex: 0,
        },
        textInput: {
          fontSize: 18,
        },
      }}
      query={{
        key: GOOGLE_MAPS_API_KEY,
        language: 'en',
      }}
    />
  );
};

export default GoogleAutoComplete;

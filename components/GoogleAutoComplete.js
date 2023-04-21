import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from '@env';

const GoogleAutoComplete = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Where From?'
      nearbyPlacesAPI='GooglePlacesSearch'
      debounce={400}
      styles={{
        container: {
          flex: 0,
        },
        textInput: {
          fontSize: 18,
        },
      }}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: GOOGLE_MAPS_API_KEY,
        language: 'en',
      }}
    />
  );
};

export default GoogleAutoComplete;
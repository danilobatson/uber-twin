import { StyleSheet, Text, View } from 'react-native';
import React, { useRef, useEffect } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from '@env';
import { useDispatch, useSelector } from 'react-redux';
import {
  setOrigin,
  selectNavState,
  setDestination,
} from '../store/slices/navSlice';
import { setAddress } from '../helper';

const GoogleAutoComplete = () => {
  const dispatch = useDispatch();
  const { origin, destination, travelTimeInformation } =
    useSelector(selectNavState);

  const homeScreenRef = useRef();

  useEffect(() => {
    if (!origin) return;
    setAddress(homeScreenRef, origin.description);
  }, [origin]);

  return (
    <GooglePlacesAutocomplete
      ref={homeScreenRef}
      placeholder='Where From?'
      nearbyPlacesAPI='GooglePlacesSearch'
      enablePoweredByContainer={false}
      minLength={2}
      returnKeyType={'search'}
      fetchDetails={true}
      onPress={(data, details = null) => {
        dispatch(
          setOrigin({
            location: details.geometry.location,
            description: data.description,
          })
        );
        dispatch(setDestination(null));
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

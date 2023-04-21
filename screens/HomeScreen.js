import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { NavOptions, GoogleAutoComplete } from '../components';
// import { setOrigin, selectNavState } from '../store/slices/navSlice';
// import { useDispatch, useSelector } from 'react-redux';


const HomeScreen = () => {
  //   const dispatch = useDispatch();
  //   const { origin, destination, travelTimeInformation } = useSelector(selectNavState);

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          accessibilityLabel='Uber Logo'
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png',
          }}
          style={{ width: 100, height: 100, resizeMode: 'contain' }}
        />
        <GoogleAutoComplete />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

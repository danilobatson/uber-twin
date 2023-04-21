import React from 'react';
import renderer from 'react-test-renderer';
import {
  render,
  screen,
  waitFor,
  fireEvent,
} from '@testing-library/react-native';

import { Provider } from 'react-redux';
import store from '../../store';
import navReducer, {
  setOrigin,
  selectNavState,
  setDestination,
  setTravelTimeInformation,
  navSlice,
} from '../../store/slices/navSlice';

import HomeScreen from '../HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { NavOptions } from '../../components';

describe('<HomeScreen />', () => {
  beforeEach(async () => {
    await waitFor(async () =>
      render(
        <Provider store={store}>
          <NavigationContainer>
            <HomeScreen />
          </NavigationContainer>
        </Provider>
      )
    );
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <NavigationContainer>
            <HomeScreen />
          </NavigationContainer>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Uber logo has accessible label', () => {
    expect(screen.getByLabelText('Uber Logo')).toBeTruthy();
  });
  it('Right arrow has accessible label', () => {
    expect(screen.getAllByLabelText('Right Arrow')).toHaveLength(2);
  });
  it('Card Image has accessible label', () => {
    expect(screen.getAllByLabelText('Card Image')).toHaveLength(2);
  });
});

describe('Redux for navReducer', () => {
  test('should return initial nav state', () => {
    expect(selectNavState(store.getState())).toEqual({
      origin: null,
      destination: null,
      travelTimeInformation: null,
    });
  });

  test('should update state correctly', async () => {
    let updatedState = navReducer(undefined, setOrigin('testOrigin'));
    updatedState = navReducer(updatedState, setDestination('testDestination'));
    updatedState = navReducer(
      updatedState,
      setTravelTimeInformation('testTravelTimeInformation')
    );
    expect(updatedState).toEqual({
      origin: 'testOrigin',
      destination: 'testDestination',
      travelTimeInformation: 'testTravelTimeInformation',
    });
  });
});

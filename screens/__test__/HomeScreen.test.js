import React from 'react';
import renderer from 'react-test-renderer';

import { render, screen, waitFor } from '@testing-library/react-native';

import HomeScreen from '../HomeScreen';
import { NavigationContainer } from '@react-navigation/native';

describe('<HomeScreen />', () => {
  beforeEach(async () => {
    await waitFor(async () =>
      render(
        <NavigationContainer>
          <HomeScreen />
        </NavigationContainer>
      )
    );
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <NavigationContainer>
          <HomeScreen />
        </NavigationContainer>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Uber logo has accessible label', () => {
    expect(screen.getByLabelText('Uber Logo')).toBeTruthy();
  });
});

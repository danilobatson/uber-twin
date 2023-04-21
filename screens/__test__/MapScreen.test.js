import React from 'react';
import renderer from 'react-test-renderer';

import { render, screen } from '@testing-library/react-native';

import MapScreen from '../MapScreen';
import { Provider } from 'react-redux';
import store from '../../store';

describe('<MapScreen />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MapScreen />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
import React from 'react';
import renderer from 'react-test-renderer';

import { render, screen } from '@testing-library/react-native';

import MapScreen from '../MapScreen';
import { before, beforeEach } from 'node:test';

describe('<MapScreen />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<MapScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
 
import React from 'react';
import renderer from 'react-test-renderer';

import { render, screen } from '@testing-library/react-native';

import HomeScreen from '../HomeScreen';
import { before, beforeEach } from 'node:test';

describe('<HomeScreen />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HomeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Uber logo has accessible label', () => {
    render(<HomeScreen />);
    expect(screen.getByLabelText('Uber Logo')).toBeTruthy();
  });
});

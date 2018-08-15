import React from 'react';
import renderer from 'react-test-renderer';

import MainScreen from '../MainScreen';
import { withStore } from '../../utils/testHelpers';

it('renders correctly', () => {
  const tree = renderer
    .create(withStore(<MainScreen />))
    .toJSON();
  expect(tree).toMatchSnapshot();
});

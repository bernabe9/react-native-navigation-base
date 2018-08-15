import React from 'react';
import renderer from 'react-test-renderer';

import LoginScreen from '../LoginScreen';
import { withStore } from '../../utils/testHelpers';

it('renders correctly', () => {
  const tree = renderer
    .create(withStore(<LoginScreen />))
    .toJSON();
  expect(tree).toMatchSnapshot();
});

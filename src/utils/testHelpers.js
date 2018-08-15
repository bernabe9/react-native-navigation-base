import React from 'react';
import { Provider } from 'react-redux';
import Immutable from 'immutable';

import configureStore from '../store/configureStore';

const defaultStore = configureStore(Immutable.Map());

export const withStore = (WrappedComponent, store = defaultStore) => (
  <Provider store={store}>
    {WrappedComponent}
  </Provider>
);

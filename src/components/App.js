import React from 'react';
import { Provider } from 'react-redux';
import Immutable from 'immutable';
import { sessionService } from 'redux-react-native-session';

import configureStore from '../store/configureStore';
import Navigation from '../navigation/Navigation';

const store = configureStore(Immutable.Map());
sessionService.initSessionService(store);

const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default App;

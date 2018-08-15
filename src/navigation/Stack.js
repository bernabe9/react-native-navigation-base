import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../containers/LoginScreen';

const Stack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
  }
);

export default Stack;

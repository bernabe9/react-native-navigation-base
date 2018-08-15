import { createBottomTabNavigator } from 'react-navigation';

import MainScreen from '../containers/MainScreen';

const Tabs = createBottomTabNavigator(
  {
    Home: {
      screen: MainScreen,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
  }
);

export default Tabs;

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './view/LoginScreen';
import HomeScreen from './view/HomeScreen';
import ScannerScreen from './view/ScannerScreen';

const RootStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: () => ({
        title: `Login`,
      }),
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        title: `Home`,
      }),
    },
    Scanner: {
      screen: ScannerScreen,
      navigationOptions: () => ({
        title: `Scanner`,
      }),
    },
  },
  {
    initialRouteName: 'Login',
  }
)

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

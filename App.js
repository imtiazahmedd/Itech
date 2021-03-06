import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';
import Login from './App/Login'
import Registration from './App/Registration'
import SignUpScreen from './App/SignUpScreen'


const App = StackNavigator({
    Registration: { screen: Registration },
    Login: { screen: Login },
    SignUpScreen: {screen: SignUpScreen}
})
export default App;

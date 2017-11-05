/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//Dependencies
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

//Screens
import  HomeScreen  from './components/screens/HomeScreen';
import  RushScreen  from './components/screens/RushScreen';
import  ElementScreen  from './components/screens/ElementScreen';
import  DiehardScreen  from './components/screens/DiehardScreen';
import  GladiatorScreen  from './components/screens/GladiatorScreen';
import ShooterScreen from './components/screens/ShooterScreen';
import TrainingdayScreen from'./components/screens/TrainingdayScreen';

const NavigationApp = StackNavigator({
  Home: { screen: HomeScreen }, 
  Rush: {screen: RushScreen},
  Element: {screen: ElementScreen},
  Diehard: {screen: DiehardScreen},
  Gladiator: {screen: GladiatorScreen},
  Shooter: {screen: ShooterScreen},
  Trainingday: {screen: TrainingdayScreen}
});

export default class App extends Component {
  render() {
    return (
     <NavigationApp />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

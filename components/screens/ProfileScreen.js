
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';



export default class ProfileScreen extends Component {
    static navigationOptions = {
      title: 'Profile',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
          <Text onPress= {() => navigate('Home')}>
            Ir al Home
          </Text>
        </View>
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
  

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableHighlight
} from 'react-native';


export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <TouchableHighlight  onPress={() => navigate('Rush') }>
              <Image style={styles.box} source={require('../assets/img/5element.jpg')}/>
          </TouchableHighlight>
        </View>
        <View style={styles.box}>
          <Image style={styles.box} source={require('../assets/img/diehard.jpg')}/>
        </View>
        <View style={styles.box}>
          <Image style={styles.box} source={require('../assets/img/gladiator.jpg')}/>
        </View>
        <View style={styles.box}>
          <Image style={styles.box} source={require('../assets/img/rush.jpg')}/>
        </View>
        <View style={styles.box}>
          <Image style={styles.box} source={require('../assets/img/shooter.jpg')}/>
        </View>
        <View style={styles.box}>
          <Image style={styles.box} source={require('../assets/img/training-day.jpg')}/>
        </View>
      </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer:{ 
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 2,
  },
  box: {
    margin: 2,
    height: 200,
    width: Dimensions.get('window').width / 2 -6,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
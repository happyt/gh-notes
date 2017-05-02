import React, { Component } from 'react';
import { AppRegistry, NavigatorIOS, StyleSheet, Text, View } from 'react-native';

var Main = require('./App/Components/Main');

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#123456'
  }
})

class awesome extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Note taker',
          component: Main
        }} 
        />
    );
  }
}

AppRegistry.registerComponent('awesome', () => awesome);
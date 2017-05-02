import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

class awesome extends Component {
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}

AppRegistry.registerComponent('awesome', () => awesome);
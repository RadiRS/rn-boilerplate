import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ButtonLabel from '../components/common/button/ButtonLabel';

class WelcomeScreen extends Component {
  render() {
    return (
      <View>
        <ButtonLabel block label="Wellcome" />
      </View>
    );
  }
}

export default WelcomeScreen;

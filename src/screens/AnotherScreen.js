import React, { Component } from 'react';
import { Text, View } from 'react-native';
import NavigationServices from '../navigator/NavigationServices';
import ButtonLabel from '../components/common/button/ButtonLabel';

class AnotherScreen extends Component {
  render() {
    return (
      <View>
        <ButtonLabel
          onPress={() => NavigationServices.navigate('Welcome')}
          block
          label="Go to welcome screen"
        />
      </View>
    );
  }
}

export default AnotherScreen;

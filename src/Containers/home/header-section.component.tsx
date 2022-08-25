import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const HeaderSection = () => {
  return (
    <View style={styles.container}>
      <Text>Header Section</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'lightblue',
    borderRadius: 20,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HeaderSection;

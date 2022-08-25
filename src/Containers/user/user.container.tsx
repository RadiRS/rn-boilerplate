import { View, Text, StyleSheet } from 'react-native';
import React, { FC } from 'react';

const UserContainer: FC = () => {
  return (
    <View style={styles.container}>
      <Text>User Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default UserContainer;

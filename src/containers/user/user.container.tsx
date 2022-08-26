import { View, Text, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import { useTheme } from '@/hooks';

const UserContainer: FC = () => {
  const { Fonts } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={Fonts.titleSmall}>User Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default UserContainer;

import { View, StyleSheet, NativeModules } from 'react-native';
import React from 'react';

import { useTheme } from '@/hooks';
import { Text } from '@/components/ui';
import { ThemeVariables } from '@/config/theme/theme';

const HeaderSection = () => {
  const themes = useTheme();
  const extStyle = styles(themes);
  const env = NativeModules.RNConfig.env;

  return (
    <View style={extStyle.container}>
      <Text variant="title-regular" appearance="alternative">
        Header Section
      </Text>
      <Text variant="title-small" appearance="alternative">
        Environment: {env}
      </Text>
    </View>
  );
};

const styles = (themes: ThemeVariables) =>
  StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: themes.Colors.primary,
      borderRadius: 20,
      height: 200,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default HeaderSection;

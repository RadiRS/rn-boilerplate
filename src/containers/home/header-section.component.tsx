import { View, StyleSheet } from 'react-native';
import React from 'react';

import Config from '@/config/env';
import { useTheme } from '@/hooks';
import { Text } from '@/components/ui';
import { ThemeVariables } from '@/types/theme';

const HeaderSection = () => {
  const themes = useTheme();
  const extStyle = styles(themes);

  return (
    <View style={extStyle.container}>
      <Text variant="title-regular" appearance="alternative">
        Header Section
      </Text>
      <Text variant="title-small" appearance="alternative">
        Environment: {Config.ENV}
      </Text>
      <Text variant="small" appearance="alternative">
        API_URL: {Config.API_URL}
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

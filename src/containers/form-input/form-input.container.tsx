import React from 'react';
import { StyleSheet } from 'react-native';

import { ScrollView, SafeArea, Input } from '@/components/ui';
import { ThemeVariables } from '@/config/theme/theme';
import { useTheme } from '@/hooks';

const FormInputContainer = () => {
  const themes = useTheme();
  const extStyles = styles(themes);

  return (
    <SafeArea>
      <ScrollView contentContainerStyle={extStyles.scrollContainer}>
        <Input
          label="Name"
          placeholder="Type your name"
          style={themes.Gutters.regularBMargin}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Type your password"
        />
      </ScrollView>
    </SafeArea>
  );
};

const styles = (themes: ThemeVariables) =>
  StyleSheet.create({
    scrollContainer: {
      padding: themes.MetricsSizes.regular,
    },
  });

export default FormInputContainer;

import React from 'react';
import { StyleSheet } from 'react-native';

import { ScrollView, SafeArea, Input } from '@/components/ui';
import { ThemeVariables } from '@/types/theme';
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
          label="Email"
          type="email"
          placeholder="Type your email"
          style={themes.Gutters.regularBMargin}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Type your password"
          style={themes.Gutters.regularBMargin}
        />
        <Input
          label="About you"
          type="textarea"
          placeholder="Type about your self"
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

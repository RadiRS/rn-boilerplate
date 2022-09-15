import React from 'react';

import { ScrollView, SafeArea, Text } from '@/components/ui';
import { StyleSheet } from 'react-native';
import { ThemeVariables } from '@/config/theme/theme';
import { useTheme } from '@/hooks';

const FormInputContainer = () => {
  const themes = useTheme();
  const extStyles = styles(themes);

  return (
    <SafeArea>
      <ScrollView contentContainerStyle={extStyles.scrollContainer}>
        <Text>Form Input</Text>
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

import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ViewStyle,
  TextInputProps,
} from 'react-native';

import { Text } from '@/components/ui';
import { useTheme } from '@/hooks';
import { ThemeVariables } from '@/config/theme/theme';

interface InputProps extends TextInputProps {
  name?: string;
  label?: string;
  placeholder?: string;
  error?: string;
  style?: ViewStyle;
  type?: 'password' | undefined;
}

const Input = ({ style, label, type, ...props }: InputProps) => {
  const themes = useTheme();
  const extStyle = styles(themes);

  return (
    <View style={[extStyle.container, style]}>
      {label && <Text style={themes.Gutters.smallBMargin}>{label}</Text>}
      <TextInput
        {...props}
        autoCapitalize="none"
        style={extStyle.input}
        secureTextEntry={type === 'password'}
      />
    </View>
  );
};

const styles = (themes: ThemeVariables) =>
  StyleSheet.create({
    container: {},
    input: {
      backgroundColor: themes.Colors.inputBackground,
      borderWidth: 1,
      padding: themes.MetricsSizes.regular,
      fontSize: themes.FontSize.regular,
      borderRadius: themes.MetricsSizes.border,
    },
  });

export default Input;

import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ViewStyle,
  TextInputProps,
  TextStyle,
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
  inputStyle?: TextStyle;
  type?: 'password' | 'textarea' | 'email' | undefined;
}

const Input = ({
  style,
  label,
  type,
  inputStyle,
  keyboardType,
  ...props
}: InputProps) => {
  const themes = useTheme();
  const extStyle = styles(themes);

  const textareaType = type === 'textarea' && {
    multiline: true,
    numberOfLines: 4,
    style: {
      ...extStyle.input,
      ...extStyle.textareaInput,
    } as TextStyle,
  };

  return (
    <View style={[extStyle.container, style]}>
      {label && <Text style={themes.Gutters.smallBMargin}>{label}</Text>}
      <TextInput
        autoCapitalize="none"
        style={[extStyle.input, inputStyle]}
        secureTextEntry={type === 'password'}
        keyboardType={type === 'email' ? 'email-address' : keyboardType}
        {...textareaType}
        {...props}
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
      borderColor: '#AFB1B6',
      padding: themes.MetricsSizes.regular,
      fontSize: themes.FontSize.regular,
      borderRadius: themes.MetricsSizes.border,
    },
    textareaInput: {
      paddingTop: themes.MetricsSizes.regular,
      paddingBottom: themes.MetricsSizes.regular,
      height: 120,
      textAlignVertical: 'top',
    },
  });

export default Input;

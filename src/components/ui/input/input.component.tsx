import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ViewStyle,
  TextInputProps,
  TextStyle,
} from 'react-native';

import { useTheme } from '@/hooks';
import { Text } from '@/components/ui';
import { ThemeVariables } from '@/types/theme';

import { InputTypes, InputVariants } from './types';

interface InputProps extends TextInputProps {
  name?: string;
  label?: string;
  placeholder?: string;
  error?: string;
  style?: ViewStyle;
  inputStyle?: TextStyle;
  type?: InputTypes;
  variant?: InputVariants;
}

const Input = ({
  style,
  label,
  type,
  inputStyle,
  keyboardType,
  error,
  ...props
}: InputProps) => {
  const themes = useTheme();
  const extStyle = styles(themes);
  const isError = !!error;

  const textareaProps = type === 'textarea' && {
    multiline: true,
    numberOfLines: 4,
    style: {
      ...extStyle.input,
      ...extStyle.textareaInput,
    } as TextStyle,
  };

  const errorStyle = isError && extStyle.error;

  return (
    <View style={[extStyle.container, style]}>
      {label && <Text style={themes.Gutters.smallBMargin}>{label}</Text>}
      <TextInput
        autoCapitalize="none"
        secureTextEntry={type === 'password'}
        keyboardType={type === 'email' ? 'email-address' : keyboardType}
        style={[extStyle.input, inputStyle, errorStyle]}
        {...textareaProps}
        {...props}
      />
      {isError && (
        <Text status="error" variant="small">
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = (themes: ThemeVariables) =>
  StyleSheet.create({
    container: {},
    input: {
      backgroundColor: themes.Colors.inputBackground,
      borderWidth: 1,
      borderColor: themes.Colors.border,
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
    error: {
      borderColor: themes.Colors.error,
    },
  });

export default Input;

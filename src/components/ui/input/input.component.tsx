import React, { forwardRef, LegacyRef } from 'react';
import { View, TextInput, TextStyle } from 'react-native';

import { useTheme } from '@/hooks';
import { Text } from '@/components/ui';

import styles from './input.styles';
import { InputProps } from './types';

const Input = forwardRef(
  (
    {
      style,
      label,
      type,
      inputStyle,
      keyboardType,
      error,
      ...props
    }: InputProps,
    ref: LegacyRef<TextInput>,
  ) => {
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
          ref={ref}
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
  },
);

export default Input;

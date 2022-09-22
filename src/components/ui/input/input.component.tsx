import React, { forwardRef, Ref } from 'react';
import { View, TextStyle, TextInput } from 'react-native';
import MaskInput from 'react-native-mask-input';

import { MasksHelper } from '@/helpers';
import { useTheme } from '@/hooks';
import { Text } from '@/components/ui';

import { InputProps } from './types';
import styles from './input.styles';

const Input = forwardRef(
  (
    {
      style,
      label,
      type = 'text',
      inputStyle,
      keyboardType,
      error,
      mask,
      ...props
    }: InputProps,
    ref: Ref<TextInput>,
  ) => {
    const themes = useTheme();
    const extStyle = styles(themes);
    const isError = !!error;
    const isMask = type === 'currency' || !!mask?.length;

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

        {/* Normal Input */}
        {!isMask && (
          <TextInput
            ref={ref}
            autoCapitalize="none"
            secureTextEntry={type === 'password'}
            keyboardType={type === 'email' ? 'email-address' : keyboardType}
            placeholderTextColor={themes.Colors.hint}
            style={[extStyle.input, inputStyle, errorStyle]}
            {...textareaProps}
            {...props}
          />
        )}

        {/* Normal Input Masking */}
        {isMask && type !== 'currency' && (
          <MaskInput
            {...props}
            ref={ref}
            mask={mask}
            keyboardType={keyboardType}
            placeholderTextColor={themes.Colors.hint}
            style={[extStyle.input, inputStyle, errorStyle]}
            value={props.value || ''}
            onChangeText={(_, rawText: string) => {
              if (!props.onChangeText) {
                return;
              }

              props.onChangeText(rawText);
            }}
          />
        )}

        {/* Currency Input */}
        {isMask && type === 'currency' && (
          <MaskInput
            {...props}
            ref={ref}
            keyboardType="number-pad"
            value={props.value ?? ''}
            placeholderTextColor={themes.Colors.hint}
            style={[extStyle.input, inputStyle, errorStyle]}
            placeholder={props.placeholder}
            mask={MasksHelper.ID_CURRENCY}
            onChangeText={(_, rawText: string) => {
              if (!props.onChangeText) {
                return;
              }

              props.onChangeText(rawText);
            }}
          />
        )}

        {isError && (
          <Text status="error" variant="small" style={extStyle.errorText}>
            {error}
          </Text>
        )}
      </View>
    );
  },
);

export default Input;

import React, { forwardRef, Ref } from 'react';
import { View, TextStyle, TextInput } from 'react-native';
import MaskInput from 'react-native-mask-input';

import { useTheme } from '@/hooks';
import { Text } from '@/components/ui';

import styles from './input.styles';
import { InputProps } from './types';
import { MasksHelper } from '@/helpers';

const Input = forwardRef(
  (
    {
      style,
      label,
      type,
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
            mask={MasksHelper.ID_CURRENCY}
            onChangeText={(_, rawText: string) => {
              if (!props.onChangeText) {
                return;
              }

              props.onChangeText(rawText);
            }}
            style={[extStyle.input, inputStyle, errorStyle]}
            keyboardType="number-pad"
            value={props.value ?? ''}
            placeholder={props.placeholder}
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

import { LegacyRef } from 'react';
import { TextInput, TextInputProps, TextStyle, ViewStyle } from 'react-native';

export type InputTypes = 'password' | 'textarea' | 'email';

export type InputVariants =
  | 'top-label'
  | 'floating-label'
  | 'ifta-label'
  | 'floating-mat-label';

export interface InputProps extends TextInputProps {
  name?: string;
  label?: string;
  placeholder?: string;
  error?: string;
  style?: ViewStyle;
  inputStyle?: TextStyle;
  type?: InputTypes;
  variant?: InputVariants;
  ref?: LegacyRef<TextInput>;
}

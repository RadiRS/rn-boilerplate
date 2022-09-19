import { Ref } from 'react';
import { TextInput, TextInputProps, TextStyle, ViewStyle } from 'react-native';
import { Mask } from 'react-native-mask-input';

export type InputTypes =
  | 'text'
  | 'password'
  | 'textarea'
  | 'email'
  | 'currency';

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
  ref?: Ref<TextInput>;
  mask?: Mask;
}

export const isOfTypeInput = (value: string): value is InputTypes => {
  return ['text', 'password', 'email', 'currency', 'textarea'].includes(value);
};

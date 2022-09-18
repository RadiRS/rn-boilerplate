import { Ref } from 'react';
import { TextInput, TextInputProps, TextStyle, ViewStyle } from 'react-native';
import { Mask } from 'react-native-mask-input';

export type InputTypes = 'password' | 'textarea' | 'email' | 'currency';

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

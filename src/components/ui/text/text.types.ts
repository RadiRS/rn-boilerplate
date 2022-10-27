import { TextProps as RNTextProps } from 'react-native';

export interface TextProps extends RNTextProps {
  variant?: TextVariants;
  appearance?: TextAppearances;
  status?: TextStatus | undefined | null;
  type?: TextTypes;
  align?: TextAlign;
}

export type TextTypes = 'bold' | 'light' | 'italic' | 'regular' | 'semi-bold';

export type TextStatus =
  | 'basic'
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'error'
  | 'disabled'
  | 'control';

export type TextAppearances = 'default' | 'alternative' | 'hint';

export type TextAlign = 'center' | 'left' | 'right';

export type TextVariants =
  | 'small'
  | 'regular'
  | 'large'
  | 'title-small'
  | 'title-regular'
  | 'title-large';

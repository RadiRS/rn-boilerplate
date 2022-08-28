import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';
import React, { FC } from 'react';

import styles from './text.component.styles';
import { useTheme } from '@/hooks';

export interface TextProps extends RNTextProps {
  variant?: TextVariants;
  appearance?: TextAppearance;
  status?: TextStatus;
  style?: TextStyle;
  type?: TextType;
}

const Text: FC<TextProps> = ({ style, ...props }: TextProps) => {
  const theme = useTheme();
  const s = styles({ theme, props });

  return <RNText {...props} style={[s.text, style]} />;
};

export default Text;

export type LiteralUnion<T extends U, U = string> = T | (U & {});

export type TextType = LiteralUnion<
  'bold' | 'light' | 'italic' | 'regular' | 'semi-bold'
>;

export type TextStatus = LiteralUnion<
  'basic' | 'primary' | 'success' | 'info' | 'warning' | 'error' | 'disabled'
>;

export type TextAppearance = LiteralUnion<'default' | 'alternative' | 'hint'>;

export type TextVariants = LiteralUnion<
  | 'small'
  | 'regular'
  | 'large'
  | 'title-small'
  | 'title-regular'
  | 'title-large'
>;

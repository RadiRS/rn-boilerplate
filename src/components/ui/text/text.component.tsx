import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import React, { FC } from 'react';

import { useTheme } from '@/hooks';
import styles from './text.styles';

import {
  TextAppearances,
  TextStatus,
  TextVariants,
  TextTypes,
} from './text.types';

export interface TextProps extends RNTextProps {
  variant?: TextVariants;
  appearance?: TextAppearances;
  status?: TextStatus | undefined | null;
  type?: TextTypes;
}

/**
 * Basic text writing.
 *
 * @property {ReactText | ReactElement<TextProps>} children - String or number to be rendered as text.
 * Also can be ReactElement<TextProps> - nested Text component.
 *
 * @property {string} variant - Can be `small`, `regular`, `large`, `title-small`, `title-regular` or `title-large`.
 * Defaults to *regular*.
 *
 * @property {string} appearance - Can be `default`, `alternative` or `hint`.
 * Use `alternative` for displaying light text on a dark content and vice versa.
 * Use `hint` for giving user a hint on something.
 *
 * @property {string} status - Status of the component.
 * Can be `basic`, `primary`, `success`, `info`, `warning`, `error` or `disabled`.
 * Defaults to *basic*.
 *
 * @property {string} type - Type of the component.
 * Can be `bold`, `light`, `italic`, `semi-bold` or `regular`.
 * Defaults to *regular*.
 *
 * @property {TextProps} ...TextProps - Any props applied to Text component.
 *
 * @overview-example TextStyling
 * Text can be styled with `style` property.
 * In most cases this is redundant, if [custom theme is configured](guides/branding).
 * ```
 *
 * import { Text } from '@/components/ui';
 *
 * <Text style={...}>Place your Text</Text>
 * ```
 */
const Text: FC<TextProps> = ({ style, ...props }: TextProps) => {
  const theme = useTheme();
  const s = styles({ theme, props });

  return <RNText {...props} style={[s.text, style]} />;
};

export default Text;

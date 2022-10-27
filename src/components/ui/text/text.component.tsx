import React from 'react';
import { Text as RNText } from 'react-native';

import { TextProps } from './text.types';
import useStyles from './text.styles';

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
 * ```
 *
 * import { Text } from '@/components/ui';
 *
 * <Text style={...}>Place your Text</Text>
 * ```
 */
const Text: React.FC<TextProps> = ({ style, ...props }: TextProps) => {
  const s = useStyles(props);

  return <RNText {...props} style={[s.text, style]} />;
};

export default Text;

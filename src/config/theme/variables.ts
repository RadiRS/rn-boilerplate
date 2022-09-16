/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

/**
 * Colors
 */
export const Colors = {
  // Example colors:
  transparent: 'rgba(0,0,0,0)',
  background: '#EFEFF0',
  splashBackground: '#212529',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  text: '#212529',
  dark: '#212529',
  textDisabled: '#9C9C9C',
  alternative: '#ffffff',
  primary: '#3A00E5',
  secondary: '#F1F1F1',
  hint: '#AFB1B6',
  info: '#8AC0FF',
  disabled: '#DEDEDE',
  success: '#28a745',
  warning: '#FCCC6F',
  error: '#dc3545',
  border: '#AFB1B6',
};

export const NavigationColors = {
  primary: Colors.primary,
  background: Colors.background,
};

/**
 * FontFamily
 */
export const FontsFamily = {
  regular: 'SourceSansPro-Regular',
  bold: 'SourceSansPro-Bold',
  light: 'SourceSansPro-Light',
  semiBold: 'SourceSansPro-SemiBold',
  italic: 'Lato-Italic',
};
/**
 * FontSize
 */
export const FontSize = {
  tiny: 12,
  small: 13,
  regular: 16,
  regular2: 14,
  large: 32,
  large2: 24,
  large3: 18,
};

/**
 * Metrics Sizes
 */
const tiny = 5; // 10
const small = tiny * 2; // 10
const regular = tiny * 3; // 15
const large = regular * 2; // 30
const border = 8; // 30
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
  border,
};

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
  FontsFamily,
};

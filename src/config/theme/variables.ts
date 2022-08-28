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
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  text: '#212529',
  primary: '#3A00E5',
  secondary: '##EEE5FF',
  hint: '#AFB1B6',
  info: '#8AC0FF',
  disabled: '#9C9C9C',
  success: '#28a745',
  warning: '#FCCC6F',
  error: '#dc3545',
};

export const NavigationColors = {
  primary: Colors.primary,
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
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
};

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
  FontsFamily,
};

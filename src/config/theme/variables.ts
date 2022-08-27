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
  disabled: '#F1F1F1',
  success: '#28a745',
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
};
/**
 * FontSize
 */
export const FontSize = {
  tiny: 12,
  small: 13,
  regular: 16,
  regular2: 14,
  large: 40,
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

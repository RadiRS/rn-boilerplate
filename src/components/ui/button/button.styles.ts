import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { useTheme } from '@/hooks';
import { ButtonProps } from './button.types';

const useStyles = (props: ButtonProps) => {
  const { Colors, Layout, Gutters, MetricsSizes, FontSize, FontsFamily } =
    useTheme();
  const { status, disabled, appearance, size } = props;

  const bSize = 30;

  const base: ViewStyle = {
    ...Layout.center,
    ...Gutters.largeHPadding,
    height: bSize * 2,
    backgroundColor: Colors.primary,
    borderRadius: MetricsSizes.tiny,
  };

  const bs: ViewStyle =
    size === 'small'
      ? { height: bSize }
      : size === 'large'
      ? { height: bSize * 2 }
      : { height: bSize * 1.5 };

  const apr: ViewStyle =
    appearance === 'outlined'
      ? {
          backgroundColor: Colors.transparent,
          borderWidth: 2,
          borderColor: Colors.primary,
        }
      : appearance === 'ghost'
      ? {
          backgroundColor: Colors.transparent,
        }
      : base;

  const sts: ViewStyle =
    status === 'primary'
      ? { backgroundColor: Colors.primary }
      : status === 'info'
      ? { backgroundColor: Colors.info }
      : status === 'success'
      ? { backgroundColor: Colors.success }
      : status === 'warning'
      ? { backgroundColor: Colors.warning }
      : status === 'error'
      ? { backgroundColor: Colors.error }
      : status === 'basic'
      ? { backgroundColor: Colors.secondary }
      : apr;

  const dis: ViewStyle = disabled ? { backgroundColor: Colors.disabled } : sts;

  const fontColor: TextStyle = disabled
    ? { color: Colors.textDisabled }
    : status === 'basic'
    ? { color: Colors.dark }
    : appearance === 'ghost' || appearance === 'outlined'
    ? { color: Colors.primary }
    : { color: Colors.white };

  const fontSize =
    size === 'small'
      ? FontSize.tiny
      : size === 'large'
      ? FontSize.large3
      : FontSize.small;

  return StyleSheet.create({
    btn: {
      ...base,
      ...apr,
      ...sts,
      ...dis,
      ...bs,
    },
    text: {
      fontSize,
      fontFamily: FontsFamily.semiBold,
      ...fontColor,
    },
  });
};

export default useStyles;

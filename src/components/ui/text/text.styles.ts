import { StyleSheet, TextStyle } from 'react-native';

import { ThemeVariables } from '@/types/theme';
import { TextProps } from './text.component';

const styles = ({
  theme,
  props,
}: {
  theme: ThemeVariables;
  props: TextProps;
}) => {
  const { FontsFamily, FontSize, Colors } = theme;
  const { variant, appearance, status, type } = props;

  const base: TextStyle = {
    fontFamily: FontsFamily.regular,
    fontSize: FontSize.regular,
    color: Colors.text,
  };

  const multiply = 1.5;

  const vrn: TextStyle =
    variant === 'small'
      ? { fontSize: FontSize.small }
      : variant === 'large'
      ? { fontSize: FontSize.large }
      : variant === 'title-small'
      ? {
          fontSize: FontSize.small * multiply,
          fontWeight: 'bold',
        }
      : variant === 'title-regular'
      ? {
          fontSize: FontSize.regular * multiply,
          fontWeight: 'bold',
        }
      : variant === 'title-large'
      ? {
          fontSize: FontSize.large * multiply,
          fontWeight: 'bold',
        }
      : { fontSize: FontSize.regular };

  const apr: TextStyle =
    appearance === 'alternative'
      ? { color: Colors.alternative }
      : appearance === 'hint'
      ? { color: Colors.hint }
      : { color: Colors.text };

  const sts: TextStyle =
    status === 'primary'
      ? { color: Colors.primary }
      : status === 'info'
      ? { color: Colors.info }
      : status === 'success'
      ? { color: Colors.success }
      : status === 'warning'
      ? { color: Colors.warning }
      : status === 'error'
      ? { color: Colors.error }
      : status === 'disabled'
      ? { color: Colors.textDisabled }
      : status === 'basic'
      ? { color: Colors.text }
      : status === 'control'
      ? { color: Colors.white }
      : apr;

  const typ: TextStyle =
    type === 'bold'
      ? { fontFamily: FontsFamily.bold }
      : type === 'light'
      ? { fontFamily: FontsFamily.light }
      : type === 'semi-bold'
      ? { fontFamily: FontsFamily.semiBold }
      : type === 'italic'
      ? { fontFamily: FontsFamily.italic }
      : { fontFamily: FontsFamily.regular };

  return StyleSheet.create({
    text: {
      ...base,
      ...vrn,
      ...apr,
      ...sts,
      ...typ,
    },
  });
};

export default styles;

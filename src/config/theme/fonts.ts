/**
 * This file contains all application's style relative to fonts
 */
import { StyleSheet, TextStyle } from 'react-native';
import { ThemeVariables } from '@/types/theme';

export default function ({ FontSize, Colors, FontsFamily }: ThemeVariables) {
  const base: TextStyle = {
    fontFamily: FontsFamily.regular,
  };

  return StyleSheet.create({
    textSmall: {
      ...base,
      fontSize: FontSize.small,
      color: Colors.text,
    },
    textRegular: {
      ...base,
      fontSize: FontSize.regular,
      color: Colors.text,
    },
    textLarge: {
      ...base,
      fontSize: FontSize.large,
      color: Colors.text,
    },
    titleSmall: {
      ...base,
      fontSize: FontSize.small * 2,
      fontWeight: 'bold',
      color: Colors.text,
    },
    titleRegular: {
      ...base,
      fontSize: FontSize.regular * 2,
      fontWeight: 'bold',
      color: Colors.text,
    },
    titleLarge: {
      ...base,
      fontSize: FontSize.large * 2,
      fontWeight: 'bold',
      color: Colors.text,
    },
    textCenter: {
      textAlign: 'center',
    },
    textJustify: {
      textAlign: 'justify',
    },
    textLeft: {
      textAlign: 'left',
    },
    textRight: {
      textAlign: 'right',
    },
  });
}

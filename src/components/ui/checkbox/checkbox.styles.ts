import { StyleSheet } from 'react-native';
import { ThemeVariables } from '@/types/theme';

const style = (
  themes: ThemeVariables,
  isChecked: boolean,
  isError?: boolean,
) => {
  const activeStyle = isChecked && {
    backgroundColor: themes.Colors.primary,
    borderColor: themes.Colors.border,
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkbox: {
      marginRight: themes.MetricsSizes.regular,
      width: 30,
      height: 30,
      borderRadius: 10,
      borderWidth: 3,
      borderColor: isError ? themes.Colors.error : themes.Colors.border,
      backgroundColor: themes.Colors.background,
      ...activeStyle,
    },
  });

  return styles;
};

export default style;

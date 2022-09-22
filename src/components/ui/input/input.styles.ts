import { StyleSheet } from 'react-native';
import { ThemeVariables } from '@/types/theme';

const styles = (themes: ThemeVariables) =>
  StyleSheet.create({
    container: {},
    input: {
      backgroundColor: themes.Colors.inputBackground,
      borderWidth: 1,
      borderColor: themes.Colors.border,
      padding: themes.MetricsSizes.regular,
      fontSize: themes.FontSize.regular,
      borderRadius: themes.MetricsSizes.border,
      color: themes.Colors.text,
    },
    textareaInput: {
      paddingTop: themes.MetricsSizes.regular,
      paddingBottom: themes.MetricsSizes.regular,
      height: 120,
      textAlignVertical: 'top',
    },
    error: {
      borderColor: themes.Colors.error,
    },
    errorText: {
      marginTop: themes.MetricsSizes.tiny,
    },
  });

export default styles;

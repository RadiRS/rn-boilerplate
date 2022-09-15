import {
  SafeAreaView,
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import React, { FC } from 'react';
import { useTheme } from '@/hooks';
import { ThemeVariables } from '@/types/theme';

interface SafeAreaProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
  padder?: boolean;
}

const SafeArea: FC<SafeAreaProps> = ({
  style,
  children,
  padder,
  ...props
}: SafeAreaProps) => {
  const theme = useTheme();
  const s = styles(theme);
  const padding = padder && s.padder;

  return (
    <SafeAreaView style={s.container}>
      <View style={[s.container, padding, style]} {...props}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = (theme: ThemeVariables) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    padder: {
      padding: theme.MetricsSizes.regular,
    },
  });

export default SafeArea;

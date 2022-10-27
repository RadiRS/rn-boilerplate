import React from 'react';
import {
  SafeAreaView,
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

import { useTheme } from '@/hooks';

interface SafeAreaProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
  padder?: boolean;
}

const SafeArea: React.FC<SafeAreaProps> = ({
  style,
  children,
  padder,
  ...props
}: SafeAreaProps) => {
  const s = useStyles();
  const padding = padder && s.padder;

  return (
    <SafeAreaView style={s.container}>
      <View style={[s.container, padding, style]} {...props}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const useStyles = () => {
  const { MetricsSizes } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
    },
    padder: {
      padding: MetricsSizes.regular,
    },
  });
};

export default SafeArea;

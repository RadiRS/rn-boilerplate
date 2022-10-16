import React from 'react';
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleSheet,
  View,
} from 'react-native';

import { useTheme } from '@/hooks';

interface SpinnerProps extends ActivityIndicatorProps {
  isFull?: boolean;
  isVisible?: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({
  color,
  isFull = false,
  isVisible = false,
  ...props
}: SpinnerProps) => {
  const { Colors } = useTheme();

  if (!isVisible) {
    return null;
  }

  if (isFull) {
    return (
      <View style={[StyleSheet.absoluteFill, styles.container]}>
        <ActivityIndicator color={color || Colors.text} {...props} />
      </View>
    );
  }

  return <ActivityIndicator color={color || Colors.text} {...props} />;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

export default Spinner;

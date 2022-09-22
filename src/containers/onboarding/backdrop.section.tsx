import React from 'react';
import { Animated, StyleSheet } from 'react-native';

import { width } from './onboarding.styles';

interface BackdropProps {
  scrollX: Animated.Value;
  data: any[];
}

const Backdrop = ({ scrollX, data }: BackdropProps) => {
  const backgroundColor = scrollX.interpolate({
    inputRange: data.map((_, i) => i * width),
    outputRange: data.map(bg => bg),
  });

  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        {
          backgroundColor,
        },
      ]}
    />
  );
};

export default Backdrop;

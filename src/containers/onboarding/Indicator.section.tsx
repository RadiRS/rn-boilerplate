import React from 'react';
import { Animated, View } from 'react-native';

import styles, { width } from './onboarding.styles';

interface IndicatorProps {
  scrollX: Animated.Value;
  data: any[];
}

const Indicator = ({ scrollX, data }: IndicatorProps) => {
  return (
    <View style={styles.indicatorContainer}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.2, 0.8],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.6, 1, 0.6],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={`indicator-${i}`}
            style={[
              styles.indicator,
              {
                opacity,
                transform: [{ scale }],
              },
            ]}
          />
        );
      })}
    </View>
  );
};

export default Indicator;

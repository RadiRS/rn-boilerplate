import { Text } from '@/components/ui';
import React from 'react';
import { Image, View } from 'react-native';
import { DataItem } from './onboarding.container';

import styles from './onboarding.styles';

interface SliderItemProps {
  item: DataItem;
}

const SliderItem = ({ item }: SliderItemProps) => (
  <View style={styles.sliderItemContainer}>
    <View style={styles.sliderImageContainer}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
    </View>
    <View style={styles.sliderTextContainer}>
      <Text variant="title-regular" status="control" style={styles.sliderTitle}>
        {item.title}
      </Text>
      <Text status="control" type="semi-bold" style={styles.sliderSubtitle}>
        {item.description}
      </Text>
    </View>
  </View>
);

export default SliderItem;

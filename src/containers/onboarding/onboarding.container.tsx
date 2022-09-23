import React, { useRef } from 'react';
import {
  View,
  StatusBar,
  Animated,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

import { AppImage } from '@/assets';
import { useAppDispatch } from '@/store';
import { clearCredentials } from '@/store/auth';
import { navigateAndSimpleReset } from '@/navigators/utils';
import { Button } from '@/components/ui';

import styles, { bgs, width } from './onboarding.styles';
import Indicator from './Indicator.section';
import Backdrop from './backdrop.section';
import SliderItem from './slider-item.component';

const OnboardingContainer = () => {
  const dispatch = useAppDispatch();
  const scrollX: Animated.Value = useRef(new Animated.Value(0)).current;
  const ref = React.useRef<FlatList>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const isLastIndex = currentSlideIndex === DATA.length - 1;

  const onScrollRef = Animated.event(
    [
      {
        nativeEvent: { contentOffset: { x: scrollX } },
      },
    ],
    { useNativeDriver: false },
  );

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex !== DATA.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = DATA.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current?.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const updateCurrentSlideIndex = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const onPressDone = () => {
    dispatch(clearCredentials());
    navigateAndSimpleReset('Authentication');
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden translucent />
      <Backdrop scrollX={scrollX} data={bgs} />
      <Animated.FlatList
        horizontal
        pagingEnabled
        ref={ref}
        data={DATA}
        bounces={false}
        scrollEventThrottle={32}
        onScroll={onScrollRef}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.key}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => <SliderItem item={item} />}
      />
      <Indicator scrollX={scrollX} data={DATA} />
      <View style={styles.footer}>
        {!isLastIndex ? (
          <>
            <Button appearance="ghost" onPress={skip}>
              Skip
            </Button>
            <Button appearance="ghost" onPress={goToNextSlide}>
              Next
            </Button>
          </>
        ) : (
          <Button
            appearance="ghost"
            onPress={onPressDone}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ marginLeft: 'auto' }}>
            Done
          </Button>
        )}
      </View>
    </View>
  );
};

export default OnboardingContainer;

export interface DataItem {
  key: string;
  title: string;
  description: string;
  image: any;
}

export const DATA = [
  {
    key: '3571572',
    title: 'Multi-lateral intermediate moratorium',
    description:
      "I'll back up the multi-byte XSS matrix, that should feed the SCSI application!",
    image: AppImage.illustration.il_1,
  },
  {
    key: '3571747',
    title: 'Automated radical data-warehouse',
    description:
      'Use the optical SAS system, then you can navigate the auxiliary alarm!',
    image: AppImage.illustration.il_2,
  },
  {
    key: '3571680',
    title: 'Inverse attitude-oriented system engine',
    description:
      'The ADP array is down, compress the online sensor so we can input the HTTP panel!',
    image: AppImage.illustration.il_3,
  },
];

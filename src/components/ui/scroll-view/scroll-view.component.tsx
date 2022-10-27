import React, { forwardRef, Ref } from 'react';
import { ScrollView as RNScrollView, RefreshControl } from 'react-native';

import { useTheme } from '@/hooks';
import { ScrollViewProps } from './scroll-view.types';
import styles from './scroll-view.styles';

const ScrollView = forwardRef(
  (
    {
      style,
      contentContainerStyle,
      children,
      refreshing = false,
      onRefresh,
      padder,
      fill,
      ...props
    }: ScrollViewProps,
    ref: Ref<RNScrollView>,
  ) => {
    const theme = useTheme();
    const s = styles(theme);
    const padding = padder && s.contentContainer;
    const flex = fill && s.container;

    return (
      <RNScrollView
        ref={ref}
        style={[flex, style]}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[padding, contentContainerStyle]}
        refreshControl={
          onRefresh ? (
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          ) : undefined
        }
        {...props}>
        {children}
      </RNScrollView>
    );
  },
);

export default ScrollView;

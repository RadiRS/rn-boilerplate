import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { ScrollView as RNScrollView, RefreshControl } from 'react-native';

import { useTheme } from '@/hooks';
import { BaseScrollParams, ScrollViewProps } from './scroll-view.types';
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
    ref,
  ) => {
    const scrollRef = useRef<RNScrollView>(null);
    const theme = useTheme();
    const s = styles(theme);
    const padding = padder && s.contentContainer;
    const flex = fill && s.container;

    const scrollToEnd = (params?: BaseScrollParams) => {
      scrollRef?.current?.scrollToEnd(params);
    };

    useImperativeHandle(ref, () => ({
      scrollToEnd,
    }));

    return (
      <RNScrollView
        ref={scrollRef}
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

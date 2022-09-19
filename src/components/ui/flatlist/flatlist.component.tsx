import {
  FlatList as RNFlatList,
  FlatListProps as RNFlatListProps,
  RefreshControl,
} from 'react-native';
import React, { forwardRef, Ref } from 'react';

interface FlatListProps<Item = any> extends RNFlatListProps<Item> {
  refreshing?: boolean;
  onRefresh?: (() => void) | undefined;
}

const FlatList = forwardRef((props: FlatListProps, ref: Ref<RNFlatList>) => {
  const { refreshing = false, onRefresh, ...otherProps } = props;

  return (
    <RNFlatList
      ref={ref}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      refreshControl={
        onRefresh ? (
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        ) : undefined
      }
      {...otherProps}
    />
  );
});

export default FlatList;

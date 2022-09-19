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

  const keyExtractor = (_: any, index: number) => index.toString();

  return (
    <RNFlatList
      ref={ref}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={keyExtractor}
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

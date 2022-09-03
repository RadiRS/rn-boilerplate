import { Ref } from 'react';
import {
  ScrollView as RNScrollView,
  ScrollViewProps as RNScrollViewProps,
  StyleProp,
  ViewStyle,
} from 'react-native';

export interface ScrollViewProps extends RNScrollViewProps {
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  refreshing?: boolean;
  onRefresh?: (() => void) | undefined;
  padder?: boolean;
  fill?: boolean;
  ref?: Ref<RNScrollView>;
}

export interface BaseScrollParams {
  animated: boolean;
}

import {
  ScrollViewProps as RNScrollViewProps,
  StyleProp,
  ViewStyle,
} from 'react-native';

export interface ScrollViewProps extends RNScrollViewProps {
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  refreshing?: boolean;
  onRefresh?: () => void;
  padder?: boolean;
  fill?: boolean;
}

export interface BaseScrollParams {
  animated: boolean;
}

import React from 'react';
import {
  Image as RNImage,
  ImageBackground as RNImageBackground,
  ImageProps as RNImageProps,
  StyleSheet,
} from 'react-native';

import { useTheme } from '@/hooks';

interface ImageProps extends RNImageProps {
  variant?: 'image-background' | 'image';
  align?: 'left' | 'center' | 'right';
  size?: number;
  rounded?: number | boolean;
  children?: React.ReactNode;
}

export const Image: React.FC<ImageProps> = ({
  variant = 'image',
  align = 'left',
  rounded,
  size,
  source,
  style,
  children,
  ...props
}: ImageProps) => {
  const styles = useStyles({ align, size, rounded });

  return variant === 'image' ? (
    <RNImage source={source} style={[styles.container, style]} {...props} />
  ) : (
    <RNImageBackground
      source={source}
      style={[styles.container, style]}
      {...props}>
      {children}
    </RNImageBackground>
  );
};

const useStyles = (props: ImageProps) => {
  const { Colors, MetricsSizes } = useTheme();
  const { align, size, rounded } = props;

  const alignSelf =
    align === 'center'
      ? 'center'
      : align === 'right'
      ? 'flex-end'
      : 'flex-start';

  const borderRadius =
    typeof rounded === 'boolean'
      ? MetricsSizes.border
      : typeof rounded === 'number'
      ? rounded
      : 0;

  return StyleSheet.create({
    container: {
      width: size || '50%',
      height: size || 100,
      backgroundColor: Colors.dark,
      alignSelf,
      borderRadius,
    },
  });
};

export default Image;

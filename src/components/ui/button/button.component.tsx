import React, { FC, ReactNode } from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
  ActivityIndicator,
  GestureResponderEvent,
} from 'react-native';

import { useTheme } from '@/hooks';
import { Text } from '@/components/ui';
import { ButtonAppearances, ButtonSizes, ButtonStatus } from './button.types';
import styles from './button.styles';

export interface ButtonProps extends TouchableOpacityProps {
  children?: ReactNode;
  status?: ButtonStatus;
  size?: ButtonSizes;
  appearance?: ButtonAppearances;
  loading?: boolean | null | undefined;
  disabled?: boolean | undefined;
  style?: ViewStyle;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const Button: FC<ButtonProps> = ({
  children,
  loading,
  style,
  onPress,
  ...props
}: ButtonProps) => {
  const theme = useTheme();
  const isString = typeof children === 'string';

  const s = styles({ theme, props });

  const extOnPress = (event: GestureResponderEvent): void => {
    if (loading) {
      return;
    }

    onPress && onPress(event);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[s.btn, style]}
      onPress={extOnPress}
      {...props}>
      {loading ? (
        <ActivityIndicator size="small" color={theme.Colors.alternative} />
      ) : (
        isString && <Text style={s.text}>{children}</Text>
      )}
      {!isString && children}
    </TouchableOpacity>
  );
};

export default Button;

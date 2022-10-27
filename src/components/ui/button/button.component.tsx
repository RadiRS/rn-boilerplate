import React from 'react';
import { TouchableOpacity, GestureResponderEvent } from 'react-native';

import { useTheme } from '@/hooks';
import { Text, Spinner } from '@/components/ui';
import { ButtonProps } from './button.types';

import useStyles from './button.styles';

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  style,
  onPress,
  ...props
}: ButtonProps) => {
  const { Colors } = useTheme();
  const isString = typeof children === 'string';

  const s = useStyles(props);

  const spinColor =
    props.appearance === 'outlined' ? Colors.primary : Colors.white;

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
        <Spinner isVisible size="small" color={spinColor} />
      ) : (
        isString && <Text style={s.text}>{children}</Text>
      )}
      {!isString && children}
    </TouchableOpacity>
  );
};

export default Button;

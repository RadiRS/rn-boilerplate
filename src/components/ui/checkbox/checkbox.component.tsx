import React, { ReactNode } from 'react';
import { Pressable, View } from 'react-native';

import { useTheme } from '@/hooks';
import { Text } from '@/components/ui';

import styles from './checkbox.styles';

interface CheckboxProps {
  isChecked: boolean;
  onPress?: () => void;
  children?: ReactNode;
  title?: string;
  error?: string | boolean;
}

const Checkbox = (props: CheckboxProps) => {
  const { isChecked = false, onPress, title, error } = props;
  const isError = !!error;
  const themes = useTheme();
  const eStyles = styles(themes, isChecked, isError);

  return (
    <Pressable onPress={onPress} style={eStyles.container}>
      <View style={[eStyles.checkbox]} />
      {title && (
        <Text
          variant="small"
          status={isError ? 'error' : isChecked ? 'primary' : 'basic'}>
          {title}
        </Text>
      )}
    </Pressable>
  );
};

export default Checkbox;

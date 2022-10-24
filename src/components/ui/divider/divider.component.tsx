import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from '@/hooks';

interface DividerProps {
  size?: number;
  style?: ViewStyle;
}

const Divider: React.FC<DividerProps> = ({ size, style }: DividerProps) => {
  const styles = useStyles({ size });

  return <View style={[styles.container, style]} />;
};

const useStyles = (props: DividerProps) => {
  const { Colors } = useTheme();
  const { size } = props;

  return StyleSheet.create({
    container: {
      height: size || 1,
      width: '100%',
      backgroundColor: Colors.border,
    },
  });
};

export default Divider;

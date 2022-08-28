import { View, StyleSheet } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import { Variables } from '@/config/theme/themes/default_dark';
import { Text } from '@/components/ui';

const HeaderSection = () => {
  const { Colors } = useTheme();
  const extStyle = styles(Colors);

  return (
    <View style={extStyle.container}>
      <Text variant="title-regular" appearance="alternative">
        Header Section
      </Text>
    </View>
  );
};

const styles = (color: typeof Variables.Colors) =>
  StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: color.primary,
      borderRadius: 20,
      height: 200,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default HeaderSection;

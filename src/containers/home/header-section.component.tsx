import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import { Variables } from '@/config/theme/themes/default_dark';

const HeaderSection = () => {
  const { Colors, Fonts } = useTheme();
  const extStyle = styles(Colors);

  return (
    <View style={extStyle.container}>
      <Text style={[extStyle.title, Fonts.titleSmall]}>Header Section</Text>
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
    title: {
      color: color.text,
    },
  });

export default HeaderSection;

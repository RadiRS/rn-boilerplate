import { Text } from 'react-native';
import React, { FC } from 'react';
import { useTheme } from '@/hooks';
import { SafeAreaView } from 'react-native-safe-area-context';

const UserContainer: FC = () => {
  const { Fonts, Layout } = useTheme();
  return (
    <SafeAreaView style={[Layout.fill, Layout.center]}>
      <Text style={Fonts.titleSmall}>User Screen</Text>
    </SafeAreaView>
  );
};

export default UserContainer;

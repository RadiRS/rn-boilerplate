import { View, Text } from 'react-native';
import React from 'react';

import { SafeArea } from '@/components/ui';
import { useTheme } from '@/hooks';

const AuthenticationContainer = () => {
  const themes = useTheme();

  return (
    <SafeArea style={[themes.Layout.center]}>
      <View>
        <Text>Login & Register Container</Text>
      </View>
    </SafeArea>
  );
};

export default AuthenticationContainer;

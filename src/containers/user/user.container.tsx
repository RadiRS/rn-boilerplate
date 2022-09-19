import React from 'react';

import { useTheme } from '@/hooks';
import { Button, SafeArea, Text } from '@/components/ui';
import { navigate } from '@/navigators/utils';

const UserContainer = () => {
  const { Layout, Gutters } = useTheme();

  return (
    <SafeArea style={Layout.center}>
      <Text style={Gutters.regularBMargin}>No User</Text>
      <Button onPress={() => navigate('Authentication')}>Login</Button>
    </SafeArea>
  );
};

export default UserContainer;

import React, { useRef } from 'react';
import { ScrollView as RNScrollView } from 'react-native';

import { useTheme } from '@/hooks';
import { SafeArea, ScrollView, Text } from '@/components/ui';

const UserContainer = () => {
  const { Layout } = useTheme();
  const ref = useRef<RNScrollView>(null);

  return (
    <SafeArea>
      <ScrollView padder ref={ref} style={Layout.fill}>
        <Text>User Screen</Text>
      </ScrollView>
    </SafeArea>
  );
};

export default UserContainer;

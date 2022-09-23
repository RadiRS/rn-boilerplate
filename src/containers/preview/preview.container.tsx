import React, { FC } from 'react';
import { View } from 'react-native';

import { useTheme } from '@/hooks';
import { SafeArea, Text, Button } from '@/components/ui';

const PreviewContainer: FC = () => {
  const { Layout, Gutters } = useTheme();

  function Bomb() {
    throw new Error('💥 CABOOM 💥');
  }

  return (
    <SafeArea padder style={Layout.center}>
      <View style={Layout.fullWidth}>
        <Text style={Gutters.regularBMargin}>Test Error Boundary</Text>
        <Button status="error" onPress={Bomb}>
          Throw Error
        </Button>
      </View>
    </SafeArea>
  );
};

export default PreviewContainer;

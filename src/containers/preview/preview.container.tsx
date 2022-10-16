import React, { FC } from 'react';

import { useTheme } from '@/hooks';
import { SafeArea, Text, Button, Spinner, View } from '@/components/ui';

const PreviewContainer: FC = () => {
  const { Layout, Gutters, MetricsSizes } = useTheme();

  const bomb = () => {
    throw new Error('💥 CABOOM 💥');
  };

  return (
    <SafeArea padder style={Layout.center}>
      <View style={Layout.fullWidth}>
        <Text style={Gutters.regularBMargin}>Test Error Boundary</Text>
        <Button status="error" onPress={bomb}>
          Throw Error
        </Button>
      </View>
      <View style={[Layout.fullWidth, Gutters.regularTMargin]}>
        <Text style={Gutters.regularBMargin}>Spinner</Text>
        <View style={[Layout.rowCenter, Gutters.smallBMargin]}>
          <Spinner isVisible style={Gutters.smallRMargin} />
          <Spinner isVisible size="large" />
        </View>
        <View style={{ height: MetricsSizes.width / 3 }}>
          <Spinner isFull isVisible />
        </View>
      </View>
    </SafeArea>
  );
};

export default PreviewContainer;

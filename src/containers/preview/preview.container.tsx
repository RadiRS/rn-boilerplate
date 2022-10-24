import React from 'react';

import { useTheme } from '@/hooks';
import { SafeArea, Text, Button, Spinner, View, Image } from '@/components/ui';
import { AppImage } from '@/assets';

const PreviewContainer = () => {
  const { Layout, Gutters, MetricsSizes } = useTheme();

  const bomb = () => {
    throw new Error('💥 CABOOM 💥');
  };

  return (
    <SafeArea padder style={Layout.center}>
      <View style={Layout.fullWidth}>
        <Image
          rounded
          size={150}
          align="center"
          source={AppImage.logo.app}
          style={Gutters.regularBMargin}
        />
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

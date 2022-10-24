import React, { useRef } from 'react';
import { Alert, ScrollView as RNScrollView } from 'react-native';

import { useTheme } from '@/hooks';
import { Button, SafeArea, ScrollView } from '@/components/ui';

const ButtonPreviewContainer = () => {
  const { Layout, Gutters } = useTheme();
  const ref = useRef<RNScrollView>(null);

  const onPressScroll = () => {
    ref.current?.scrollToEnd();
  };

  const onPress = () => {
    Alert.alert('Press Event');
  };

  return (
    <SafeArea>
      <ScrollView padder ref={ref} style={Layout.fill}>
        <Button style={Gutters.regularBMargin} onPress={onPressScroll}>
          Scroll To Bottom
        </Button>
        <Button style={Gutters.regularBMargin} onPress={onPress}>
          Regular Button
        </Button>
        <Button disabled style={Gutters.regularBMargin}>
          Disabled Button
        </Button>
        <Button loading style={Gutters.regularBMargin} onPress={onPress}>
          Loading Button
        </Button>
        <Button
          appearance="outlined"
          style={Gutters.regularBMargin}
          onPress={onPress}>
          Outline Button
        </Button>
        <Button
          appearance="ghost"
          style={Gutters.regularBMargin}
          onPress={onPress}>
          Ghost Button
        </Button>

        <Button status="primary" style={Gutters.regularBMargin}>
          Primary Button
        </Button>
        <Button status="success" style={Gutters.regularBMargin}>
          Success Button
        </Button>
        <Button status="info" style={Gutters.regularBMargin}>
          Info Button
        </Button>
        <Button status="warning" style={Gutters.regularBMargin}>
          Warning Button
        </Button>
        <Button status="error" style={Gutters.regularBMargin}>
          Error Button
        </Button>
        <Button status="basic" style={Gutters.regularBMargin}>
          Basic Button
        </Button>

        <Button size="small" style={Gutters.regularBMargin}>
          Small Button
        </Button>
        <Button size="regular" style={Gutters.regularBMargin}>
          Regular Button
        </Button>
        <Button size="large" style={Gutters.regularBMargin}>
          Large Button
        </Button>
      </ScrollView>
    </SafeArea>
  );
};

export default ButtonPreviewContainer;

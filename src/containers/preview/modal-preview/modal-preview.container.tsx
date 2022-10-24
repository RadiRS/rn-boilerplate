import React, { useState } from 'react';
import { View } from 'react-native';

import { useTheme } from '@/hooks';
import { SafeArea, Button, Text, Modal } from '@/components/ui';

const ModalPreviewContainer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleTop, setIsVisibleTop] = useState(false);
  const [isVisibleBottom, setIsVisibleBottom] = useState(false);
  const { Gutters, Layout, Colors, MetricsSizes } = useTheme();

  const renderContent = (title: string) => {
    return (
      <View
        style={[
          Layout.center,
          Gutters.regularVPadding,
          { backgroundColor: Colors.background, height: MetricsSizes.width },
        ]}>
        <Text>{title}</Text>
      </View>
    );
  };

  return (
    <SafeArea padder>
      <Button style={Gutters.regularBMargin} onPress={() => setIsVisible(true)}>
        Modal
      </Button>
      <Button
        status="info"
        style={Gutters.regularBMargin}
        onPress={() => setIsVisibleBottom(true)}>
        Modal Bottom
      </Button>
      <Button
        status="success"
        style={Gutters.regularBMargin}
        onPress={() => setIsVisibleTop(true)}>
        Modal Top
      </Button>
      <Modal
        isVisible={isVisible}
        onBackButtonPress={() => setIsVisible(false)}
        onSwipeComplete={() => setIsVisible(false)}
        onBackdropPress={() => setIsVisible(false)}>
        {renderContent('Regular Modal')}
      </Modal>
      <Modal
        variant="bottom"
        swipeDirection="down"
        isVisible={isVisibleBottom}
        onBackButtonPress={() => setIsVisibleBottom(false)}
        onSwipeComplete={() => setIsVisibleBottom(false)}
        onBackdropPress={() => setIsVisibleBottom(false)}>
        {renderContent('Bottom Modal')}
      </Modal>
      <Modal
        variant="top"
        swipeDirection="up"
        isVisible={isVisibleTop}
        onBackButtonPress={() => setIsVisibleTop(false)}
        onSwipeComplete={() => setIsVisibleTop(false)}
        onBackdropPress={() => setIsVisibleTop(false)}>
        {renderContent('Top Modal')}
      </Modal>
    </SafeArea>
  );
};

export default ModalPreviewContainer;

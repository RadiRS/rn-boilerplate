import React, { FC } from 'react';
import { View } from 'react-native';
import { SafeArea, Text, ScrollView } from '@/components/ui';
import { useTheme } from '@/hooks';

const PreviewContainer: FC = () => {
  const { Layout, Gutters } = useTheme();

  return (
    <SafeArea>
      <ScrollView
        style={Layout.fill}
        contentContainerStyle={[
          Gutters.regularHPadding,
          Gutters.regularVPadding,
        ]}>
        <View>
          <Text>Preview Screen</Text>
        </View>
      </ScrollView>
    </SafeArea>
  );
};

export default PreviewContainer;

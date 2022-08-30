import React, { FC } from 'react';
import { View, SafeAreaView } from 'react-native';
import { Text } from '@/components/ui';
import { ScrollView } from 'react-native-gesture-handler';
import { useTheme } from '@/hooks';

const PreviewContainer: FC = () => {
  const { Layout, Gutters, Colors } = useTheme();

  return (
    <SafeAreaView style={Layout.fill}>
      <ScrollView
        style={Layout.fill}
        contentContainerStyle={[
          Gutters.regularHPadding,
          Gutters.regularVPadding,
        ]}>
        <View>
          <Text variant="small">Text Small</Text>
          <Text variant="regular">Text Regular</Text>
          <Text variant="large">Text Large</Text>
          <Text variant="title-small">Text Title Small</Text>
          <Text variant="title-regular">Text Title Regular</Text>
          <Text variant="title-large">Text Title Large</Text>

          <Text status="primary">Text Status Primary</Text>
          <Text status="success">Text Status Success</Text>
          <Text status="info">Text Status Info</Text>
          <Text status="warning">Text Status Warning</Text>
          <Text status="error">Text Status Error</Text>
          <Text status="basic">Text Status Basic</Text>
          <Text status="disabled">Text Status Disabled</Text>

          <Text appearance="default">Text Appearance Default</Text>
          <View
            style={[
              Gutters.regularVPadding,
              Gutters.regularHPadding,
              {
                backgroundColor: Colors.primary,
              },
            ]}>
            <Text appearance="alternative">Text Appearance Alternative</Text>
          </View>
          <Text appearance="hint">Text Appearance Hint</Text>

          <Text type="regular">Text Type Regular</Text>
          <Text type="bold">Text Type Bold</Text>
          <Text type="semi-bold">Text Type Semi-Bold</Text>
          <Text type="italic">Text Type Italic</Text>
        </View>

        <Text>Button</Text>

        <Text>Loader</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PreviewContainer;

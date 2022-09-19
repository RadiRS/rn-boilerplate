import React from 'react';
import { ListRenderItem, View } from 'react-native';
import { Text } from '@/components/ui';

import data from '@/assets/data.json';
import { FlatList } from '@/components/ui';
import { useTheme } from '@/hooks';

const FlatListPreviewContainer = () => {
  const themes = useTheme();

  const renderItem: ListRenderItem<Data> = ({ item }) => (
    <View
      style={[
        themes.Gutters.regularHPadding,
        themes.Gutters.smallVPadding,
        // eslint-disable-next-line react-native/no-inline-styles
        { borderBottomColor: 'grey', borderBottomWidth: 1 },
      ]}>
      <Text>Title: {item.title}</Text>
      <View style={themes.Layout.row}>
        <Text>Completed: {item.completed ? 'Yes' : 'No'} </Text>
      </View>
    </View>
  );

  const onRefresh = () => {};

  return <FlatList data={data} renderItem={renderItem} onRefresh={onRefresh} />;
};

interface Data {
  id: number;
  userId: number;
  completed: boolean;
  title: string;
}

export default FlatListPreviewContainer;

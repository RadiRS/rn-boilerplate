import React from 'react';
import { ListRenderItem, Text } from 'react-native';
import { render } from '@testing-library/react-native';

import { FlatList } from '@/components/ui';

describe('<Flatlist />', () => {
  it('should render component correctly', () => {
    const data: any[] = [];
    const renderItem = () => null;

    const rendered = render(
      <FlatList data={data} renderItem={renderItem} />,
    ).toJSON();

    expect(rendered).toMatchSnapshot();
  });

  it('should render list of items correctly', () => {
    const length = 5;
    const data: any[] = new Array(length);
    const renderItem: ListRenderItem<any> = ({ index }) => <Text>{index}</Text>;

    const rendered = render(<FlatList data={data} renderItem={renderItem} />);

    const items = rendered.UNSAFE_queryAllByType(Text);

    expect(items).toHaveLength(length);
  });
});

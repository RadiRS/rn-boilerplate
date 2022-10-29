import React from 'react';
import { StyleSheet } from 'react-native';

import { renderWithRedux } from '@/helpers';
import { Image } from '@/components/ui';

describe('<Image />', () => {
  it('should render component correctly', () => {
    const rendered = renderWithRedux(<Image />).toJSON();

    expect(rendered).toMatchSnapshot();
  });

  it('should render image correctly', () => {
    const imgUrl = 'https://picsum.photos/200/300';

    const rendered = renderWithRedux(
      <Image testID="image" source={{ uri: imgUrl }} />,
    );

    const source = rendered.getByTestId('image').props.source;

    expect(source).toEqual({ uri: imgUrl });
  });

  it('should render image rounded', () => {
    const rendered = renderWithRedux(<Image testID="image" rounded />);

    const component = rendered.queryByTestId('image');
    const { borderRadius } = StyleSheet.flatten(component?.props.style);

    expect(borderRadius).toEqual(8);
  });
});

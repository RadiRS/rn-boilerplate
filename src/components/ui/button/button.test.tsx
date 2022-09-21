import 'react-native';
import React from 'react';
import { fireEvent } from '@testing-library/react-native';

import { renderWithRedux } from '@/helpers';
import { Text, Button } from '@/components/ui';

describe('<Button />', () => {
  it('should render component correctly', () => {
    const rendered = renderWithRedux(<Button />).toJSON();

    expect(rendered).toMatchSnapshot();
  });

  it('should render text passed to children', () => {
    const rendered = renderWithRedux(<Button>Hello World</Button>);

    expect(rendered.queryByText('Hello World')).toBeTruthy();
  });

  it('should render component passed to children', () => {
    const rendered = renderWithRedux(
      <Button>
        <Text>I love Indonesia</Text>
      </Button>,
    );

    expect(rendered.queryByText('I love Indonesia')).toBeTruthy();
  });

  it('should call onPress', () => {
    const onPress = jest.fn();

    const rendered = renderWithRedux(
      <Button testID="button" onPress={onPress} />,
    );

    fireEvent.press(rendered.getByTestId('button'));

    expect(onPress).toBeCalled();
  });
});

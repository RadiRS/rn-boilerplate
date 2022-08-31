import 'react-native';
import React from 'react';

import Text from './text.component';
import { renderWithRedux } from '@/helpers';

describe('<Text />', () => {
  it('should render component correcly', () => {
    const rendered = renderWithRedux(<Text />).toJSON();

    expect(rendered).toMatchSnapshot();
  });

  it('should render text passed to children', () => {
    const rendered = renderWithRedux(<Text>Hello World</Text>);

    expect(rendered.queryByText('Hello World')).toBeTruthy();
  });

  it('should render component passed to children', () => {
    const rendered = renderWithRedux(
      <Text>
        <Text>I love Indonesia</Text>
      </Text>,
    );

    expect(rendered.queryByText('I love Indonesia')).toBeTruthy();
  });
});

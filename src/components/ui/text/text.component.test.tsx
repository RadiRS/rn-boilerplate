import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import Text from './text.component';
import { renderWithRedux } from '@/helpers';

test('should render Text component', () => {
  const rendered = renderWithRedux(<Text />);

  expect(rendered).toMatchSnapshot();
});

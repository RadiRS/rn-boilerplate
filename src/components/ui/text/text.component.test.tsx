/* eslint-disable no-console */
import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import Text from './text.component';
import { shallowRenderWithRedux, renderWithRedux } from '@/helpers';

test('should render text component', () => {
  const srendered = shallowRenderWithRedux(<Text />);
  console.log('srendered', srendered);

  const rendered = renderWithRedux(<Text />);
  console.log('rendered', rendered.toJSON());
});

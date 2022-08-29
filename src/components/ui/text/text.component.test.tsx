import 'react-native';
import React, { ReactNode } from 'react';
// Note: test renderer must be required after react-native.
import ShallowRender from 'react-test-renderer/shallow';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import theme from '@/store/theme';
import Text from './text.component';

test('renders correctly', () => {
  renderWithRedux(<Text />);
});

//* this method help component ro render that need redux with it
const renderWithRedux = (renderedComponent: ReactNode) => {
  const store = configureStore({ reducer: { theme } });
  const renderer = ShallowRender.createRenderer();

  return renderer.render(
    <Provider store={store}>{renderedComponent}</Provider>,
  );
};

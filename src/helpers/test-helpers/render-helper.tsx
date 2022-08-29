import 'react-native';
import React, { ReactNode } from 'react';
// Note: test renderer must be required after react-native.
import ShallowRender from 'react-test-renderer/shallow';
import Rendered from 'react-test-renderer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import theme from '@/store/theme';

const store = configureStore({ reducer: { theme } });

//* this method help component ro render that need redux with it
export const shallowRenderWithRedux = (renderedComponent: ReactNode) => {
  const renderer = ShallowRender.createRenderer();

  return renderer.render(
    <Provider store={store}>{renderedComponent}</Provider>,
  );
};

export const renderWithRedux = (renderedComponent: ReactNode) => {
  return Rendered.create(
    <Provider store={store}>{renderedComponent}</Provider>,
  );
};

import 'react-native';
import React, { ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render } from '@testing-library/react-native';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { themeReducer } from '@/store/theme';

const store = configureStore({ reducer: { theme: themeReducer } });

/**
 * @ReactTestRenderer
 * Example how to use react-test-renderer to Snapshoot
 */

//this method help component ro render that need redux with it
export const renderWithRedux = (renderedComponent: ReactNode) => {
  return render(<Provider store={store}>{renderedComponent}</Provider>);
};

//this method help component ro render that need navigation with it
export const renderWithNavigation = (renderedComponent: ReactNode) => {
  return renderWithRedux(
    <NavigationContainer>{renderedComponent}</NavigationContainer>,
  );
};

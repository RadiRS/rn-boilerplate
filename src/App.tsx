import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { ErrorBoundary } from '@/components/ui';
import { RootNavigator } from '@/navigators';
import { persistor, store } from './store';
import './config/translations';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ErrorBoundary>
          <RootNavigator />
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  );
};

export default App;

// Render Storybook
// export { default } from '../storybook';

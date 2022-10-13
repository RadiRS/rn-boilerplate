import React, { ReactNode, useEffect } from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';

import { Text } from '@/components/ui';

const myErrorHandler = (error: Error) => {
  // Do something with the error
  // E.g. reporting error using sentry ( see part 3)
  // eslint-disable-next-line no-console
  console.log('error', error);
};

function ErrorFallback({ resetErrorBoundary }: any) {
  return (
    <View style={[styles.container]}>
      <View>
        <Text> Something went wrong: </Text>
        <Button title="try Again" onPress={resetErrorBoundary} />
      </View>
    </View>
  );
}

const jsExceptionHandler = (error: Error, isFatal: boolean) => {
  // eslint-disable-next-line no-console
  console.log('isFatal: ', isFatal);
  // your error handler function
  Alert.alert(error.message);
};

const nativeExceptionHandler = (exceptionString: string) => {
  // eslint-disable-next-line no-console
  console.log({ exceptionString });
  // This is your custom global error handler
  // You do stuff like hit google analytics to track crashes.
  // or hit a custom api to inform the dev team.
  //NOTE: alert or showing any UI change via JS
  //WILL NOT WORK in case of NATIVE ERRORS.
};

const ErrorBoundary = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    setJSExceptionHandler(jsExceptionHandler, false);
    setNativeExceptionHandler(nativeExceptionHandler);
  }, []);

  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={myErrorHandler}>
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 12,
  },
});

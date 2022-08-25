import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';

import AppNavigator from './app.navigator';
import { navigationRef, RootStackParamList } from './utils';

import { WelcomeContainer } from '@/containers';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator<RootStackParamList>();

// @refresh reset
const RootNavigator = () => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? DarkTheme : DefaultTheme;
  const barStyle = scheme === 'dark' ? 'light-content' : 'dark-content';

  return (
    <GestureHandlerRootView style={styles.fill}>
      <SafeAreaView style={styles.fill}>
        <NavigationContainer ref={navigationRef} theme={theme}>
          <StatusBar barStyle={barStyle} />
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Welcome"
              component={WelcomeContainer}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Main"
              component={AppNavigator}
              options={{ animation: 'none' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({ fill: { flex: 1 } });

export default RootNavigator;

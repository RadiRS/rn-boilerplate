import React from 'react';
import { StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useTheme } from '@/hooks';

import { navigationRef } from './utils';
import { RootStackParamList } from './types';
import { SplashContainer } from '@/containers';
import AppNavigator from './app.navigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

// @refresh reset
const RootNavigator = () => {
  const { darkMode, NavigationTheme, Layout } = useTheme();
  const barStyle = darkMode ? 'light-content' : 'dark-content';
  const backgroundColor = NavigationTheme.colors.card;

  return (
    <GestureHandlerRootView style={Layout.fill}>
      <NavigationContainer ref={navigationRef} theme={NavigationTheme}>
        <StatusBar barStyle={barStyle} backgroundColor={backgroundColor} />
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={SplashContainer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Main"
            component={AppNavigator}
            options={{ animation: 'none' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default RootNavigator;

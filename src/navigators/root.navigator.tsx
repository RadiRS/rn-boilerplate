import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useAppSelector } from '@/store';
import { useTheme } from '@/hooks';
import {
  AuthenticationContainer,
  OnboardingContainer,
  // SplashContainer,
} from '@/containers';

import { selectIsFirstInstall } from '@/store/init';

import { navigationRef } from './utils';
import { RootStackParamList } from './types';
import AppNavigator from './app.navigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

// @refresh reset
const RootNavigator = () => {
  const isFirstInstall = useAppSelector(selectIsFirstInstall);
  const { darkMode, NavigationTheme, Layout } = useTheme();
  const barStyle = darkMode ? 'light-content' : 'dark-content';
  const backgroundColor = NavigationTheme.colors.card;

  const onReady = () => {
    RNBootSplash.hide({ fade: true });
  };

  const initialRouteName: keyof RootStackParamList = isFirstInstall
    ? 'Onboarding'
    : 'AppNavigator';

  return (
    <GestureHandlerRootView style={Layout.fill}>
      <NavigationContainer
        ref={navigationRef}
        theme={NavigationTheme}
        onReady={onReady}>
        <StatusBar barStyle={barStyle} backgroundColor={backgroundColor} />
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={initialRouteName}>
          <Stack.Screen
            name="Onboarding"
            component={OnboardingContainer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AppNavigator"
            component={AppNavigator}
            options={{ animation: 'none' }}
          />
          <Stack.Screen
            name="Authentication"
            component={AuthenticationContainer}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default RootNavigator;

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './app.navigator';
import { navigationRef, RootStackParamList } from './utils';

import { WelcomeContainer } from '@/containers';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useTheme } from '@/hooks';

const Stack = createNativeStackNavigator<RootStackParamList>();

// @refresh reset
const RootNavigator = () => {
  const { darkMode, NavigationTheme, Layout } = useTheme();
  const barStyle = darkMode ? 'light-content' : 'dark-content';

  return (
    <GestureHandlerRootView style={Layout.fill}>
      <SafeAreaView style={Layout.fill}>
        <NavigationContainer ref={navigationRef} theme={NavigationTheme}>
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

export default RootNavigator;

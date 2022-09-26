import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useTheme } from '@/hooks';
import { useAppSelector } from '@/store';
import { selectCurrentStatus } from '@/store/auth';
import {
  AuthenticationContainer,
  OnboardingContainer,
  // SplashContainer,
} from '@/containers';

import { navigationRef } from './utils';
import { RootStackParamList } from './types';
import DrawerNavigator from './drawer.navigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

const linking: LinkingOptions<RootStackParamList> | undefined = {
  prefixes: ['rnapp://'],
  config: {
    screens: {
      // rnapp://auth
      Authentication: 'auth',
      AppNavigator: {
        screens: {
          // rnapp://user/1 || rnapp://user (id is optional)
          UserStack: 'user/:id?',
          // rnapp://preview
          PreviewStack: 'preview',
        },
      },
    },
  },
};

// @refresh reset
const RootNavigator = () => {
  const { darkMode, NavigationTheme, Layout, Colors } = useTheme();
  const status = useAppSelector(selectCurrentStatus);

  const barStyle = darkMode ? 'light-content' : 'dark-content';
  const backgroundColor = darkMode ? NavigationTheme.colors.card : Colors.white;

  const onReady = () => {
    RNBootSplash.hide({ fade: true });
  };

  const initialRouteName: keyof RootStackParamList =
    status === 'idle'
      ? 'Onboarding'
      : status === 'signIn'
      ? 'MainDrawer'
      : 'Authentication';

  return (
    <GestureHandlerRootView style={Layout.fill}>
      <NavigationContainer
        ref={navigationRef}
        linking={linking}
        theme={NavigationTheme}
        onReady={onReady}>
        <StatusBar barStyle={barStyle} backgroundColor={backgroundColor} />
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={initialRouteName}>
          {status === 'idle' && (
            <Stack.Screen
              name="Onboarding"
              component={OnboardingContainer}
              options={{ headerShown: false }}
            />
          )}
          {status === 'signIn' && (
            <Stack.Screen
              name="MainDrawer"
              component={DrawerNavigator}
              // options={{ animation: 'none' }}
            />
          )}
          {(status === 'signOut' || status === 'idle') && (
            <Stack.Screen
              name="Authentication"
              component={AuthenticationContainer}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default RootNavigator;

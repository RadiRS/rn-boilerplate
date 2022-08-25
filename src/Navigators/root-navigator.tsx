import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './main';
import { navigationRef, RootStackParamList } from './utils';

import { WelcomeContainer } from '@/containers';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator<RootStackParamList>();

// @refresh reset
const RootNavigator = () => {
  return (
    <GestureHandlerRootView style={styles.fill}>
      <SafeAreaView style={styles.fill}>
        <NavigationContainer ref={navigationRef}>
          <StatusBar barStyle="dark-content" />
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Welcome"
              component={WelcomeContainer}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Main"
              component={MainNavigator}
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

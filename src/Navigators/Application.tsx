import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import MainNavigator from './Main';
import {navigationRef, RootStackParamList} from './utils';

import {WelcomeContainer} from '@/Containers';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator<RootStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {
  return (
    <GestureHandlerRootView style={styles.fill}>
      <SafeAreaView style={styles.fill}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Welcome" component={WelcomeContainer} />
            <Stack.Screen
              name="Main"
              component={MainNavigator}
              options={{animation: 'none'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({fill: {flex: 1}});

export default ApplicationNavigator;

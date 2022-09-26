import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import { HomeContainer, PreviewContainer, UserContainer } from '@/containers';
import { RootStackParamList } from './types';

const Tab = createBottomTabNavigator<RootStackParamList>();

// @refresh reset
const AppNavigator = () => {
  const options: BottomTabNavigationOptions = {
    tabBarIconStyle: { display: 'none' },
    tabBarLabelPosition: 'beside-icon',
    headerShown: false,
  };

  return (
    <Tab.Navigator screenOptions={options}>
      <Tab.Screen
        name="HomeStack"
        component={HomeContainer}
        options={{ title: 'Home' }}
      />
      <Tab.Screen
        name="PreviewStack"
        component={PreviewContainer}
        options={{ title: 'Preview' }}
      />
      <Tab.Screen
        name="UserStack"
        component={UserContainer}
        options={{ title: 'User' }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;

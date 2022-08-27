import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import { HomeContainer, PreviewContainer, UserContainer } from '@/containers';

const Tab = createBottomTabNavigator();

// @refresh reset
const AppNavigator = () => {
  const options: BottomTabNavigationOptions = {
    tabBarIconStyle: { display: 'none' },
    tabBarLabelPosition: 'beside-icon',
    headerShown: false,
  };

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeContainer} options={options} />
      <Tab.Screen
        name="Preview"
        component={PreviewContainer}
        options={options}
      />
      <Tab.Screen name="User" component={UserContainer} options={options} />
    </Tab.Navigator>
  );
};

export default AppNavigator;

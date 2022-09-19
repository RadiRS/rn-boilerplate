import React from 'react';
import {
  ButtonPreviewContainer,
  FlatListPreviewContainer,
  HomeContainer,
  InputPreviewContainer,
  TextPreviewContainer,
} from '@/containers';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { RootStackParamList } from './types';

const Drawer = createDrawerNavigator<RootStackParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={HomeContainer}
        options={{ title: 'RN Boilerplate', headerTitle: 'RN Boilerplate' }}
      />
      <Drawer.Screen
        name="TextPreviewContainer"
        component={TextPreviewContainer}
        options={{ title: 'Text Preview', headerTitle: 'Text Preview' }}
      />
      <Drawer.Screen
        name="InputPreviewContainer"
        component={InputPreviewContainer}
        options={{ title: 'Input Preview', headerTitle: 'Input Preview' }}
      />
      <Drawer.Screen
        name="ButtonPreviewContainer"
        component={ButtonPreviewContainer}
        options={{ title: 'Button Preview', headerTitle: 'Button Preview' }}
      />
      <Drawer.Screen
        name="FlatListPreviewContainer"
        component={FlatListPreviewContainer}
        options={{ title: 'FlatList Preview', headerTitle: 'FlatList Preview' }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  ButtonPreviewContainer,
  FlatListPreviewContainer,
  InputPreviewContainer,
  TextPreviewContainer,
  WebviewPreviewContainer,
} from '@/containers';
import { RootStackParamList } from './types';
import AppNavigator from './app.navigator';

const Drawer = createDrawerNavigator<RootStackParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={AppNavigator}
        options={{
          title: 'RN Boilerplate',
          headerTitle: 'RN Boilerplate',
        }}
      />
      <Drawer.Screen
        name="TextPreviewContainer"
        component={TextPreviewContainer}
        options={{ title: 'Text', headerTitle: 'Text Preview' }}
      />
      <Drawer.Screen
        name="InputPreviewContainer"
        component={InputPreviewContainer}
        options={{ title: 'Input', headerTitle: 'Input Preview' }}
      />
      <Drawer.Screen
        name="ButtonPreviewContainer"
        component={ButtonPreviewContainer}
        options={{ title: 'Button', headerTitle: 'Button Preview' }}
      />
      <Drawer.Screen
        name="FlatListPreviewContainer"
        component={FlatListPreviewContainer}
        options={{
          title: 'FlatList',
          headerTitle: 'FlatList Preview | Todo List',
        }}
      />
      <Drawer.Screen
        name="WebviewPreviewContainer"
        component={WebviewPreviewContainer}
        options={{ title: 'Webview', headerTitle: 'Webview Preview' }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

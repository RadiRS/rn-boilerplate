import React from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { useTheme } from '@/hooks';
import { useAppSelector, useAppDispatch } from '@/store';
import {
  selectCurrentUser,
  selectCurrentToken,
  clearCredentials,
} from '@/store/auth';
import { useLazyGetLogoutQuery } from '@/services/auth';
import { navigateAndSimpleReset } from '@/navigators/utils';
import { Button, SafeArea, Text } from '@/components/ui';

import ListUserSection from './list-users.section';

const UserContainer = () => {
  const { params } = useRoute();
  const dispatch = useAppDispatch();
  const [logoutRequest, { isLoading }] = useLazyGetLogoutQuery();
  const { Layout, Gutters } = useTheme();

  // eslint-disable-next-line no-console
  console.log('User ID: ', params);

  const user = useAppSelector(selectCurrentUser);
  const token = useAppSelector(selectCurrentToken);

  const onPress = () => {
    if (!token) {
      navigateAndSimpleReset('Authentication');
      return;
    }

    handleLogoutRequest();
  };

  const handleLogoutRequest = async () => {
    try {
      logoutRequest();

      dispatch(clearCredentials());
    } catch (error) {
      dispatch(clearCredentials());
    }
  };

  return (
    <SafeArea padder style={Layout.center}>
      <View style={[Gutters.largeBMargin, Layout.fullWidth]}>
        <Text style={Gutters.regularBMargin}>
          {user ? `Current User: ${JSON.stringify(user)} ` : 'No User'}
        </Text>
        <Text style={Gutters.regularBMargin}>
          {token ? `Token: ${token.slice(0, 9)}...` : 'No Token'}
        </Text>
        <ListUserSection />
      </View>
      <View style={Layout.fullWidth}>
        <Button
          loading={isLoading}
          onPress={onPress}
          style={Gutters.regularTMargin}>
          {token ? 'Logout' : 'Login'}
        </Button>
      </View>
    </SafeArea>
  );
};

export default UserContainer;

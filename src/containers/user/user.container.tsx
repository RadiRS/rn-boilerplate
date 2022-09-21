import React from 'react';

import { useAppSelector, useAppDispatch } from '@/store';
import {
  selectCurrentUser,
  selectCurrentToken,
  logout,
} from '@/store/auth/authSlice';
import { navigate } from '@/navigators/utils';
import { useTheme } from '@/hooks';
import { Button, SafeArea, Text } from '@/components/ui';
import { View } from 'react-native';
import ListUserSection from './list-users.section';
import { useLazyLogoutRequestQuery } from '@/services/modules/auth/auth.service';

const UserContainer = () => {
  const dispatch = useAppDispatch();
  const [logoutRequest, { isLoading }] = useLazyLogoutRequestQuery();
  const { Layout, Gutters } = useTheme();

  const user = useAppSelector(selectCurrentUser);
  const token = useAppSelector(selectCurrentToken);

  const onPress = () => {
    if (!token) {
      navigate('Authentication');
      return;
    }

    handleLogoutRequest();
  };

  const handleLogoutRequest = async () => {
    try {
      logoutRequest();

      dispatch(logout());
    } catch (error) {
      dispatch(logout());
    }
  };

  return (
    <SafeArea padder style={Layout.center}>
      <View style={[Gutters.largeBMargin, Layout.fullWidth]}>
        <Text style={Gutters.regularBMargin}>
          {user ? `Current User: ${JSON.stringify(user)} ` : 'No User'}
        </Text>
        <Text>{token ? `Token: ${token.slice(0, 9)}...` : 'No Token'}</Text>
        <Button
          loading={isLoading}
          onPress={onPress}
          style={Gutters.regularTMargin}>
          {token ? 'Logout' : 'Login'}
        </Button>
      </View>
      <View style={Layout.fullWidth}>
        <ListUserSection />
      </View>
    </SafeArea>
  );
};

export default UserContainer;

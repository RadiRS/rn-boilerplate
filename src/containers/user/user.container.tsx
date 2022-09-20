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

const UserContainer = () => {
  const dispatch = useAppDispatch();
  const { Layout, Gutters } = useTheme();
  const user = useAppSelector(selectCurrentUser);
  const token = useAppSelector(selectCurrentToken);

  const onPress = () => {
    if (!token) {
      navigate('Authentication');
      return;
    }

    dispatch(logout());
  };

  return (
    <SafeArea padder style={Layout.center}>
      <Text style={Gutters.regularBMargin}>
        {user ? `User: ${JSON.stringify(user)} ` : 'No User'}
      </Text>
      <Text style={Gutters.regularBMargin}>
        {token ? `Token: ${token.slice(0, 9)}...` : 'No Token'}
      </Text>
      <Button onPress={onPress}>{token ? 'Logout' : 'Login'}</Button>
    </SafeArea>
  );
};

export default UserContainer;

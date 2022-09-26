import React, { useState } from 'react';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useTheme } from '@/hooks';
import { useAppDispatch } from '@/store';
import { setCredentials, AuthState } from '@/store/auth';
import {
  usePostLoginMutation,
  usePostRegisterMutation,
  Credential,
} from '@/services/auth';
import { SafeArea, Input, Button, Text, Form } from '@/components/ui';

const AuthenticationContainer = () => {
  const { Gutters, Layout } = useTheme();
  const dispatch = useAppDispatch();
  const [isLogin, setIsLogin] = useState(true);

  const [postRegisterRequest] = usePostRegisterMutation();
  const [postLoginRequest, { isLoading, isError, error }] =
    usePostLoginMutation();

  const schema = yup
    .object({
      name: !isLogin ? yup.string().required('Name is required') : yup.string(),
      username: yup.string().required('Username is required'),
      password: yup.string().required('Password is required'),
    })
    .required();

  const formMethods = useForm({ resolver: yupResolver(schema) });

  const onPressSubmit = async (data: any) => {
    try {
      const params: Credential = {
        user: data.username,
        pwd: data.password,
      };

      if (!isLogin) {
        await postRegisterRequest(params).unwrap();
      }

      const res = await postLoginRequest(params).unwrap();

      const userData: AuthState = {
        user: params,
        accessToken: res.accessToken,
      };

      dispatch(setCredentials(userData));
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('error', JSON.stringify(e));
    }
  };

  const onPressToggle = () => {
    formMethods.reset();
    setIsLogin(!isLogin);
  };

  return (
    <SafeArea padder style={[Layout.center]}>
      <Text variant="title-regular" style={Gutters.largeBMargin}>
        {isLogin ? 'Login' : 'Register'}
      </Text>
      {isLogin && (
        <Form style={Layout.fullWidth} {...formMethods}>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            returnKeyType="next"
            style={Gutters.regularBMargin}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            returnKeyType="done"
            style={Gutters.largeBMargin}
          />
        </Form>
      )}
      {!isLogin && (
        <Form style={Layout.fullWidth} {...formMethods}>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            returnKeyType="next"
            style={Gutters.regularBMargin}
          />
          <Input
            type="text"
            name="username"
            placeholder="Username"
            returnKeyType="next"
            style={Gutters.regularBMargin}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            returnKeyType="done"
            style={Gutters.largeBMargin}
          />
        </Form>
      )}
      {isError && (
        <Text status="error" style={Gutters.regularBMargin}>
          {JSON.stringify(error)}
        </Text>
      )}
      <View style={Layout.fullWidth}>
        <Button
          loading={isLoading}
          onPress={formMethods.handleSubmit(onPressSubmit)}
          style={Gutters.regularBMargin}>
          {isLogin ? 'Login' : 'Register'}
        </Button>
        <Button appearance="ghost" disabled={isLoading} onPress={onPressToggle}>
          {isLogin ? 'Register here' : 'Login here'}
        </Button>
      </View>
    </SafeArea>
  );
};

export default AuthenticationContainer;

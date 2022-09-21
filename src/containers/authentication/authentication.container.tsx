import React, { useState } from 'react';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup';

import { useAppDispatch } from '@/store';
import { setCredentials, AuthState } from '@/store/auth';
import { usePostLoginMutation, Credential } from '@/services/auth';

import { useTheme } from '@/hooks';
import { SafeArea, Input, Button, Text, Form } from '@/components/ui';

const AuthenticationContainer = () => {
  const navigation = useNavigation();
  const themes = useTheme();
  const dispatch = useAppDispatch();
  const [isLogin, setIsLogin] = useState(true);

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

  const onPressSubmit = (data: any) => {
    if (isLogin) {
      loginRequest(data);
    } else {
      registerRequest(data);
    }
  };

  const onPressToggle = () => {
    formMethods.reset();
    setIsLogin(!isLogin);
  };

  const loginRequest = async (data: any) => {
    try {
      const params: Credential = {
        user: data.username,
        pwd: data.password,
      };

      const res = await postLoginRequest(params).unwrap();

      const userData: AuthState = {
        user: params,
        accessToken: res.accessToken,
      };

      dispatch(setCredentials(userData));
      navigation.goBack();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('error', JSON.stringify(e));
    }
  };

  const registerRequest = async (data: any) => {
    // eslint-disable-next-line no-console
    console.log('data', data);
  };

  return (
    <SafeArea padder style={[themes.Layout.center]}>
      <Text variant="title-regular" style={themes.Gutters.largeBMargin}>
        {isLogin ? 'Login' : 'Register'}
      </Text>
      {isLogin && (
        <Form style={themes.Layout.fullWidth} {...formMethods}>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            returnKeyType="next"
            style={themes.Gutters.regularBMargin}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            returnKeyType="done"
            style={themes.Gutters.largeBMargin}
          />
        </Form>
      )}
      {!isLogin && (
        <Form style={themes.Layout.fullWidth} {...formMethods}>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            returnKeyType="next"
            style={themes.Gutters.regularBMargin}
          />
          <Input
            type="text"
            name="username"
            placeholder="Username"
            returnKeyType="next"
            style={themes.Gutters.regularBMargin}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            returnKeyType="done"
            style={themes.Gutters.largeBMargin}
          />
        </Form>
      )}
      {isError && (
        <Text status="error" style={themes.Gutters.regularBMargin}>
          {JSON.stringify(error)}
        </Text>
      )}
      <View style={themes.Layout.fullWidth}>
        <Button
          loading={isLoading}
          onPress={formMethods.handleSubmit(onPressSubmit)}
          style={themes.Gutters.regularBMargin}>
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

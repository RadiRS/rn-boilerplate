import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useTheme } from '@/hooks';
import { ThemeVariables } from '@/types/theme';
import { ScrollView, SafeArea, Input, Button, Form } from '@/components/ui';

interface FormValues {
  name: string;
  email: string;
  password: string;
  about: string;
}

const schema = yup
  .object({
    name: yup.string().required('Name is required'),
    email: yup
      .string()
      .required('Email is required')
      .email('Using valid email'),
    password: yup.string().required('Password is required'),
  })
  .required();

const FormInputContainer = () => {
  const themes = useTheme();
  const extStyles = styles(themes);
  const formMethods = useForm<FormValues>({ resolver: yupResolver(schema) });

  const onSubmit = (data: FormValues) => {
    // eslint-disable-next-line no-console
    console.log('data', data);
  };

  return (
    <SafeArea>
      <ScrollView contentContainerStyle={extStyles.scrollContainer}>
        <Form {...formMethods}>
          <Input
            name="name"
            label="Name"
            placeholder="Type your name"
            style={themes.Gutters.regularBMargin}
          />
          <Input
            name="email"
            label="Email"
            type="email"
            placeholder="Type your email"
            style={themes.Gutters.regularBMargin}
          />
          <Input
            name="password"
            label="Password"
            type="password"
            placeholder="Type your password"
            style={themes.Gutters.regularBMargin}
          />
          <Input
            name="about"
            label="About you"
            type="textarea"
            placeholder="Type about your self"
          />
        </Form>
      </ScrollView>
      <View style={themes.Gutters.regularHPadding}>
        <Button onPress={formMethods.handleSubmit(onSubmit)}>Submit</Button>
      </View>
    </SafeArea>
  );
};

const styles = (themes: ThemeVariables) =>
  StyleSheet.create({
    scrollContainer: {
      padding: themes.MetricsSizes.regular,
    },
  });

export default FormInputContainer;

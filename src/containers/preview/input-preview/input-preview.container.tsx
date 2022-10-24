import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { KeyboardAwareScrollView as ScrollView } from 'react-native-keyboard-aware-scroll-view';

import { useTheme } from '@/hooks';
import { ThemeVariables } from '@/types/theme';
import { SafeArea, Input, Button, Form, Checkbox } from '@/components/ui';
import { MasksHelper } from '@/helpers';

interface FormValues {
  name: string;
  email: string;
  password: string;
  about: string;
  phone: string;
  agreement: boolean;
}

const schema = yup
  .object({
    name: yup.string().required('Name is required'),
    email: yup
      .string()
      .required('Email is required')
      .email('Using valid email'),
    password: yup.string().required('Password is required'),
    phone: yup.string().required('Phone is required'),
    agreement: yup.bool().isTrue(),
  })
  .required();

const InputPreviewContainer = () => {
  const themes = useTheme();
  const extStyles = styles(themes);
  const formMethods = useForm<FormValues>({ resolver: yupResolver(schema) });

  const onSubmit = (data: FormValues) => {
    // eslint-disable-next-line no-console
    console.log('data', data);
  };

  return (
    <SafeArea>
      <ScrollView
        contentContainerStyle={extStyles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <Form {...formMethods}>
          <Input
            name="name"
            label="Name"
            type="text"
            placeholder="Type your name"
            returnKeyType="next"
            style={themes.Gutters.regularBMargin}
          />
          <Input
            name="email"
            label="Email"
            type="email"
            placeholder="Type your email"
            returnKeyType="next"
            style={themes.Gutters.regularBMargin}
          />
          <Input
            name="password"
            label="Password"
            type="password"
            placeholder="Type your password"
            returnKeyType="next"
            style={themes.Gutters.regularBMargin}
          />
          <Input
            name="address"
            label="Address"
            type="textarea"
            placeholder="Type about your address"
            style={themes.Gutters.regularBMargin}
          />
          <Input
            name="phone"
            label="Phone"
            type="text"
            keyboardType="number-pad"
            placeholder="Type about your phone number"
            returnKeyType="next"
            mask={MasksHelper.ID_PHONE}
            style={themes.Gutters.regularBMargin}
          />
          <Input
            name="salary"
            type="currency"
            label="Salary"
            placeholder="Type about your expected salary"
            returnKeyType="next"
            style={themes.Gutters.regularBMargin}
          />
          <Input
            name="hobbies"
            label="Hobbies"
            type="text"
            placeholder="Type about your hobbies"
            returnKeyType="done"
            style={themes.Gutters.regularBMargin}
          />
          <Controller
            name="agreement"
            control={formMethods.control}
            defaultValue={false}
            render={({ field: { name, value }, formState: { errors } }) => {
              const error = errors[name]?.message;

              const onPress = () => {
                formMethods.setValue(name, !value);
                formMethods.trigger('agreement');
              };

              return (
                <Checkbox
                  title="Agree with terms and condition"
                  isChecked={value}
                  onPress={onPress}
                  error={error}
                />
              );
            }}
          />
        </Form>
      </ScrollView>
      <View
        style={[
          themes.Gutters.regularHPadding,
          themes.Gutters.regularBPadding,
        ]}>
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

export default InputPreviewContainer;

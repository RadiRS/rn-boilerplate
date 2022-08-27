import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import React from 'react';

interface TextProps extends RNTextProps {}

const Text = (props: TextProps) => {
  return <RNText {...props} />;
};

export default Text;

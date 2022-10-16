import React from 'react';
import { View as RNView, ViewProps as RNViewProps } from 'react-native';

interface ViewProps extends RNViewProps {}

const View: React.FC<ViewProps> = ({ children, ...props }: ViewProps) => {
  return <RNView {...props}>{children}</RNView>;
};

export default View;

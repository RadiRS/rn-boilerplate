import React from 'react';
import { Button, Text } from 'native-base';
import { Colors } from '../../../theme';

const ButtonLabel = props => {
  const {
    buttonColor = Colors.primary,
    labelColor = Colors.textButton,
    label,
    ...restprops
  } = props;

  return (
    <Button style={{ backgroundColor: buttonColor }} {...restprops}>
      <Text uppercase={false} style={{ fontSize: 20, color: labelColor }}>
        {label}
      </Text>
    </Button>
  );
};

export default ButtonLabel;

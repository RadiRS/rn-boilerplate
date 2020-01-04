import React from 'react';
import PropTypes from 'prop-types';
import {TextInput} from 'react-native';

import styles from './text-area.component.style';

const TextArea = props => {
  const {value, style, onChangeText, ...extraProps} = props;

  return (
    <TextInput
      value={value}
      multiline={true}
      style={[styles.textArea, style]}
      onChangeText={onChangeText}
      {...extraProps}
    />
  );
};

TextArea.propTypes = {
  style: PropTypes.object,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired
};

export default TextArea;

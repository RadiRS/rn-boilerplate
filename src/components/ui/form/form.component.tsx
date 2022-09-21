import React, { useRef } from 'react';
import { TextInput, View, ViewStyle } from 'react-native';
import { Controller, Control, FieldValues } from 'react-hook-form';

import { Input } from '@/components/ui';
import { InputTypes, isOfTypeInput } from '@/components/ui/input/types';

interface ControlMap {
  [key: string]: FieldValues | undefined;
}

interface FormProps {
  control: ControlMap;
  style?: ViewStyle;
  children: JSX.Element | JSX.Element[];
}

const Form = ({ children, control, style }: FormProps) => {
  const refInputs = useRef<TextInput[]>([]);
  const isChildArray = Array.isArray(children);
  const listChildren = isChildArray ? [...children] : [children];

  return (
    <View style={style}>
      {listChildren.map((child, i) => {
        const type: InputTypes = child.props.type;
        const isHaveName = !!child.props.name;
        const isTextarea = type === 'textarea';
        const isInput = isOfTypeInput(type);

        const initRef = (e: TextInput) => {
          refInputs.current[i] = e;
        };

        const onSubmitEditing = () => {
          if (isTextarea) {
            return;
          }

          const refCurrentInput = refInputs.current[i];
          const refNextInput = refInputs.current[i + 1];
          refNextInput ? refNextInput.focus() : refCurrentInput.blur();
        };

        return isHaveName && isInput ? (
          <Controller
            key={child.props.name}
            name={child.props.name}
            control={control as Control<ControlMap>}
            render={({
              field: { onChange, value, name },
              formState: { errors },
            }) => (
              <Input
                {...child.props}
                ref={initRef}
                onSubmitEditing={onSubmitEditing}
                blurOnSubmit={false}
                onChangeText={onChange}
                value={value}
                error={errors[name]?.message}
              />
            )}
          />
        ) : (
          child
        );
      })}
    </View>
  );
};

export default Form;

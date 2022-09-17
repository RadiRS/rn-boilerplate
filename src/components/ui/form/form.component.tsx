import React, { useRef } from 'react';
import { TextInput } from 'react-native';
import { Controller, Control, FieldValues } from 'react-hook-form';

import { Input } from '@/components/ui';

interface ControlMap {
  [key: string]: FieldValues | undefined;
}

interface FormProps {
  control: ControlMap;
  children: JSX.Element | JSX.Element[];
}

const Form = ({ children, control }: FormProps) => {
  const refInputs = useRef<TextInput[]>([]);
  const isChildArray = Array.isArray(children);
  const listChildren = isChildArray ? [...children] : [children];

  return (
    <>
      {listChildren.map((child, i) => {
        const isHaveName = !!child.props.name;
        const isTextarea = child.props.type === 'textarea';

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

        return isHaveName ? (
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
    </>
  );
};

export default Form;

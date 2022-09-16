import React from 'react';
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
  const isChildArray = Array.isArray(children);
  const listChildren = isChildArray ? [...children] : [children];

  return (
    <>
      {listChildren.map((child, _) => {
        return child.props.name ? (
          <Controller
            key={child.props.name}
            name={child.props.name}
            control={control as Control<ControlMap>}
            render={({
              field: { onChange, onBlur, value, name },
              formState: { errors },
            }) => (
              <Input
                {...child.props}
                onBlur={onBlur}
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

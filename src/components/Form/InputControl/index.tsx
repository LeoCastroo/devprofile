import React from 'react';
import { TextInputProps } from 'react-native';
import { Control, Controller, FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { Container, Error } from './styles';
import { Input } from '../Input';

interface Props extends TextInputProps {
  control: Control;
  name: string;
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | string | undefined;
}

export const InputControl: React.FunctionComponent<Props> = ({
  control,
  name,
  error,
  ...otherProps
}) => {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...otherProps} />
        )}
        name={name}
      />
      {error && <Error>{error.toString()}</Error>}
    </Container>
  );
};

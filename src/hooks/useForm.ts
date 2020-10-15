import { ChangeEvent, useState } from 'react';
import { Struct, StructError, validate as validateSchema } from 'superstruct';

export type HTMLValueElement = HTMLElement & { name: string; value: string };

export interface InputProps {
  name: string;
  value: string;
  onChange(event: ChangeEvent<HTMLValueElement>): void;
}

export interface Form<T> {
  values: Partial<T>;

  getInputProps(name: string): InputProps;
  handleChange(event: ChangeEvent<HTMLValueElement>): void;
  validate(): [StructError, undefined] | [undefined, T];
}

export const getDefaultValue = <T>(schema: Record<string, Struct<unknown>>): T => {
  return Object.keys(schema).reduce<T>((object, key) => {
    return {
      ...object,
      [key]: ''
    };
  }, {} as T);
};

export const useForm = <T extends Record<string, unknown>>(schema: Struct<T>): Form<T> => {
  const [values, setValues] = useState<T>(getDefaultValue(schema.schema));

  const handleChange = (event: ChangeEvent<HTMLValueElement>): void => {
    const name = event.target.name;
    const value = event.target.value;

    setValues(data => ({ ...data, [name]: value }));
  };

  const validate = (): [StructError, undefined] | [undefined, T] => {
    try {
      return validateSchema(values, schema);
    } catch (e) {
      return [e, undefined];
    }
  };

  const getInputProps = (name: string): InputProps => {
    return {
      name,
      value: String(values[name]),
      onChange: handleChange
    };
  };

  return {
    values,

    getInputProps,
    handleChange,
    validate
  };
};

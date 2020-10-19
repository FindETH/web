import { ChangeEvent, FormEvent, useState } from 'react';
import { Struct, validate as validateSchema } from 'superstruct';

export type HTMLValueElement = HTMLElement & { name: string; value: string };

export interface FieldProps {
  hasError: boolean;
}

export interface InputProps {
  name: string;
  value: string;
  hasError: boolean;

  onChange(event: FormEvent<HTMLValueElement>): void;
}

export interface Form<T> {
  values: Partial<T>;
  errors: string[];

  getFieldProps(name: string): FieldProps;
  getInputProps(name: string): InputProps;
  handleChange(event: ChangeEvent<HTMLValueElement>): void;
  validate(): T | undefined;
  clear(): void;
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
  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (event: ChangeEvent<HTMLValueElement>): void => {
    const name = event.target.name;
    const value = event.target.value;

    setValues((data) => ({ ...data, [name]: value }));

    if (errors.includes(name)) {
      setErrors((state) => state.filter((current) => current !== name));
    }
  };

  const validate = (): T | undefined => {
    const [error, validated] = validateSchema(values, schema);
    if (error) {
      setErrors(error.path as string[]);
      return;
    }

    return validated;
  };

  const clear = (): void => setValues(getDefaultValue(schema.schema));

  const getFieldProps = (name: string): FieldProps => {
    return {
      hasError: errors.includes(name)
    };
  };

  const getInputProps = (name: string): InputProps => {
    return {
      name,
      value: String(values[name]),
      hasError: errors.includes(name),

      onChange: handleChange
    };
  };

  return {
    values,
    errors,

    getFieldProps,
    getInputProps,
    handleChange,
    validate,
    clear
  };
};

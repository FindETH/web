import { ChangeEvent, useState } from 'react';
import { Struct, StructError, validate as validateSchema } from 'superstruct';

export type HTMLValueElement = HTMLElement & { name: string; value: string };

export interface Form<T> {
  values: Partial<T>;

  getInputProps(): { onChange(event: ChangeEvent<HTMLValueElement>): void };
  handleChange(event: ChangeEvent<HTMLValueElement>): void;
  validate(): [StructError, undefined] | [undefined, T];
}

export const getDefaultValue = <T>(schema: Record<string, Struct<unknown>>): Partial<T> => {
  return Object.keys(schema).reduce((object, key) => {
    return {
      ...object,
      [key]: ''
    };
  }, {});
};

export const useForm = <T>(schema: Struct<T>): Form<T> => {
  const [values, setValues] = useState<Partial<T>>(getDefaultValue(schema.schema));

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

  const getInputProps = (): { onChange: typeof handleChange } => {
    return {
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

import React, { FunctionComponent } from 'react';
import { object, pattern, string } from 'superstruct';
import Button from '../../../components/ui/Button';
import Container from '../../../components/ui/Container';
import { useForm , useDispatch } from '../../../hooks';
import { setAddress } from '../../../store/derivation';
import { FlowComponentProps } from '../Flow';

type Props = FlowComponentProps;

const ADDRESS_SCHEMA = object({
  address: pattern(string(), /^0x[a-fA-F0-9]{40}$/)
});

const Address: FunctionComponent<Props> = ({ onNext }) => {
  const { getInputProps, validate } = useForm(ADDRESS_SCHEMA);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const [error, values] = validate();
    if (!error && values) {
      dispatch(setAddress(values.address));

      onNext();
      return;
    }

    // TODO
    // eslint-disable-next-line no-console
    console.log(error?.path, values);
  };

  return (
    <Container>
      <input name="address" {...getInputProps()} />
      <Button onClick={handleSubmit}>Next</Button>
    </Container>
  );
};

export default Address;

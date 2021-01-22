import { FunctionComponent } from 'react';
import { object, pattern, refine, string } from 'superstruct';
import Button from '../../../components/Button';
import Card, { CardHeader } from '../../../components/Card';
import { CardContent } from '../../../components/Card/Card.styles';
import Field from '../../../components/Field';
import Heading from '../../../components/Heading';
import Input from '../../../components/Input';
import InputGroup from '../../../components/InputGroup';
import Typography from '../../../components/Typography';
import { useDispatch, useForm, useSelector } from '../../../utils/hooks';
import { addAddress } from '../../search';
import { FlowComponentProps } from '../Flow';
import AddressList from './AddressList';

type Props = FlowComponentProps;

const Address: FunctionComponent<Props> = ({ onNext }) => {
  const ADDRESS_SCHEMA = object({
    address: refine(pattern(string(), /^0x[a-fA-F0-9]{40}$/), 'Unique', (value) => {
      return !addresses.includes(value);
    })
  });

  const { getFieldProps, getInputProps, validate, clear } = useForm(ADDRESS_SCHEMA);
  const addresses = useSelector((state) => state.search.addresses);
  const dispatch = useDispatch();

  const handleAdd = () => {
    const values = validate();
    if (values) {
      dispatch(addAddress(values.address));
      clear();
    }
  };

  const handleSubmit = () => {
    if (addresses.length > 0) {
      onNext();
    }
  };

  return (
    <Card>
      <CardHeader>
        <Heading as="h3">Enter the address(es) you are looking for</Heading>
        <Typography>You can enter a regular Ethereum address, as well as ENS addresses.</Typography>
      </CardHeader>
      <CardContent>
        <Field label="Address" {...getFieldProps('address')}>
          <InputGroup>
            <Input placeholder="0x1234..." {...getInputProps('address')} />
            <Button data-test-id="add" variant="primary" onClick={handleAdd}>
              Add
            </Button>
          </InputGroup>
        </Field>

        <AddressList />

        <Button data-test-id="submit" onClick={handleSubmit} disabled={addresses.length === 0}>
          Next
        </Button>
      </CardContent>
    </Card>
  );
};

export default Address;

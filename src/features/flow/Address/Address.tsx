import { FunctionComponent } from 'react';
import { object, pattern, refinement, string } from 'superstruct';
import Card, { CardHeader } from '../../../components/Card';
import { CardContent } from '../../../components/Card/Card.styles';
import Field from '../../../components/Field';
import Input from '../../../components/Input';
import InputGroup from '../../../components/InputGroup';
import Button from '../../../components/ui/Button';
import Heading from '../../../components/ui/Heading';
import Typography from '../../../components/ui/Typography';
import { useDispatch, useForm, useSelector } from '../../../hooks';
import { addAddress } from '../../search';
import { FlowComponentProps } from '../Flow';
import AddressList from './AddressList';

type Props = FlowComponentProps;

const Address: FunctionComponent<Props> = ({ onNext }) => {
  const ADDRESS_SCHEMA = object({
    address: refinement(pattern(string(), /^0x[a-fA-F0-9]{40}$/), 'Unique', value => {
      return !addresses.includes(value);
    })
  });

  const { getFieldProps, getInputProps, validate, clear } = useForm(ADDRESS_SCHEMA);
  const addresses = useSelector(state => state.search.addresses);
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
            <Button data-testid="add" type="primary" onClick={handleAdd}>
              Add
            </Button>
          </InputGroup>
        </Field>

        <AddressList />

        <Button data-testid="submit" onClick={handleSubmit} disabled={addresses.length === 0}>
          Next
        </Button>
      </CardContent>
    </Card>
  );
};

export default Address;

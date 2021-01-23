import { FunctionComponent, KeyboardEvent } from 'react';
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
import { addAddress, ADDRESS_REGEX, ENS_REGEX, isLoadingAddresses, resolveAddress } from '../../search';
import { FlowComponentProps } from '../Flow';
import AddressList from './AddressList';

type Props = FlowComponentProps;

const Address: FunctionComponent<Props> = ({ onNext }) => {
  const ADDRESS_SCHEMA = object({
    address: refine(pattern(string(), ADDRESS_REGEX), 'Unique', (value) => {
      return !addresses.find(({ address }) => address === value);
    })
  });

  const { getFieldProps, getInputProps, validate, clear } = useForm(ADDRESS_SCHEMA);
  const addresses = useSelector((state) => state.search.addresses);
  const isLoading = useSelector(isLoadingAddresses);
  const dispatch = useDispatch();

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAdd();
    }
  };

  const handleAdd = () => {
    const values = validate();
    if (values) {
      dispatch(addAddress(values.address));
      clear();

      if (values.address.match(ENS_REGEX)) {
        dispatch(resolveAddress(values.address));
      }
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
            <Input placeholder="0x1234..." {...getInputProps('address')} onKeyDown={handleKeyPress} />
            <Button data-test-id="add" variant="primary" onClick={handleAdd}>
              Add
            </Button>
          </InputGroup>
        </Field>

        <AddressList />

        <Button
          data-test-id="submit"
          onClick={handleSubmit}
          loading={isLoading}
          disabled={isLoading || addresses.length === 0}>
          Next
        </Button>
      </CardContent>
    </Card>
  );
};

export default Address;

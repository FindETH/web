import { FunctionComponent } from 'react';
import { object, pattern, string } from 'superstruct';
import Card, { CardHeader } from '../../../components/Card';
import { CardContent } from '../../../components/Card/Card.styles';
import Button from '../../../components/ui/Button';
import Heading from '../../../components/ui/Heading';
import Typography from '../../../components/ui/Typography';
import { useDispatch, useForm } from '../../../hooks';
import { setAddress } from '../../search';
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
    <Card>
      <CardHeader>
        <Heading as="h3">Enter the address(es) you are looking for</Heading>
        <Typography>You can enter a regular Ethereum address, as well as ENS addresses.</Typography>
      </CardHeader>
      <CardContent>
        <input {...getInputProps('address')} />
        <Button onClick={handleSubmit}>Next</Button>
      </CardContent>
    </Card>
  );
};

export default Address;

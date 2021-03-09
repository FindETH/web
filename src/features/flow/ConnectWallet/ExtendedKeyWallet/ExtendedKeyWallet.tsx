import { ExtendedKey, isExtendedKey, Wallet } from '@findeth/wallets';
import { FunctionComponent } from 'react';
import { object, refine, string } from 'superstruct';
import Button from '../../../../components/Button';
import Card, { CardHeader } from '../../../../components/Card';
import { CardContent } from '../../../../components/Card/Card.styles';
import Field from '../../../../components/Field';
import Heading from '../../../../components/Heading';
import Input from '../../../../components/Input';
import Typography from '../../../../components/Typography';
import { useForm } from '../../../../utils/hooks';

const EXTENDED_KEY_SCHEMA = object({
  extendedKey: refine(string(), 'Extended Key', (value) => {
    return isExtendedKey(value);
  })
});

interface Props {
  onNext(wallet: Wallet): void;
}

// TODO: Only allow xprvs on the local version
const ExtendedKeyWallet: FunctionComponent<Props> = ({ onNext }) => {
  const { validate, getFieldProps, getInputProps } = useForm(EXTENDED_KEY_SCHEMA);

  const handleNext = () => {
    const values = validate();
    if (values) {
      const wallet = new ExtendedKey(values.extendedKey);
      onNext(wallet);
    }
  };

  return (
    <Card>
      <CardHeader>
        <Heading as="h3">Enter your extended key</Heading>
        <Typography>The extended key starts with xpub or xprv.</Typography>
      </CardHeader>
      <CardContent>
        <Field label="Extended key" {...getFieldProps('extendedKey')}>
          <Input placeholder="xpub..." {...getInputProps('extendedKey')} />
        </Field>
        <Button onClick={handleNext}>Next</Button>
      </CardContent>
    </Card>
  );
};

export default ExtendedKeyWallet;

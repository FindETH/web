import { MnemonicPhrase, Wallet, isValidMnemonic } from '@findeth/wallets';
import { FunctionComponent } from 'react';
import { object, optional, refine, string } from 'superstruct';
import Button from '../../../../components/Button';
import Card, { CardHeader } from '../../../../components/Card';
import { CardContent } from '../../../../components/Card/Card.styles';
import Field from '../../../../components/Field';
import Heading from '../../../../components/Heading';
import Input from '../../../../components/Input';
import Typography from '../../../../components/Typography';
import { useForm } from '../../../../utils/hooks';
import CheckLocal from '../../CheckLocal';

const MNEMONIC_SCHEMA = object({
  mnemonic: refine(string(), 'Mnemonic Phrase', (value) => {
    return isValidMnemonic(value);
  }),
  passphrase: optional(string())
});

interface Props {
  onNext(wallet: Wallet): void;
}

const MnemonicWallet: FunctionComponent<Props> = ({ onNext }) => {
  const { validate, getFieldProps, getInputProps } = useForm(MNEMONIC_SCHEMA);

  const handleNext = () => {
    const values = validate();
    if (values) {
      const wallet = new MnemonicPhrase(values.mnemonic, values.passphrase || undefined);
      onNext(wallet);
    }
  };

  return (
    <CheckLocal>
      <Card>
        <CardHeader>
          <Heading as="h3">Enter your mnemonic phrase</Heading>
          <Typography>The mnemonic phrase (usually) consists of 12 or 24 words, and an optional passphrase.</Typography>
        </CardHeader>
        <CardContent>
          <Field label="Mnemonic Phrase" {...getFieldProps('mnemonic')}>
            <Input placeholder="quote park size..." {...getInputProps('mnemonic')} />
          </Field>
          <Field label="Passphrase (Optional)" {...getFieldProps('passphrase')}>
            <Input type="password" {...getInputProps('passphrase')} />
          </Field>
          <Button onClick={handleNext}>Next</Button>
        </CardContent>
      </Card>
    </CheckLocal>
  );
};

export default MnemonicWallet;

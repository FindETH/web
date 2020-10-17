import { MnemonicPhrase, Wallet } from '@findeth/wallets';
import { FunctionComponent } from 'react';
import Card, { CardHeader } from '../../../../components/Card';
import Button from '../../../../components/ui/Button';
import Container from '../../../../components/ui/Container';
import Heading from '../../../../components/ui/Heading';
import Typography from '../../../../components/ui/Typography';

interface Props {
  onNext(wallet: Wallet): void;
}

// TODO
const MnemonicWallet: FunctionComponent<Props> = ({ onNext }) => {
  const implementation = new MnemonicPhrase('test test test test test test test test test test test ball');

  const handleNext = () => onNext(implementation);

  return (
    <Card>
      <CardHeader>
        <Heading as="h3">Enter your mnemonic phrase</Heading>
        <Typography>The mnemonic phrase (usually) consists of 12 or 24 words, and an optional passphrase.</Typography>
      </CardHeader>

      <Button onClick={handleNext}>Next</Button>
    </Card>
  );
};

export default MnemonicWallet;

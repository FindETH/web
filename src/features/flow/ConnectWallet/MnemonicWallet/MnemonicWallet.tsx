import { MnemonicPhrase, Wallet } from '@findeth/wallets';
import React, { FunctionComponent } from 'react';
import Button from '../../../../components/ui/Button';
import Container from '../../../../components/ui/Container';
import Typography from '../../../../components/ui/Typography';

interface Props {
  onNext(wallet: Wallet): void;
}

// TODO
const MnemonicWallet: FunctionComponent<Props> = ({ onNext }) => {
  const implementation = new MnemonicPhrase('test test test test test test test test test test test ball');

  const handleNext = () => onNext(implementation);

  return (
    <Container>
      <Typography>Enter mnemonic phrase</Typography>

      <Button onClick={handleNext}>Next</Button>
    </Container>
  );
};

export default MnemonicWallet;

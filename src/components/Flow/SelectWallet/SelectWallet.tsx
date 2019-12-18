import { WalletType } from '@findeth/wallets';
import React, { FunctionComponent } from 'react';
import { FlowComponentProps } from '../../../hooks';
import Container from '../../ui/Container';
import Heading from '../../ui/Heading';
import List from '../../ui/List';
import Section from '../../ui/Section';
import Typography from '../../ui/Typography';
import Ledger from './Ledger';
import Trezor from './Trezor';

type Props = FlowComponentProps<{ wallet: WalletType }>;

const SelectWallet: FunctionComponent<Props> = ({ onNext }) => {
  const handleNext = (wallet: WalletType) => {
    return onNext({ wallet });
  };

  return (
    <Section>
      <Container>
        <Heading as="h2">Select a wallet type</Heading>
        <Typography>Choose one of the available wallet types from the list below.</Typography>
      </Container>
      <Container small={true}>
        <List>
          <Ledger onSelect={handleNext} />
          <Trezor onSelect={handleNext} />
        </List>
      </Container>
    </Section>
  );
};

export default SelectWallet;

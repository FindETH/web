import { TransportWrapper, WalletType } from '@findeth/wallets';
import React, { FunctionComponent } from 'react';
import { WalletWithTransport } from '../../../containers/Flow/EtherFlow';
import MetaData from '../../MetaData';
import { PAGE_TRANSITION_PROPS } from '../../PageTransition';
import Container from '../../ui/Container';
import Heading from '../../ui/Heading';
import List from '../../ui/List';
import Section from '../../ui/Section';
import Typography from '../../ui/Typography';
import { FlowComponentProps } from '../Flow';
import Ledger from './Ledger';
import Trezor from './Trezor';

type Props = FlowComponentProps<{ wallet: WalletWithTransport }>;

const SelectWallet: FunctionComponent<Props> = ({ onNext }) => {
  const handleNext = (type: WalletType, transport?: new () => TransportWrapper<unknown>) => {
    if (type === WalletType.Ledger) {
      return onNext({ wallet: { type, transport } });
    }
    return onNext({ wallet: { type } });
  };

  return (
    <Section {...PAGE_TRANSITION_PROPS}>
      <MetaData title="Select a wallet type" />

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

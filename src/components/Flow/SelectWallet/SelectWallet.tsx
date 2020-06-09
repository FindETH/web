import { WalletType } from '@findeth/wallets';
import React, { FunctionComponent } from 'react';
import Meta from '../../Meta';
import { PAGE_TRANSITION_PROPS } from '../../PageTransition';
import Container from '../../ui/Container';
import GridContainer from '../../ui/GridContainer';
import Heading from '../../ui/Heading';
import Section from '../../ui/Section';
import Typography from '../../ui/Typography';
import { FlowComponentProps } from '../Flow';
import WalletPanel from './WalletPanel/WalletPanel';

type Props = FlowComponentProps<{ wallet: WalletType }>;

const WALLET_TYPES = [
  {
    title: 'Ledger',
    type: WalletType.Ledger
  },
  {
    title: 'Trezor',
    type: WalletType.Trezor
  },
  {
    title: 'KeepKey',
    type: WalletType.KeepKey
  },
  {
    title: 'Mnemonic Phrase',
    type: WalletType.MnemonicPhrase
  }
];

const SelectWallet: FunctionComponent<Props> = ({ onNext }) => {
  const handleNext = (type: WalletType) => {
    return onNext({ wallet: type });
  };

  return (
    <Section {...PAGE_TRANSITION_PROPS}>
      <Meta title="Select a wallet type" />

      <Container>
        <Heading as="h2">Select a wallet type</Heading>
        <Typography>Choose one of the available wallet types from the list below.</Typography>

        <GridContainer rows={1} columns={WALLET_TYPES.length}>
          {WALLET_TYPES.map(({ title, type }) => (
            <WalletPanel key={title} title={title} type={type} onClick={handleNext} />
          ))}
        </GridContainer>
      </Container>
    </Section>
  );
};

export default SelectWallet;

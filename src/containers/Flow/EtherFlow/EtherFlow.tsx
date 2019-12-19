import { TransportWrapper, Wallet, WalletType } from '@findeth/wallets';
import React, { FunctionComponent } from 'react';
import AccessWallet from '../../../components/Flow/AccessWallet';
import SelectOptions from '../../../components/Flow/SelectOptions';
import SelectWallet from '../../../components/Flow/SelectWallet';
import PageTransition from '../../../components/PageTransition';
import Container from '../../../components/ui/Container';
import Heading from '../../../components/ui/Heading';
import { useFlow } from '../../../hooks';

export type WalletWithTransport =
  | { type: WalletType; transport?: undefined }
  | { type: WalletType.Ledger; transport?: new () => TransportWrapper<unknown> };

interface FlowState {
  wallet?: WalletWithTransport;
  implementation?: Wallet;
}

const FLOW_COMPONENTS = [SelectWallet, AccessWallet, SelectOptions];

const EtherFlow: FunctionComponent = () => {
  const handleDone = () => {
    // TODO
  };

  const [Component, props] = useFlow<FlowState>(FLOW_COMPONENTS, handleDone);

  return (
    <>
      <Container>
        <Heading as="h1">Search for Ether</Heading>
      </Container>
      <PageTransition>{Component && <Component {...props} />}</PageTransition>
    </>
  );
};

export default EtherFlow;

import React, { FunctionComponent } from 'react';
import SelectWallet from '../../../components/SelectWallet';
import Container from '../../../components/ui/Container';
import Heading from '../../../components/ui/Heading';
import { useFlow } from '../../../hooks';

// TODO: Move to `@findeth/core`
export enum Wallet {
  LedgerUSB,
  LedgerBLE,
  Trezor,
  KeepKey,
  MnemonicPhrase
}

interface FlowState {
  wallet?: Wallet;
}

const FLOW_COMPONENTS = [SelectWallet];

const EtherFlow: FunctionComponent = () => {
  const handleDone = () => {
    // TODO
  };

  const [component] = useFlow<FlowState>(FLOW_COMPONENTS, handleDone);
  return (
    <>
      <Container>
        <Heading as="h1">Search for Ether</Heading>
      </Container>
      {component}
    </>
  );
};

export default EtherFlow;

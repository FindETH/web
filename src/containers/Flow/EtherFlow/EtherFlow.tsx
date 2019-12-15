import { WalletType } from '@findeth/core';
import React, { FunctionComponent } from 'react';
import AccessWallet from '../../../components/Flow/AccessWallet';
import SelectWallet from '../../../components/Flow/SelectWallet';
import Container from '../../../components/ui/Container';
import Heading from '../../../components/ui/Heading';
import { useFlow } from '../../../hooks';

interface FlowState {
  wallet?: WalletType;
}

const FLOW_COMPONENTS = [SelectWallet, AccessWallet];

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

import { TransportWrapper, Wallet, WalletType } from '@findeth/wallets';
import React, { FunctionComponent } from 'react';
import Flow from '../../../components/Flow';
import AccessWallet from '../../../components/Flow/AccessWallet';
import SelectOptions from '../../../components/Flow/SelectOptions';
import SelectWallet from '../../../components/Flow/SelectWallet';

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

  return <Flow<FlowState> title="Search for Ether" components={FLOW_COMPONENTS} handleDone={handleDone} />;
};

export default EtherFlow;

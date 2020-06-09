import { TransportWrapper, Wallet, WalletType } from '@findeth/wallets';
import React, { FunctionComponent } from 'react';
import Flow from '../../../components/Flow';
import AccessWallet from '../../../components/Flow/AccessWallet';
import SelectOptions from '../../../components/Flow/SelectOptions';
import SelectWallet from '../../../components/Flow/SelectWallet';
import WalletOptions from '../../../components/Flow/WalletOptions';

export type WalletWithTransport =
  | { type: WalletType; transport?: undefined }
  | { type: WalletType.Ledger; transport?: new () => TransportWrapper<unknown, unknown> };

interface FlowState {
  wallet?: WalletType;
  implementation?: Wallet;
}

const FLOW_COMPONENTS = [SelectWallet, WalletOptions, AccessWallet, SelectOptions];

const EtherFlow: FunctionComponent = () => {
  const handleDone = () => {
    // TODO
  };

  return <Flow<FlowState> title="Search for Ether" components={FLOW_COMPONENTS} handleDone={handleDone} />;
};

export default EtherFlow;

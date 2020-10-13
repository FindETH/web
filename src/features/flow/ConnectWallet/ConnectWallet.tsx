import { WalletType } from '@findeth/wallets';
import React, { FunctionComponent } from 'react';
import { useSelector } from '../../../hooks';
import { FlowComponentProps } from '../Flow';
import HardwareWallet from './HardwareWallet';
import MnemonicPhrase from './MnemonicPhrase';

const components = {
  [WalletType.Ledger]: HardwareWallet,
  [WalletType.Trezor]: HardwareWallet,
  [WalletType.MnemonicPhrase]: MnemonicPhrase
};

type Props = FlowComponentProps;

const ConnectWallet: FunctionComponent<Props> = ({ onNext }) => {
  const type = useSelector(state => state.wallet.type);

  // TODO: Invalid state component
  if (!type) {
    return null;
  }

  const Component = components[type];
  return <Component onNext={onNext} />;
};

export default ConnectWallet;

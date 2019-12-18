import { WalletType } from '@findeth/wallets';
import React, { FunctionComponent } from 'react';
import trezorIcon from '../../../../assets/images/logos/trezor.svg';
import PanelItem from '../../../PanelItem';

interface Props {
  onSelect(wallet: WalletType): void;
}

const Trezor: FunctionComponent<Props> = ({ onSelect }) => {
  const handleSelect = () => {
    onSelect(WalletType.Trezor);
  };

  return (
    <PanelItem
      title="Trezor Wallet"
      description="Use your Trezor Model One or T"
      icon={trezorIcon}
      onClick={handleSelect}
    />
  );
};

export default Trezor;

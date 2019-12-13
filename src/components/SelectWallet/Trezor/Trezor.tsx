import React, { FunctionComponent } from 'react';
import trezorIcon from '../../../assets/images/logos/trezor.svg';
import { Wallet } from '../../../containers/Flow/EtherFlow/EtherFlow';
import PanelItem from '../../PanelItem';

interface Props {
  onSelect(wallet: Wallet): void;
}

const Trezor: FunctionComponent<Props> = ({ onSelect }) => {
  const handleSelect = () => {
    onSelect(Wallet.Trezor);
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

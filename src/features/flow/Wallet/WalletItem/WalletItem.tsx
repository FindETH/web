import { WalletType } from '@findeth/wallets';
import React, { FunctionComponent } from 'react';
import { WalletContainer } from './WalletItem.styles';

interface Props {
  type: WalletType;
  isSelected: boolean;
  onSelect(type: WalletType): void;
}

const WalletItem: FunctionComponent<Props> = ({ type, isSelected, onSelect }) => {
  const handleSelect = () => onSelect(type);

  return (
    <WalletContainer onClick={handleSelect}>
      {isSelected && 'x'} {type}
    </WalletContainer>
  );
};

export default WalletItem;

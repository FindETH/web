import { WalletType } from '@findeth/wallets';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface Props {
  type: WalletType;
  isSelected: boolean;
  onSelect(type: WalletType): void;
}

const WalletContainer = styled.li``;

const WalletItem: FunctionComponent<Props> = ({ type, isSelected, onSelect }) => {
  const handleSelect = () => onSelect(type);

  return (
    <WalletContainer onClick={handleSelect}>
      {isSelected && 'x'} {type}
    </WalletContainer>
  );
};

export default WalletItem;

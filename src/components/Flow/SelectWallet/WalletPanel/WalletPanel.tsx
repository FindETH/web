import { WalletType } from '@findeth/wallets';
import React, { FunctionComponent } from 'react';
import Panel from '../../../Panel';
import Heading from '../../../ui/Heading';

interface Props {
  title: string;
  type: WalletType;

  onClick(type: WalletType): void;
}

const WalletPanel: FunctionComponent<Props> = ({ title, type, onClick }) => {
  const handleClick = () => onClick(type);

  return (
    <Panel key={title} onClick={handleClick}>
      <Heading as="h3">{title}</Heading>
    </Panel>
  );
};

export default WalletPanel;

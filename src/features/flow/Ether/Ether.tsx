import { RouteComponentProps } from '@reach/router';
import { navigate } from 'gatsby';
import React, { FunctionComponent } from 'react';
import ConnectWallet from '../ConnectWallet';
import Flow from '../Flow';
import NetworkSelector from '../NetworkSelector';
import Wallet from '../Wallet';

type Props = RouteComponentProps;

const Ether: FunctionComponent<Props> = () => {
  const handleDone = () => {
    navigate('/search');
  };

  return <Flow components={[NetworkSelector, Wallet, ConnectWallet]} onDone={handleDone} />;
};

export default Ether;

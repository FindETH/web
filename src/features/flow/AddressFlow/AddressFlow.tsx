import { RouteComponentProps } from '@reach/router';
import { navigate } from 'gatsby';
import React, { FunctionComponent } from 'react';
import Address from '../Address';
import ConnectWallet from '../ConnectWallet';
import Flow from '../Flow';
import Wallet from '../Wallet';

type Props = RouteComponentProps;

const AddressFlow: FunctionComponent<Props> = () => {
  const handleDone = () => {
    navigate('/search');
  };

  return <Flow components={[Address, Wallet, ConnectWallet]} onDone={handleDone} />;
};

export default AddressFlow;

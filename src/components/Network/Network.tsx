import React, { FunctionComponent } from 'react';
import { useNetwork } from '../../hooks';
import Typography from '../ui/Typography';
import { NetworkContainer } from './Network.styles';

const NETWORK_CONNECTING = {
  name: 'Connecting',
  color: '#dcdcdc'
};

const Network: FunctionComponent = () => {
  const { network } = useNetwork('');

  return (
    <NetworkContainer>
      <Typography muted={true}>{network?.name ?? NETWORK_CONNECTING.name}</Typography>
    </NetworkContainer>
  );
};

export default Network;

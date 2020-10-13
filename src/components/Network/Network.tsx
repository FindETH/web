import React, { FunctionComponent } from 'react';
import { useSelector } from '../../hooks';
import Typography from '../ui/Typography';
import { NetworkContainer } from './Network.styles';

const NETWORK_OFFLINE = {
  name: 'Offline',
  color: '#dcdcdc'
};

const Network: FunctionComponent = () => {
  const network = useSelector(state => state.network.network);
  const isOnline = useSelector(state => state.network.isOnline);

  return (
    <NetworkContainer>
      <Typography muted={true}>{isOnline ? network.name : NETWORK_OFFLINE.name}</Typography>
    </NetworkContainer>
  );
};

export default Network;

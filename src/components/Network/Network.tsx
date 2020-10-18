import { FunctionComponent } from 'react';
import { useSelector } from '../../utils/hooks';
import Typography from '../Typography';
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

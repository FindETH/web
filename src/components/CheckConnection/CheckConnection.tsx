import { FunctionComponent } from 'react';
import { useSelector } from '../../utils/hooks';
import Card from '../Card';
import Typography from '../Typography';

const CheckConnection: FunctionComponent = ({ children }) => {
  const isOnline = useSelector(state => state.network.isOnline);
  const isConnected = useSelector(state => state.network.isConnected);

  if (isOnline && isConnected) {
    return <>{children}</>;
  }

  return (
    <Card>
      <Typography>This functionality requires an internet connection.</Typography>
    </Card>
  );
};

export default CheckConnection;

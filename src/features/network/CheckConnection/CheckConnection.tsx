import { FunctionComponent } from 'react';
import Card from '../../../components/Card';
import Typography from '../../../components/Typography';
import { useSelector } from '../../../utils/hooks';

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

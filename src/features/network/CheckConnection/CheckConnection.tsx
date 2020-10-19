import { FunctionComponent } from 'react';
import { useSelector } from '../../../utils/hooks';
import NoConnection from '../NoConnection';

const CheckConnection: FunctionComponent = ({ children }) => {
  const isOnline = useSelector((state) => state.network.isOnline);

  if (isOnline) {
    return <>{children}</>;
  }

  return <NoConnection />;
};

export default CheckConnection;

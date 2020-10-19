import { FunctionComponent } from 'react';
import Alert from '../../../components/Alert';
import Typography from '../../../components/Typography';
import { useDispatch, useSelector } from '../../../utils/hooks';
import { setNetworkError } from '../types';

const NetworkError: FunctionComponent = () => {
  const networkError = useSelector(state => state.network.networkError);
  const dispatch = useDispatch();

  const handleClose = () => dispatch(setNetworkError(undefined));

  if (networkError) {
    return (
      <Alert onClose={handleClose}>
        <Typography>
          <strong>A network error occurred.</strong>
        </Typography>
        <Typography>{networkError}</Typography>
      </Alert>
    );
  }

  return null;
};

export default NetworkError;

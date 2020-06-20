import { getNetwork, Network } from '@findeth/networks';
import { useEffect } from 'react';
import { setNetwork, setOnline } from '../store/network';
import { useDispatch } from './useDispatch';
import { useNotifications } from './useNotifications';
import { useSelector } from './useSelector';

export type NetworkResult =
  | {
      online: true;
      network: Network;
    }
  | {
      online: false;
      network: undefined;
    };

/**
 * React hook to get the current network from a provider.
 *
 * @return {NetworkResult}
 */
export const useNetwork = (provider: string): NetworkResult => {
  const { network, online } = useSelector(state => state.network);
  const dispatch = useDispatch();
  const { sendNotification } = useNotifications();

  const handleOnline = () => {
    dispatch(setOnline(true));

    getNetwork(provider).then(fetchedNetwork => dispatch(setNetwork(fetchedNetwork)));
  };

  const handleOnlineEvent = () => {
    sendNotification('You are now online!');
    handleOnline();
  };

  const handleOffline = () => {
    sendNotification('You are offline, some functionality may not be available.', 'warning');
    dispatch(setOnline(false));
    dispatch(setNetwork(undefined));
  };

  useEffect(() => {
    if (!network) {
      if (navigator.onLine) {
        handleOnline();
      } else {
        handleOffline();
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('online', handleOnlineEvent);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnlineEvent);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return {
    online,
    network
  } as NetworkResult;
};

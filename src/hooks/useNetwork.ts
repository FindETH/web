import { getDefaultProvider, getNetwork, Network, NETWORK_OFFLINE } from '@findeth/networks';
import { useEffect } from 'react';
import { setNetwork, setOnline } from '../store/network';
import { useDispatch } from './useDispatch';
import { useNotifications } from './useNotifications';
import { useSelector } from './useSelector';

/**
 * React hook to get an instance of an Ethers.js provider.
 *
 * @return {Network | undefined}
 */
export const useNetwork = (): Network | undefined => {
  const network = useSelector(state => state.network.network);
  const dispatch = useDispatch();
  const { sendNotification } = useNotifications();

  const handleOnline = () => {
    dispatch(setOnline(true));

    const provider = getDefaultProvider();
    getNetwork(provider).then(fetchedNetwork => dispatch(setNetwork(fetchedNetwork)));
  };

  const handleOnlineEvent = () => {
    sendNotification('You are now online!');
    handleOnline();
  };

  const handleOffline = () => {
    sendNotification('You are offline, some functionality may not be available.', 'warning');
    dispatch(setNetwork(NETWORK_OFFLINE));
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

  return network;
};

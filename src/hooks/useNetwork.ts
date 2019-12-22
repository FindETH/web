import { getDefaultProvider, getNetwork, Network, NETWORK_OFFLINE } from '@findeth/networks';
import { useEffect } from 'react';
import { setNetwork, setOnline } from '../store/network';
import { useDispatch } from './useDispatch';
import { useSelector } from './useSelector';

/**
 * React hook to get an instance of an Ethers.js provider.
 *
 * @return {Network | undefined}
 */
export const useNetwork = (): Network | undefined => {
  const network = useSelector(state => state.network.network);
  const dispatch = useDispatch();

  const handleOnline = () => {
    dispatch(setOnline(true));

    const provider = getDefaultProvider();
    getNetwork(provider).then(fetchedNetwork => dispatch(setNetwork(fetchedNetwork)));
  };

  const handleOffline = () => {
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
    document.addEventListener('online', handleOnline);
    document.addEventListener('offline', handleOffline);

    return () => {
      document.removeEventListener('online', handleOnline);
      document.removeEventListener('offline', handleOffline);
    };
  }, []);

  return network;
};

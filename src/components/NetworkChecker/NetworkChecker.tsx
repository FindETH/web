import { FunctionComponent, useEffect } from 'react';
import { useDispatch } from '../../hooks';
import { setOnline } from '../../store/network';

/**
 * This component does not render anything. It only checks if there is an internet connection available, and updates the
 * Redux state appropriately.
 */
const NetworkChecker: FunctionComponent = () => {
  const dispatch = useDispatch();

  const handleOnline = () => {
    dispatch(setOnline(true));
  };

  const handleOffline = () => {
    dispatch(setOnline(false));
  };

  useEffect(() => {
    if (navigator.onLine) {
      handleOnline();
    } else {
      handleOffline();
    }

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return null;
};

export default NetworkChecker;

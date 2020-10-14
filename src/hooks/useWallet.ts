import { deserialize, Wallet } from '@findeth/wallets';
import { useMemo, useState } from 'react';
import { useSelector } from './useSelector';

export const useWallet = (): Wallet | undefined => {
  const serialised = useSelector(state => state.wallet.wallet);
  const [wallet, setWallet] = useState<Wallet>();

  useMemo(() => {
    if (serialised) {
      setWallet(deserialize(serialised));
    }
  }, [serialised]);

  return wallet;
};

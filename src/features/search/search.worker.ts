import { DerivationPath, DerivationResult, deserialize, getFullPath, Wallet } from '@findeth/wallets';
import { SerialisedWallet } from '../../types/wallet';

let wallet: Wallet;

export const setWallet = async (serialised: SerialisedWallet): Promise<void> => {
  wallet = deserialize(serialised);
};

export const deriveAddress = async (derivationPath: DerivationPath, index: number): Promise<DerivationResult> => {
  const address = await wallet.getAddress(derivationPath, index);

  return {
    address,
    derivationPath: getFullPath(derivationPath, index)
  };
};

// export default deriveAddress;

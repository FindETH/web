import { DerivationPath, DerivationResult, deserialize, getFullPath } from '@findeth/wallets';
import { SerialisedWallet } from '../../types/wallet';

export const deriveAddress = async (
  serialised: SerialisedWallet,
  derivationPath: DerivationPath,
  index: number
): Promise<DerivationResult> => {
  const wallet = deserialize(serialised);
  const address = await wallet.getAddress(derivationPath, index);

  return {
    address,
    derivationPath: getFullPath(derivationPath, index)
  };
};

// export default deriveAddress;

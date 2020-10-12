import { WalletType } from '@findeth/wallets';
import { SerialisedWallet } from '../../types/wallet';

export interface WalletState {
  initialised: boolean;
  type?: WalletType;
  wallet?: SerialisedWallet;
}

export const INITIAL_STATE: WalletState = {
  initialised: false
};

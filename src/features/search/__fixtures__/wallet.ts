import { MnemonicPhrase } from '@findeth/wallets';
import { SerialisedWallet } from '../../../types/wallet';

export const WALLET = new MnemonicPhrase('test test test test test test test test test test test ball');
export const SERIALISED_WALLET = WALLET.serialize() as SerialisedWallet;

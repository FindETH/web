import { DerivationResult as WalletDerivationResult } from '@findeth/wallets';
import { Brand } from './brand';

export enum SearchType {
  ALL = 'all',
  ADDRESS = 'address',
  ASSETS = 'assets'
}

// Balance has to be a string, since bigints aren't JSON serialisable
export type Balance = Brand<string, 'balance'>;

export type DerivationResult = WalletDerivationResult & {
  balances?: {
    native: Balance;
    tokens?: Record<string, Balance>;
  };
};

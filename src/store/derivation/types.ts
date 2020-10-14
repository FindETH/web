import { DerivationPath, DerivationResult } from '@findeth/wallets';

export interface DerivationState {
  /**
   * Whether the user is in a flow or not.
   */
  isFlow: boolean;

  /**
   * Whether the user is searching or not.
   */
  isSearching: boolean;

  /**
   * The derivation paths to check.
   */
  derivationPaths: DerivationPath[];

  /**
   * The addresses that were found.
   */
  addresses: DerivationResult[];
}

export const INITIAL_STATE: DerivationState = {
  isFlow: false,
  isSearching: false,
  derivationPaths: [],
  addresses: []
};

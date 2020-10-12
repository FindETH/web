import { createAction } from '@reduxjs/toolkit';

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
   * Serialized wallet implementation.
   */
  implementation?: string;
}

export const INITIAL_STATE: DerivationState = {
  isFlow: false,
  isSearching: false
};

export const setFlow = createAction<boolean>('derivation/setFlow');

export const setSearching = createAction<boolean>('derivation/setSearching');

export const setImplementation = createAction<string>('derivation/setImplementation');

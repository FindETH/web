import { createAction } from '@reduxjs/toolkit';

export interface DerivationState {
  /**
   * Whether the user is in a flow or not.
   */
  isFlow: boolean;
}

export const INITIAL_STATE: DerivationState = {
  isFlow: false
};

export const setFlow = createAction<boolean>('derivation/setFlow');

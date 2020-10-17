import { WalletType } from '@findeth/wallets';
import { flowReducer } from './reducer';
import { INITIAL_STATE, setFlow, setWalletInitialised, setWalletType } from './types';

describe('flowReducer', () => {
  it('returns the initial state', () => {
    expect(flowReducer(undefined, { type: '' })).toBe(INITIAL_STATE);
  });

  it('handles setFlow', () => {
    expect(flowReducer(undefined, setFlow(true))).toEqual({
      ...INITIAL_STATE,
      isFlow: true
    });

    expect(flowReducer(undefined, setFlow(false))).toEqual({
      ...INITIAL_STATE,
      isFlow: false
    });
  });

  it('handles setWalletType', () => {
    expect(flowReducer(undefined, setWalletType(WalletType.Ledger))).toEqual({
      ...INITIAL_STATE,
      walletType: WalletType.Ledger
    });

    expect(flowReducer(undefined, setWalletType(WalletType.Trezor))).toEqual({
      ...INITIAL_STATE,
      walletType: WalletType.Trezor
    });

    expect(flowReducer(undefined, setWalletType(WalletType.MnemonicPhrase))).toEqual({
      ...INITIAL_STATE,
      walletType: WalletType.MnemonicPhrase
    });
  });

  it('handles setWalletInitialised', () => {
    expect(flowReducer(undefined, setWalletInitialised(true))).toEqual({
      ...INITIAL_STATE,
      isWalletInitialised: true
    });

    expect(flowReducer(undefined, setWalletInitialised(false))).toEqual({
      ...INITIAL_STATE,
      isWalletInitialised: false
    });
  });
});

import { getWalletImplementation, KeepKey, Ledger, MnemonicPhrase, Trezor, Wallet, WalletType } from '@findeth/wallets';
import React, { ComponentType, FunctionComponent } from 'react';
import MetaData from '../../MetaData';
import { PAGE_TRANSITION_PROPS } from '../../PageTransition';
import Section from '../../ui/Section';
import { FlowComponentProps } from '../Flow';
import LedgerOptions from './LedgerOptions';

type Props = FlowComponentProps<{ wallet: WalletType; implementation: Wallet }>;

interface OptionComponentProps {
  onNext(implementation: Wallet): void;
}

const WALLET_TYPES: { [key in WalletType]?: { component: ComponentType<OptionComponentProps> } } = {
  [WalletType.Ledger]: {
    component: LedgerOptions
  }
};

const WalletOptions: FunctionComponent<Props> = ({ state, onNext }) => {
  if (!state?.wallet) {
    return null;
  }

  const handleNext = (implementation: Wallet) => {
    return onNext({ implementation });
  };

  const wallet = WALLET_TYPES[state.wallet];
  if (!wallet) {
    const implementation = getWalletImplementation(state.wallet);
    if (implementation === Ledger || implementation === MnemonicPhrase) {
      throw new Error();
    }

    handleNext(new (implementation as typeof KeepKey | typeof Trezor)());
    return null;
  }

  return (
    <Section {...PAGE_TRANSITION_PROPS}>
      <MetaData title="Wallet options" />

      <wallet.component onNext={handleNext} />
    </Section>
  );
};

export default WalletOptions;

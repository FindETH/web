import { Wallet, WalletType } from '@findeth/wallets';
import React, { ComponentType, FunctionComponent } from 'react';
import { WalletWithTransport } from '../../../containers/Flow/EtherFlow';
import { FlowComponentProps } from '../../../hooks';
import { PAGE_TRANSITION_PROPS } from '../../PageTransition/PageTransition';
import Section from '../../ui/Section';
import MnemonicPhrase from './MnemonicPhrase';
import Other from './Other';

type Props = FlowComponentProps<{ wallet: WalletWithTransport; implementation: Wallet }>;

export interface ComponentProps {
  wallet: WalletWithTransport;

  onDone(implementation: Wallet): void;
  onReset(): void;
}

const AccessWallet: FunctionComponent<Props> = ({ state, onReset, onNext }) => {
  const handleNext = (implementation: Wallet) => {
    return onNext({ implementation });
  };

  if (!state.wallet?.type) {
    return null;
  }

  const Component: ComponentType<ComponentProps> =
    state.wallet.type === WalletType.MnemonicPhrase ? MnemonicPhrase : Other;

  return (
    <Section {...PAGE_TRANSITION_PROPS}>
      <Component wallet={state.wallet} onReset={onReset} onDone={handleNext} />
    </Section>
  );
};

export default AccessWallet;

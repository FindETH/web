import { Wallet, WalletType } from '@findeth/wallets';
import React, { ComponentType, FunctionComponent } from 'react';
import { FlowComponentProps } from '../../../hooks';
import Section from '../../ui/Section';
import MnemonicPhrase from './MnemonicPhrase';
import Other from './Other';

type Props = FlowComponentProps<{ wallet: WalletType; implementation: Wallet }>;

export interface ComponentProps {
  type: WalletType;

  onDone(implementation: Wallet): void;
}

const AccessWallet: FunctionComponent<Props> = ({ state, onNext }) => {
  const handleNext = (implementation: Wallet) => {
    return onNext({ implementation });
  };

  if (!state.wallet) {
    return null;
  }

  const Component: ComponentType<ComponentProps> = state.wallet === WalletType.MnemonicPhrase ? MnemonicPhrase : Other;

  return (
    <Section>
      <Component type={state.wallet} onDone={handleNext} />
    </Section>
  );
};

export default AccessWallet;

import { Wallet, WalletType } from '@findeth/wallets';
import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from '../../../hooks';
import { setDerivationPaths } from '../../../store/derivation';
import { setImplementation } from '../../../store/wallet';
import { FlowComponentProps } from '../Flow';
import InvalidState from '../InvalidState';
import HardwareWallet from './HardwareWallet';
import MnemonicWallet from './MnemonicWallet';

const components = {
  [WalletType.Ledger]: HardwareWallet,
  [WalletType.Trezor]: HardwareWallet,
  [WalletType.MnemonicPhrase]: MnemonicWallet
};

type Props = FlowComponentProps;

const ConnectWallet: FunctionComponent<Props> = ({ onNext }) => {
  const network = useSelector(state => state.network.network);
  const type = useSelector(state => state.wallet.type);
  const dispatch = useDispatch();

  if (!type) {
    return <InvalidState />;
  }

  const handleNext = (wallet: Wallet) => {
    const defaultDerivationPaths = wallet.getDerivationPaths(network);

    dispatch(setDerivationPaths(defaultDerivationPaths));
    dispatch(setImplementation(wallet.serialize()));
    onNext();
  };

  const Component = components[type];
  return <Component onNext={handleNext} />;
};

export default ConnectWallet;

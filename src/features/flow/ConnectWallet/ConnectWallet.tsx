import { Wallet, WalletType } from '@findeth/wallets';
import { FunctionComponent } from 'react';
import { SerialisedWallet } from '../../../types/wallet';
import { useDispatch, useSelector } from '../../../utils/hooks';
import { setDerivationPaths, setSerialisedWallet } from '../../search';
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
  const network = useSelector((state) => state.network.network);
  const walletType = useSelector((state) => state.flow.walletType);
  const dispatch = useDispatch();

  if (!walletType) {
    return <InvalidState />;
  }

  const handleNext = async (wallet: Wallet) => {
    // TODO: Error handling
    const defaultDerivationPaths = await wallet.getDerivationPaths(network);

    dispatch(setDerivationPaths(defaultDerivationPaths));
    dispatch(setSerialisedWallet(wallet.serialize() as SerialisedWallet));
    onNext();
  };

  const Component = components[walletType];
  return <Component onNext={handleNext} />;
};

export default ConnectWallet;

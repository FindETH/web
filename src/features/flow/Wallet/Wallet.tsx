import { WalletType } from '@findeth/wallets';
import { FunctionComponent } from 'react';
import Card, { CardHeader } from '../../../components/Card';
import CardList from '../../../components/CardList/CardList';
import Heading from '../../../components/ui/Heading';
import Typography from '../../../components/ui/Typography';
import { useDispatch, useSelector } from '../../../hooks';
import { FlowComponentProps } from '../Flow';
import { setWalletType } from '../types';
import WalletItem from './WalletItem';

type Props = FlowComponentProps;

const WALLET_ITEMS = [
  {
    title: 'Ledger',
    description: 'Connect with your Ledger Nano X, Nano S or Blue.',
    type: WalletType.Ledger
  },
  {
    title: 'Trezor',
    description: 'Connect with your Trezor One or Model T.',
    type: WalletType.Trezor
  },
  {
    title: 'Mnemonic Phrase',
    description: 'Unlock with your mnemonic phrase. (Not recommended!)',
    type: WalletType.MnemonicPhrase
  }
];

const Wallet: FunctionComponent<Props> = ({ onNext }) => {
  const walletType = useSelector(state => state.flow.walletType);
  const dispatch = useDispatch();

  const handleNext = (type: WalletType) => {
    if (walletType) {
      dispatch(setWalletType(type));
      onNext();
    }
  };

  return (
    <Card>
      <CardHeader>
        <Heading as="h3">Unlock your account</Heading>
        <Typography>You can unlock your wallet with a Ledger or Trezor device, or a mnemonic phrase.</Typography>
      </CardHeader>
      <CardList>
        {WALLET_ITEMS.map(({ ...props }, index) => (
          <WalletItem key={index} {...props} onSelect={handleNext} />
        ))}
      </CardList>
    </Card>
  );
};

export default Wallet;

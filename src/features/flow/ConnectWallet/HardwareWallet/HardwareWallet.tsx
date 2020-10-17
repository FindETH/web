import { getLedgerTransport, getWalletImplementation, Ledger, Trezor, Wallet, WalletType } from '@findeth/wallets';
import { FunctionComponent, useEffect, useState } from 'react';
import Button from '../../../../components/ui/Button';
import Container from '../../../../components/ui/Container';
import Typography from '../../../../components/ui/Typography';
import { useSelector } from '../../../../hooks';

interface Props {
  onNext(wallet: Wallet): void;
}

const HardwareWallet: FunctionComponent<Props> = ({ onNext }) => {
  const walletType = useSelector(state => state.flow.walletType) as WalletType.Ledger | WalletType.Trezor;
  const [implementation, setImplementation] = useState<Ledger<unknown> | Trezor>();

  useEffect(() => {
    if (walletType) {
      if (walletType === WalletType.Ledger) {
        const Ledger = getWalletImplementation(walletType);

        // TODO: Handle error when no transports are available
        getLedgerTransport().then(transport => setImplementation(new Ledger(transport)));
        return;
      }

      const Trezor = getWalletImplementation(walletType);
      setImplementation(new Trezor());
    }
  }, [walletType]);

  // TODO: Handle errors
  const handleNext = () => {
    if (implementation) {
      implementation
        .connect()
        .then(() => onNext(implementation))
        // eslint-disable-next-line no-console
        .catch(console.error);
    }
  };

  return (
    <Container>
      <Typography>Connect hardware wallet</Typography>

      <Button onClick={handleNext}>Next</Button>
    </Container>
  );
};

export default HardwareWallet;

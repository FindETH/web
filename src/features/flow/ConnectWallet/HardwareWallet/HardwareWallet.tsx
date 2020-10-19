import { getLedgerTransport, getWalletImplementation, Ledger, Trezor, Wallet, WalletType } from '@findeth/wallets';
import { FunctionComponent, useEffect, useState } from 'react';
import Alert from '../../../../components/Alert';
import Button from '../../../../components/Button';
import Card, { CardHeader } from '../../../../components/Card';
import { CardContent } from '../../../../components/Card/Card.styles';
import Heading from '../../../../components/Heading';
import Typography from '../../../../components/Typography';
import { getErrorMessage } from '../../../../utils/errors';
import { useSelector } from '../../../../utils/hooks';

interface Props {
  onNext(wallet: Wallet): void;
}

const HardwareWallet: FunctionComponent<Props> = ({ onNext }) => {
  const walletType = useSelector(state => state.flow.walletType) as WalletType.Ledger | WalletType.Trezor;
  const [implementation, setImplementation] = useState<Ledger<unknown> | Trezor>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    if (walletType) {
      if (walletType === WalletType.Ledger) {
        const Ledger = getWalletImplementation(walletType);

        getLedgerTransport()
          .then(transport => new Ledger(transport))
          .then(setImplementation)
          .catch(error => setError(getErrorMessage(error)));
        return;
      }

      const Trezor = getWalletImplementation(walletType);
      setImplementation(new Trezor());
    }
  }, [walletType]);

  // TODO: Handle errors
  const handleNext = () => {
    if (implementation) {
      setError(undefined);

      implementation
        .connect()
        .then(() => onNext(implementation))
        .catch(error => setError(getErrorMessage(error)));
    }
  };

  const handleClose = () => {
    setError(undefined);
  };

  return (
    <>
      {error && (
        <Alert onClose={handleClose}>
          <Typography>
            <strong>An error occurred.</strong>
          </Typography>
          <Typography>{error}</Typography>
        </Alert>
      )}

      <Card>
        <CardHeader>
          <Heading as="h3">Connect to your hardware wallet</Heading>
          <Typography>Make sure your device is unlocked and not in use by any other application.</Typography>
        </CardHeader>
        <CardContent>
          <Typography>Click on "Next" to connect.</Typography>
          <Button onClick={handleNext}>Next</Button>
        </CardContent>
      </Card>
    </>
  );
};

export default HardwareWallet;

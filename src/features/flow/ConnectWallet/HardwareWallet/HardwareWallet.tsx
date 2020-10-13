import { getLedgerTransport, getWalletImplementation, Ledger, Trezor, WalletType } from '@findeth/wallets';
import React, { FunctionComponent, useEffect, useState } from 'react';
import Button from '../../../../components/ui/Button';
import Container from '../../../../components/ui/Container';
import Typography from '../../../../components/ui/Typography';
import { useSelector } from '../../../../hooks';

interface Props {
  onNext(): void;
}

const HardwareWallet: FunctionComponent<Props> = ({ onNext }) => {
  const type = useSelector(state => state.wallet.type) as WalletType.Ledger | WalletType.Trezor;
  const [implementation, setImplementation] = useState<Ledger<unknown> | Trezor>();

  useEffect(() => {
    if (type) {
      if (type === WalletType.Ledger) {
        const Ledger = getWalletImplementation(type);

        // TODO: Fallback to other transports
        getLedgerTransport().then(transport => setImplementation(new Ledger(transport)));
        return;
      }

      const Trezor = getWalletImplementation(type);
      setImplementation(new Trezor());
    }
  }, [type]);

  // TODO: Handle errors
  const handleNext = () => {
    if (implementation) {
      implementation
        .connect()
        .then(onNext)
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

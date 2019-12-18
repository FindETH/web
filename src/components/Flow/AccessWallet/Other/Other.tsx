import { getLedgerTransport, getWalletImplementation, HardwareWallet, Ledger, WalletType } from '@findeth/wallets';
import React, { FunctionComponent, useEffect, useState } from 'react';
import Container from '../../../ui/Container';
import Heading from '../../../ui/Heading';
import Typography from '../../../ui/Typography';
import { ComponentProps } from '../AccessWallet';

type HardwareWalletType = Exclude<WalletType, WalletType.MnemonicPhrase>;

const Other: FunctionComponent<ComponentProps> = ({ type }) => {
  const [implementation, setImplementation] = useState<HardwareWallet>();
  const [isConnected, setConnected] = useState(false);

  const getWalletInstance = async (walletType: HardwareWalletType) => {
    if (walletType === WalletType.Ledger) {
      const transport = await getLedgerTransport();
      return new Ledger(transport);
    }

    const Implementation = getWalletImplementation(walletType);
    return new Implementation();
  };

  useEffect(() => {
    getWalletInstance(type as HardwareWalletType).then(setImplementation);
    // TODO: Error handling
  }, [type]);

  useEffect(() => {
    if (implementation) {
      implementation
        .connect()
        .then(() => setConnected(true))
        // tslint:disable-next-line
        .catch(console.error);
    }
  }, [implementation]);

  return (
    <>
      <Container>
        <Heading as="h2">Connecting to your wallet...</Heading>
        <Typography>Make sure your wallet is connected and available.</Typography>
      </Container>
      <Container small={true}>
        <Typography>{isConnected ? 'Connected' : 'Not connected'}</Typography>
      </Container>
    </>
  );
};

export default Other;

import { getWalletImplementation, HardwareWallet, WalletType } from '@findeth/core';
import React, { FunctionComponent, useEffect, useState } from 'react';
import Container from '../../../ui/Container';
import Heading from '../../../ui/Heading';
import Typography from '../../../ui/Typography';
import { ComponentProps } from '../AccessWallet';

const Other: FunctionComponent<ComponentProps> = ({ type }) => {
  const [implementation, setImplementation] = useState<HardwareWallet>();
  const [isConnected, setConnected] = useState(false);

  useEffect(() => {
    const WalletImplementation = getWalletImplementation<Exclude<WalletType, WalletType.MnemonicPhrase>>(
      type as Exclude<WalletType, WalletType.MnemonicPhrase>
    );

    setImplementation(new WalletImplementation());
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

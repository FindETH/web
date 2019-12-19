import { getLedgerTransport, getWalletImplementation, HardwareWallet, Ledger, WalletType } from '@findeth/wallets';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { useToggleState } from '../../../../hooks';
import { getErrorMessage } from '../../../../utils/errors';
import Modal from '../../../Modal';
import Spinner from '../../../Spinner';
import Container from '../../../ui/Container';
import Heading from '../../../ui/Heading';
import Typography from '../../../ui/Typography';
import { ComponentProps } from '../AccessWallet';

type HardwareWalletType = Exclude<WalletType, WalletType.MnemonicPhrase>;

const Other: FunctionComponent<ComponentProps> = ({ wallet, onReset }) => {
  const [implementation, setImplementation] = useState<HardwareWallet>();
  const [error, setError] = useState<Error>();
  const [isVisible, toggleVisible] = useToggleState();

  const getWalletInstance = async () => {
    if (wallet.type === WalletType.Ledger) {
      const transport = (wallet.transport && new wallet.transport()) ?? (await getLedgerTransport());
      return new Ledger(transport);
    }

    const Implementation = getWalletImplementation(wallet.type as Exclude<HardwareWalletType, WalletType.Ledger>);
    return new Implementation();
  };

  const handleError = (value: Error) => {
    setError(value);
    toggleVisible(true);
  };

  const connect = () => {
    getWalletInstance()
      .then(setImplementation)
      .catch(handleError);
  };

  const handleConfirm = () => {
    toggleVisible(false);
    connect();
  };

  const handleClose = () => {
    toggleVisible(false);
    onReset();
  };

  useEffect(() => {
    connect();
  }, [wallet]);

  useEffect(() => {
    if (implementation) {
      implementation.connect().catch(handleError);
    }
  }, [implementation]);

  return (
    <>
      <Modal
        isVisible={isVisible}
        type="error"
        confirmText="Try again"
        closeText="Cancel"
        onConfirm={handleConfirm}
        onClose={handleClose}>
        <Typography>Could not connect to your device: {error && getErrorMessage(error)}</Typography>
      </Modal>

      <Container>
        <Heading as="h2">Connecting to your wallet...</Heading>
        <Typography>Make sure your wallet is connected and available.</Typography>
        <Spinner isVisible={!implementation || !error} />
      </Container>
    </>
  );
};

export default Other;

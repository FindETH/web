import { Wallet, WalletType } from '@findeth/wallets';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { getErrorMessage } from '../../../utils/errors';
import Meta from '../../Meta';
import { PAGE_TRANSITION_PROPS } from '../../PageTransition';
import Spinner from '../../Spinner';
import Button from '../../ui/Button';
import Container from '../../ui/Container';
import Heading from '../../ui/Heading';
import Section from '../../ui/Section';
import Typography from '../../ui/Typography';
import { FlowComponentProps } from '../Flow';

type Props = FlowComponentProps<{ wallet: WalletType; implementation: Wallet }>;

const AccessWallet: FunctionComponent<Props> = ({ state, onNext }) => {
  if (!state.implementation) {
    return null;
  }

  const [error, setError] = useState<Error | undefined>();

  const connect = () => {
    if (state.implementation!.isHardwareWallet()) {
      state.implementation
        .connect()
        .then(() => onNext({}))
        .catch(setError);
    }
  };

  const handleRetry = () => {
    setError(undefined);
    connect();
  };

  useEffect(() => {
    connect();
  }, [state.implementation]);

  return (
    <Section {...PAGE_TRANSITION_PROPS}>
      <Meta title="Connect to your wallet" />

      <Container>
        <Heading as="h2">Connecting to your wallet...</Heading>
        <Typography>Make sure your wallet is connected and available.</Typography>

        {error && (
          <>
            <Heading as="h3">Failed to connect</Heading>
            <Typography>{getErrorMessage(error)}</Typography>
            <Button onClick={handleRetry}>Retry</Button>
          </>
        )}

        <Spinner isVisible={!error} />
      </Container>
    </Section>
  );
};

export default AccessWallet;

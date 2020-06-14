import { getLedgerTransport, Ledger, LedgerWebBLE, Wallet } from '@findeth/wallets';
import React, { FunctionComponent } from 'react';
import Panel from '../../../Panel';
import Container from '../../../ui/Container';
import GridContainer from '../../../ui/GridContainer';
import Heading from '../../../ui/Heading';
import Typography from '../../../ui/Typography';

interface Props {
  onNext(implementation: Wallet): void;
}

const LedgerOptions: FunctionComponent<Props> = ({ onNext }) => {
  const handleUSB = () => {
    getLedgerTransport()
      .then(transport => {
        onNext(new Ledger(transport));
      })
      // eslint-disable-next-line no-console
      .catch(console.error); // TODO
  };

  const handleBluetooth = () => {
    LedgerWebBLE.isSupported()
      .then(supported => {
        if (supported) {
          return onNext(new Ledger(new LedgerWebBLE()));
        }

        throw new Error('WebBLE not supported');
      })
      // eslint-disable-next-line no-console
      .catch(console.error); // TODO
  };

  return (
    <Container>
      <Heading as="h2">Ledger</Heading>
      <Typography>How do you want to connect to your Ledger device?</Typography>

      <GridContainer rows={1} columns={2}>
        <Panel onClick={handleUSB}>
          <Heading as="h3">USB</Heading>
        </Panel>
        <Panel onClick={handleBluetooth}>
          <Heading as="h3">Bluetooth</Heading>
        </Panel>
      </GridContainer>
    </Container>
  );
};

export default LedgerOptions;

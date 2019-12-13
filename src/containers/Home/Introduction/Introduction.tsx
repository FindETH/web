import { navigate } from '@reach/router';
import React, { FunctionComponent } from 'react';
import Button from '../../../components/ui/Button';
import Container from '../../../components/ui/Container';
import Heading from '../../../components/ui/Heading';
import Section from '../../../components/ui/Section';
import Typography from '../../../components/ui/Typography';

const Introduction: FunctionComponent = () => {
  const handleClick = async () => {
    await navigate('/start');
  };

  return (
    <Section>
      <Container>
        <Heading as="h2">Find your lost Ether and tokens</Heading>
        <Typography>
          This tool can help you if you lost your Ethereum address, Ether or tokens that you got from a mnemonic phrase,
          or a Ledger or Trezor device. In a few simple steps, you can quickly search for the address, Ether or tokens
          on your wallet.
        </Typography>
        <Button primary={true} onClick={handleClick}>
          Start searching!
        </Button>
      </Container>
    </Section>
  );
};

export default Introduction;

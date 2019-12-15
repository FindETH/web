import React, { FunctionComponent } from 'react';
import Container from '../../../ui/Container';
import Heading from '../../../ui/Heading';
import Typography from '../../../ui/Typography';
import { ComponentProps } from '../AccessWallet';

const MnemonicPhrase: FunctionComponent<ComponentProps> = () => (
  <>
    <Container>
      <Heading as="h2">Enter your mnemonic phrase</Heading>
      <Typography>TODO</Typography>
    </Container>
  </>
);

export default MnemonicPhrase;

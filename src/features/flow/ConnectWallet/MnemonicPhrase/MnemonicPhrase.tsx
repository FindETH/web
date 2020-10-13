import React, { FunctionComponent } from 'react';
import Button from '../../../../components/ui/Button';
import Container from '../../../../components/ui/Container';
import Typography from '../../../../components/ui/Typography';

interface Props {
  onNext(): void;
}

// TODO
const MnemonicPhrase: FunctionComponent<Props> = ({ onNext }) => (
  <Container>
    <Typography>Enter mnemonic phrase</Typography>

    <Button onClick={onNext}>Next</Button>
  </Container>
);

export default MnemonicPhrase;

import React, { FunctionComponent } from 'react';
import Typography from '../../../../components/ui/Typography';

interface Props {
  onNext(): void;
}

// TODO
const MnemonicPhrase: FunctionComponent<Props> = () => <Typography>Enter mnemonic phrase</Typography>;

export default MnemonicPhrase;

import { DerivationPath, Wallet } from '@findeth/wallets';
import React, { FunctionComponent, useState } from 'react';
import Meta from '../../Meta';
import { PAGE_TRANSITION_PROPS } from '../../PageTransition';
import Button from '../../ui/Button';
import Container from '../../ui/Container';
import Heading from '../../ui/Heading';
import Section from '../../ui/Section';
import Typography from '../../ui/Typography';
import { FlowComponentProps } from '../Flow';
import Depth from './Depth/Depth';
import DerivationPaths from './DerivationPaths';

type Props = FlowComponentProps<{ implementation: Wallet; derivationPaths: DerivationPath[]; depth: number }>;

const SearchOptions: FunctionComponent<Props> = ({ state: { implementation }, onNext }) => {
  const handleNext = () => {
    return onNext({ derivationPaths, depth });
  };

  const [depth, setDepth] = useState<number>(0);
  const [derivationPaths, setDerivationPaths] = useState<DerivationPath[]>([]);

  if (!implementation) {
    return null;
  }

  return (
    <Section {...PAGE_TRANSITION_PROPS}>
      <Meta title="Select your options" />

      <Container>
        <Heading as="h2">Select your options</Heading>
        <Typography>Select your options.</Typography>

        <Heading as="h3">Depth</Heading>
        <Typography>This option determines how many addresses will be checked, for each derivation path.</Typography>
        <Depth onChange={setDepth} />

        <Heading as="h3">Derivation paths</Heading>
        <Typography>These are the derivation paths that FindETH will search through.</Typography>
        <DerivationPaths derivationPaths={implementation.getDerivationPaths()} onChange={setDerivationPaths} />

        <Button onClick={handleNext}>Next</Button>
      </Container>
    </Section>
  );
};

export default SearchOptions;

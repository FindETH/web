import React, { FunctionComponent } from 'react';
import InstructionsList from '../../../components/InstructionsList';
import Link from '../../../components/Link';
import Container from '../../../components/ui/Container';
import Heading from '../../../components/ui/Heading';
import Section from '../../../components/ui/Section';
import Typography from '../../../components/ui/Typography';

const Instructions: FunctionComponent = () => (
  <Section>
    <Container>
      <Heading as="h2">How it works</Heading>
      <InstructionsList
        items={[
          <Typography key="instructions-1">Choose what you're searching for</Typography>,
          <Typography key="instructions-2">Unlock your wallet</Typography>,
          <Typography key="instructions-3">Select your options</Typography>,
          <Typography key="instructions-4">Search!</Typography>
        ]}
      />
      <Typography small={true}>
        For a more detailed explanation, check out the <Link to="/faq">FAQ</Link>.
      </Typography>
    </Container>
  </Section>
);

export default Instructions;

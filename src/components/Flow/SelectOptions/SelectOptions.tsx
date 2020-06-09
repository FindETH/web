import { Wallet } from '@findeth/wallets';
import React, { FunctionComponent } from 'react';
import MetaData from '../../MetaData';
import { PAGE_TRANSITION_PROPS } from '../../PageTransition';
import Container from '../../ui/Container';
import Heading from '../../ui/Heading';
import Section from '../../ui/Section';
import Typography from '../../ui/Typography';
import { FlowComponentProps } from '../Flow';

type Props = FlowComponentProps<{ implementation: Wallet }>;

const SelectOptions: FunctionComponent<Props> = () => {
  // const handleNext = () => {
  //  return onNext();
  // };

  return (
    <Section {...PAGE_TRANSITION_PROPS}>
      <MetaData title="Select your options" />

      <Container>
        <Heading as="h2">Select your options</Heading>
        <Typography>Select your options.</Typography>
      </Container>
    </Section>
  );
};

export default SelectOptions;

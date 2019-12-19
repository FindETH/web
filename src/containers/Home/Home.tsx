import { RouteComponentProps } from '@reach/router';
import React, { FunctionComponent } from 'react';
import StepIndicator from '../../components/StepIndicator';
import Container from '../../components/ui/Container';
import Heading from '../../components/ui/Heading';
import Instructions from './Instructions/Instructions';
import Introduction from './Introduction';

type Props = RouteComponentProps;

const Home: FunctionComponent<Props> = () => (
  <>
    <Container>
      <Heading as="h1">FindETH</Heading>
    </Container>
    <StepIndicator steps={3} currentStep={1} />
    <Introduction />
    <Instructions />
  </>
);

export default Home;

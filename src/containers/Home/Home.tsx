import { RouteComponentProps } from '@reach/router';
import React, { FunctionComponent } from 'react';
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
    <Introduction />
    <Instructions />
  </>
);

export default Home;

import { RouteComponentProps } from '@reach/router';
import React, { FunctionComponent } from 'react';
import Questions from '../../components/Questions';
import Container from '../../components/ui/Container';
import Heading from '../../components/ui/Heading';

type Props = RouteComponentProps;

const FAQ: FunctionComponent<Props> = () => (
  <>
    <Container>
      <Heading as="h1">Frequently Asked Questions</Heading>
    </Container>
    <Questions />
  </>
);

export default FAQ;

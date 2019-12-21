import { RouteComponentProps } from '@reach/router';
import React, { FunctionComponent } from 'react';
import MetaData from '../../components/MetaData';
import Questions from '../../components/Questions';
import Container from '../../components/ui/Container';
import Heading from '../../components/ui/Heading';

type Props = RouteComponentProps;

const FAQ: FunctionComponent<Props> = () => (
  <>
    <MetaData title="Frequently Asked Questions" />

    <Container>
      <Heading as="h1">Frequently Asked Questions</Heading>
    </Container>
    <Questions />
  </>
);

export default FAQ;

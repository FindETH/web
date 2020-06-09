import { RouteComponentProps } from '@reach/router';
import React, { FunctionComponent } from 'react';
import Panel from '../../components/Panel';
import Container from '../../components/ui/Container';
import GridContainer from '../../components/ui/GridContainer';
import Heading from '../../components/ui/Heading';
import Section from '../../components/ui/Section';
import Typography from '../../components/ui/Typography';

type Props = RouteComponentProps;

const Home: FunctionComponent<Props> = () => (
  <Container>
    <Heading as="h1">FindETH</Heading>

    <Section>
      <Heading as="h2">What are you looking for?</Heading>
      <Typography>
        FindETH is a tool to help you search for a lost address, Ether or tokens. Please pick an option to start
        searching.
      </Typography>
      <GridContainer rows={1} columns={3}>
        <Panel to="/flow/address">
          <Heading as="h3">Address</Heading>
        </Panel>
        <Panel to="/flow/ether">
          <Heading as="h3">Ether</Heading>
        </Panel>
        <Panel to="/flow/tokens">
          <Heading as="h3">Tokens</Heading>
        </Panel>
      </GridContainer>
    </Section>
  </Container>
);

export default Home;

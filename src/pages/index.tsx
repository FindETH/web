import { FunctionComponent } from 'react';
import Card, { CardHeader } from '../components/Card';
import CardList from '../components/CardList';
import CardListItem from '../components/CardList/CardListItem';
import Page from '../components/Page';
import Heading from '../components/ui/Heading';
import Typography from '../components/ui/Typography';

const Index: FunctionComponent = () => (
  <Page title="Search">
    <Card>
      <CardHeader>
        <Heading as="h3">What are you looking for?</Heading>
        <Typography>
          FindETH is a tool to help you search for a lost address, Ether or tokens. Please pick an option to start
          searching.
        </Typography>
      </CardHeader>

      <CardList>
        <CardListItem onClick={() => undefined}>
          <Heading as="h4">Address</Heading>
          <Typography>Use this option if you're looking for a specific address.</Typography>
        </CardListItem>
        <CardListItem onClick={() => undefined}>
          <Heading as="h4">Assets</Heading>
          <Typography>
            Use this option if you're looking for Ether, ERC-20 tokens, or other supported assets.
          </Typography>
        </CardListItem>
      </CardList>
    </Card>
  </Page>
);

export default Index;

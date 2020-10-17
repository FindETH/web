import { FunctionComponent } from 'react';
import Card from '../components/Card';
import Page from '../components/Page';
import Button from '../components/ui/Button';
import Heading from '../components/ui/Heading';
import Typography from '../components/ui/Typography';

const Index: FunctionComponent = () => (
  <Page title="Search">
    <Card small={true}>
      <Heading as="h3">What are you looking for?</Heading>
      <Typography>
        FindETH is a tool to help you search for a lost address, Ether or tokens. Please pick an option to start
        searching.
      </Typography>

      <Button type="primary">Start searching</Button>
    </Card>
  </Page>
);

export default Index;

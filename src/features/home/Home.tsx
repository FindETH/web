import { FunctionComponent } from 'react';
import Card, { CardHeader } from '../../components/Card';
import Heading from '../../components/ui/Heading';
import Typography from '../../components/ui/Typography';
import OptionList from './OptionList';

const Home: FunctionComponent = () => (
  <Card>
    <CardHeader>
      <Heading as="h3">What are you looking for?</Heading>
      <Typography>
        FindETH is a tool to help you search for a lost address, Ether or tokens. Please pick an option to start
        searching.
      </Typography>
    </CardHeader>

    <OptionList />
  </Card>
);

export default Home;

import { FunctionComponent } from 'react';
import { CardHeader } from '../../components/Card';
import { CardContent } from '../../components/Card/Card.styles';
import Heading from '../../components/Heading';
import Panel from '../../components/Panel';
import Typography from '../../components/Typography';

const Info: FunctionComponent = () => (
  <Panel>
    <CardHeader>
      <Heading as="h2">About FindETH</Heading>
      <Typography>What is FindETH, and how does it work?</Typography>
    </CardHeader>
    <CardContent>
      <Typography>
        FindETH is a tool that can help you if you lost your Ethereum address, Ether or tokens, as well as other
        supported assets.
      </Typography>
    </CardContent>
  </Panel>
);

export default Info;

import { FunctionComponent } from 'react';
import Card from '../../../components/Card/Card';
import Heading from '../../../components/Heading';
import Icon from '../../../components/Icon';
import Typography from '../../../components/Typography';
import { NoConnectionContainer } from './NoConnection.styles';

const NoConnection: FunctionComponent = () => (
  <Card>
    <NoConnectionContainer>
      <Icon icon="offline" size="6rem" />
      <Heading as="h3">Internet connection required</Heading>
      <Typography>
        This functionality requires an internet connection. Please make sure you are online, and a connection to the
        network is not blocked by your firewall.
      </Typography>
    </NoConnectionContainer>
  </Card>
);

export default NoConnection;

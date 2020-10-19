import { FunctionComponent } from 'react';
import Card from '../../../components/Card/Card';
import Heading from '../../../components/Heading';
import Icon from '../../../components/Icon';
import Link from '../../../components/Link';
import Typography from '../../../components/Typography';
import { NotLocalContainer } from './NotLocal.styles';

const NotLocal: FunctionComponent = () => (
  <Card>
    <NotLocalContainer>
      <Icon icon="unavailable" size="6rem" />
      <Heading as="h3">Not available online</Heading>
      <Typography>
        For security reasons, this feature is only available when you run FindETH locally. For more information, please
        refer to{' '}
        <Link to="https://github.com/FindETH/web" external={true}>
          the GitHub page
        </Link>
        .
      </Typography>
    </NotLocalContainer>
  </Card>
);

export default NotLocal;

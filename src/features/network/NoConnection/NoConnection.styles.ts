import styled from 'styled-components';
import { CardContent } from '../../../components/Card/Card.styles';
import Typography from '../../../components/Typography';

export const NoConnectionContainer = styled(CardContent)`
  padding: 5rem 3rem;

  text-align: center;

  ${Typography} {
    margin-bottom: 0;
  }
`;

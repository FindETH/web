import styled from 'styled-components';
import Typography from '../Typography';

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4';

const HEADING_SIZE: Record<HeadingType, string> = {
  h1: '3rem',
  h2: '1.5rem',
  h3: '1.2rem',
  h4: '1rem'
};

export interface Props {
  as: HeadingType;
}

const Heading = styled(Typography)<Props>`
  font-size: ${({ as = 'h1' }) => HEADING_SIZE[as]};
  font-family: ${({ theme }) => theme.headingFont};
  font-weight: ${({ as = 'h1' }) => (as === 'h1' ? 'bold' : 'normal')};
`;

export default Heading;

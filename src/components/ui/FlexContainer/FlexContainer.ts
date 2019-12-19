import styled from 'styled-components';
import Container from '../Container';
import Heading from '../Heading';

const FlexContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${Heading} {
    margin: 0;
    margin-bottom: 1.5rem;
  }
`;

export default FlexContainer;

import styled from 'styled-components';
import Typography from '../Typography';

const Panel = styled.section`
  background: white;
  padding: 1.5rem 2.25rem;
  box-shadow: rgba(0, 0, 0, 0.03) 0 0 0 0.0625em, rgba(0, 0, 0, 0.05) 0 0.0625em 0 0,
    rgba(0, 0, 0, 0.1) 0 0.0625em 0.1875em 0;

  ${Typography}:last-of-type {
    margin-bottom: 0;
  }
`;

export default Panel;

import styled from 'styled-components';
import Panel from '../ui/Panel';
import Typography from '../ui/Typography';

export const InstructionsListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0 0 1.5rem;
  padding: 0;
  list-style-type: none;

  ${Panel} {
    flex: 1;
    margin-right: 2rem;

    :last-of-type {
      margin-right: 0;
    }
  }
`;

export const ItemIndicator = styled(Typography)`
  font-weight: bold;
`;

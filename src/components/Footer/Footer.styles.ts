import styled from 'styled-components';
import Container from '../ui/Container';
import Typography from '../ui/Typography';

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.primaryColor};
  padding: 2rem 0;

  ${Typography} {
    display: inline-block;
    color: white;
    margin: 0;
  }
`;

export const FlexContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

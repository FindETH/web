import styled from 'styled-components';
import Typography from '../Typography';

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.footer.background};
  padding: 2rem 0;
  text-align: center;

  ${Typography} {
    color: ${({ theme }) => theme.footer.text};
    display: inline-block;
    margin: 0;
    font-size: 0.9rem;
  }
`;

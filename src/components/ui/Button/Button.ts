import { transparentize } from 'polished';
import styled from 'styled-components';
import Typography from '../Typography';

interface Props {
  primary?: boolean;
}

const Button = styled(Typography).attrs({ as: 'button' })<Props>`
  background: ${({ primary, theme }) => (primary ? theme.primaryColor : 'transparent')};
  outline: none;
  border: 3px solid ${({ theme }) => theme.primaryColor};
  border-radius: ${({ theme }) => theme.smallBorderRadius};
  color: ${({ primary, theme }) => (primary ? 'white' : theme.primaryColor)};
  padding: 0.5rem 1.1rem;
  font-size: 0.9rem;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background: ${({ theme }) => transparentize(0.1, theme.primaryColor)};
  }
`;

export default Button;

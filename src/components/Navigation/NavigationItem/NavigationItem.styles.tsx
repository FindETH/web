import { transparentize } from 'polished';
import styled from 'styled-components';

export const StyledNavigationItem = styled.li`
  display: inline-block;
  margin-left: 1.5rem;

  a {
    font-size: 1.1rem;
    font-family: ${({ theme }) => theme.headingFont};
    color: ${({ theme }) => transparentize(0.4, theme.textColor)};

    :hover {
      color: ${({ theme }) => transparentize(0.1, theme.textColor)};
    }
  }
`;

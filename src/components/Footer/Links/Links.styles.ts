import { transparentize } from 'polished';
import styled from 'styled-components';

export const LinksContainer = styled.div`
  text-align: center;

  a {
    margin: 0 1.5rem;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.primaryColor};

    :hover {
      color: ${({ theme }) => transparentize(0.5, theme.primaryColor)};
    }
  }
`;

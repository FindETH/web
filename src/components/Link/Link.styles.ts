import { Link } from '@reach/router';
import styled, { css } from 'styled-components';

const linkStyles = css`
  text-decoration: none;
  font-family: ${({ theme }) => theme.font};
  color: ${({ theme }) => theme.linkColor};
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.linkHoverColor};
  }
`;

export const RouterLink = styled(Link)`
  ${linkStyles}
`;

export const ExternalLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer'
})`
  ${linkStyles}
`;

import { Link } from 'gatsby';
import { lighten } from 'polished';
import styled, { css } from 'styled-components';

const linkStyles = css`
  text-decoration: none;
  font-family: ${({ theme }) => theme.font};
  color: ${({ theme }) => theme.link};
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => lighten(0.2, theme.link)};
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

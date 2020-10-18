import styled from 'styled-components';

export interface Props {
  small?: boolean;
  muted?: boolean;
}

const Typography = styled.p<Props>`
  display: block;
  font-size: ${({ small }) => (small ? '.75rem' : '.875rem')};
  font-family: ${({ theme }) => theme.font};
  margin-bottom: 1.5rem;
  line-height: 1.5;
  color: ${({ theme, muted }) => (muted ? theme.mutedText : theme.textColor)};
  transition: color 0.3s;
`;

export default Typography;

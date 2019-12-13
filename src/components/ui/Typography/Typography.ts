import styled from 'styled-components';

export interface Props {
  small?: boolean;
}

const Typography = styled.p<Props>`
  display: block;
  font-size: ${({ small }) => (small ? '0.75rem' : '1rem')};
  font-family: ${({ theme }) => theme.font};
  margin-top: 0;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

export default Typography;

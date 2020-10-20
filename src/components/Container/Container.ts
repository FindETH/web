import styled from 'styled-components';

export interface Props {
  small?: boolean;
  fullHeight?: boolean;
}

const Container = styled.div<Props>`
  width: ${({ small = false }) => (small ? '44rem' : '80rem')};
  max-width: 100%;
  height: ${({ fullHeight = false }) => (fullHeight ? '100%' : 'auto')};
  margin: 0 auto;
  padding: 0 2rem;
  box-sizing: border-box;
`;

export default Container;

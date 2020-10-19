import styled from 'styled-components';

export interface Props {
  small?: boolean;
  fullHeight?: boolean;
}

const Container = styled.div<Props>`
  width: ${({ small = false }) => (small ? '40rem' : '80rem')};
  max-width: 100%;
  height: ${({ fullHeight = false }) => (fullHeight ? '100%' : 'auto')};
  box-sizing: border-box;
  margin: 0 auto;
`;

export default Container;

import styled from 'styled-components';

export interface Props {
  small?: boolean;
  fullHeight?: boolean;
}

const Container = styled.div<Props>`
  width: ${({ small = false }) => (small ? '600px' : '1200px')};
  max-width: 100%;
  height: ${({ fullHeight = false }) => (fullHeight ? '100%' : 'auto')};
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 2rem;
`;

export default Container;

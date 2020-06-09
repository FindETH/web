import styled from 'styled-components';

interface Props {
  rows: number;
  columns: number;
}

const GridContainer = styled.div<Props>`
  display: grid;
  grid-template-rows: ${({ rows }) => `repeat(${rows}, 1fr)`};
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  grid-column-gap: 3rem;
`;

export default GridContainer;

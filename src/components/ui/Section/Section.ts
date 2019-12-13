import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 0;
  background: ${({ theme }) => theme.sectionBackground};

  :nth-child(odd) {
    background: ${({ theme }) => theme.sectionOddBackground};
  }

  :last-of-type {
    flex: 1;
  }
`;

export default Section;

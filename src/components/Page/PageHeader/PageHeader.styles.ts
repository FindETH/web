import styled from 'styled-components';
import Heading from '../../Heading';

export const PageHeaderContainer = styled.div`
  width: 100%;
  padding: 1.5rem 0;
  background: ${({ theme }) => theme.pageHeader.background};
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.smallShadow};

  ${Heading} {
    margin: 0;
    font-family: ${({ theme }) => theme.pageHeader.font};
    font-weight: 700;
  }
`;

import styled from 'styled-components';
import Container from '../ui/Container';
import Heading from '../ui/Heading';

export const HeaderContainer = styled.header`
  height: 4rem;
  background: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.invertedText};
  font-family: ${({ theme }) => theme.navigation.font};

  ${Container} {
    height: 4rem;
    display: flex;
    align-items: center;
  }

  ${Heading} {
    margin: 0;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.invertedText};
    font-family: ${({ theme }) => theme.navigation.font};
  }
`;

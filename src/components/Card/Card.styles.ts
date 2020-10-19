import styled from 'styled-components';
import Heading from '../Heading';
import Typography from '../Typography';

export const CardContainer = styled.section`
  margin: 1.5rem auto;
  width: 40rem;
  max-width: 100%;
  background: white;
  border-radius: ${({ theme }) => theme.mediumBorderRadius};
  box-shadow: ${({ theme }) => theme.smallShadow};
`;

export const CardHeader = styled.header`
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.border};

  ${Typography} {
    margin: 0.25rem 0 0;
    line-height: 1.5rem;
  }

  ${Heading} {
    margin: 0;
    font-size: 1.125rem;
    font-weight: 500;
  }
`;

export const CardContent = styled.div`
  padding: 1.5rem;

  ${Typography}:first-of-type {
    margin-top: 0;
  }
`;

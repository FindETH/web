import styled, { css } from 'styled-components';
import Heading from '../../Heading';
import Typography from '../../Typography';

interface QuestionHeadingProps {
  as: string;
  isOpen: boolean;
}

export const QuestionHeading = styled(Heading).attrs<QuestionHeadingProps>({ as: 'h2' })`
  width: 100%;
  margin: 0;
  padding: 1rem 3rem 1rem 1rem;
  font-size: 1.2rem;
  font-weight: normal;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  cursor: pointer;
  transition: color 0.3s, border-bottom-color 0.3s;

  ${({ isOpen }: QuestionHeadingProps) =>
    isOpen &&
    css`
      color: ${({ theme }) => theme.link};
      border-bottom-color: ${({ theme }) => theme.link};
    `};

  :hover {
    color: ${({ theme }) => theme.link};
    border-bottom-color: ${({ theme }) => theme.link};
  }
`;

export const QuestionContainer = styled.section``;

export const QuestionBody = styled.div`
  overflow: hidden;

  ${Typography} {
    font-size: 0.9rem;

    :last-of-type {
      margin-bottom: 0;
    }
  }
`;

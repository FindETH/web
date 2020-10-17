import { darken, transitions } from 'polished';
import styled from 'styled-components';
import Heading from '../../ui/Heading';
import Typography from '../../ui/Typography';

export const CardListItemContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 1.25rem 1.5rem;
  cursor: pointer;

  :not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.border};
  }

  :last-of-type {
    border-bottom-right-radius: ${({ theme }) => theme.mediumBorderRadius};
    border-bottom-left-radius: ${({ theme }) => theme.mediumBorderRadius};
  }

  ${transitions(['background-color'], '0.2s')};

  &:hover {
    background: ${() => darken(0.025, 'white')};
  }
`;

export const CardListItemContent = styled.div`
  ${Typography} {
    color: ${({ theme }) => theme.mutedText};
    margin: 0.25rem 0 0;
    line-height: 1.5rem;
  }

  ${Heading} {
    font-weight: 500;
    color: ${({ theme }) => theme.primaryColor};
    margin: 0;
  }
`;

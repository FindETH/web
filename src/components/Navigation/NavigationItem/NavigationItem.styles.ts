import styled from 'styled-components';
import { LinkWrapper } from '../NavigationLink';

export const NavigationItemContainer = styled.li`
  display: inline-block;

  &:not(:first-of-type) {
    margin-left: 1rem;
  }

  ${LinkWrapper} {
    padding: 0.5rem 0.75rem;
    border-radius: ${({ theme }) => theme.mediumBorderRadius};
    text-decoration: none;
    color: ${({ theme }) => theme.navigation.text};
    font-size: 0.875rem;
    font-weight: 500;

    &.active {
      background: ${({ theme }) => theme.navigation.activeBackground};
      color: ${({ theme }) => theme.navigation.activeText};
    }

    &:hover {
      background: ${({ theme }) => theme.navigation.hoverBackground};
      color: ${({ theme }) => theme.navigation.activeText};
    }
  }
`;

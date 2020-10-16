import { transparentize } from 'polished';
import styled, { keyframes } from 'styled-components';

export interface SpinnerProps {
  size?: string;
}

const Spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const StyledSpinner = styled.div<SpinnerProps>`
  margin: 0 auto;
  position: relative;
  border: 0.4rem solid ${({ theme }) => transparentize(0.8, theme.primaryColor)};
  border-left-color: ${({ theme }) => theme.primaryColor};
  transform: translateZ(0);
  animation: ${Spin} 1.1s infinite linear;

  &,
  :after {
    width: ${({ size = '3rem' }) => size};
    height: ${({ size = '3rem' }) => size};
    border-radius: 50%;
  }
`;

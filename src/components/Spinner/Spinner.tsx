import { transparentize } from 'polished';
import styled, { keyframes } from 'styled-components';

const SpinnerKeyframes = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

interface Props {
  size?: string;
}

const Spinner = styled.div<Props>`
  position: relative;
  border-top: 0.1rem solid ${({ theme }) => transparentize(0.8, theme.primaryColor)};
  border-right: 0.1rem solid ${({ theme }) => transparentize(0.8, theme.primaryColor)};
  border-bottom: 0.1rem solid ${({ theme }) => transparentize(0.8, theme.primaryColor)};
  border-left: 0.1rem solid ${({ theme }) => theme.primaryColor};
  transform: translateZ(0);
  animation: ${SpinnerKeyframes} 1.1s infinite linear;

  &,
  &:after {
    border-radius: 50%;
    width: ${({ size = '1rem' }) => size};
    height: ${({ size = '1rem' }) => size};
  }
`;

export default Spinner;

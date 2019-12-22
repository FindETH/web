import { transparentize } from 'polished';
import styled from 'styled-components';
import Typography from '../ui/Typography';

export const NetworkContainer = styled.div`
  display: flex;
  align-items: center;

  ${Typography} {
    margin: 0;
  }
`;

interface NetworkIndicatorProps {
  color: string;
}

export const NetworkIndicator = styled.div<NetworkIndicatorProps>`
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 50%;
  background: ${({ color }) => color};
  margin-right: 0.4rem;
  box-shadow: ${({ theme }) => `0 0 2px 0 ${transparentize(0.2, theme.textColor)}`};
`;

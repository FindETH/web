import styled, { css } from 'styled-components';
import Heading from '../ui/Heading';
import Panel from '../ui/Panel';
import Typography from '../ui/Typography';

interface FlexWrapperProps {
  highlight?: boolean;
}

export const ItemContainer = styled(Panel).attrs({ as: 'li' })`
  padding: 1rem;
`;

export const FlexWrapper = styled.div<FlexWrapperProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: color 0.3s;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.linkColor};
  }

  ${({ highlight }: FlexWrapperProps) =>
    highlight &&
    css`
      color: ${({ theme }) => theme.linkColor};
    `};
`;

export const ItemDescription = styled.section`
  margin-left: 1rem;

  ${Typography} {
    margin: 0;
  }
`;

export const ItemIcon = styled.img`
  min-width: 50px;
  max-width: 50px;
  max-height: 50px;
  vertical-align: middle;
`;

export const ItemHeading = styled(Heading).attrs({ as: 'h3' })`
  margin: 0;
`;

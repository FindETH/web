import styled, { css } from 'styled-components';
import Icon from '../../../../../components/Icon';
import Spinner from '../../../../../components/Spinner';

export const RemoveIcon = styled(Icon)`
  cursor: pointer;
`;

export interface AddressWrapperProps {
  isInvalid: boolean;
}

export const AddressWrapper = styled.div<AddressWrapperProps>`
  display: flex;
  align-content: center;

  ${({ isInvalid }) =>
    isInvalid &&
    css`
      text-decoration: line-through;
      color: ${({ theme }) => theme.mutedText};
    `};

  ${Spinner} {
    margin-right: 0.5rem;
  }
`;

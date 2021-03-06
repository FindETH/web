import styled, { css } from 'styled-components';
import { InputContainer, StyledInput } from '../Input';
import InputGroup from '../InputGroup/InputGroup';
import Typography from '../Typography';

interface Props {
  hasError: boolean;
}

export const FieldContainer = styled.label<Props>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  :not(:first-of-type) {
    margin-top: 1rem;
  }

  ${Typography} {
    font-weight: 500;
    margin: 0 0 0.25rem;
  }

  & > ${InputContainer}, & > ${InputGroup} {
    width: 100%;
  }

  ${({ hasError }) =>
    hasError &&
    css`
      ${StyledInput} {
        border-color: ${({ theme }) => theme.input.errorBorder};
      }
    `};
`;

import styled from 'styled-components';
import { StyledInput } from '../Input';

export const DropdownContainer = styled(StyledInput).attrs({ as: 'select' })`
  background: ${({ theme }) => theme.input.background};
`;

export const DropdownOption = styled.option``;

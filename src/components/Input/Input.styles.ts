import styled from 'styled-components';
import Icon from '../Icon';

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const InputIcon = styled(Icon)`
  position: absolute;
  right: 0.75rem;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 1rem;
  height: 1rem;
`;

export const StyledInput = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid ${({ theme }) => theme.input.border};
  border-radius: ${({ theme }) => theme.smallBorderRadius};
  box-shadow: ${({ theme }) => theme.input.shadow};
  line-height: 1.25rem;
  font-family: ${({ theme }) => theme.font};
  font-size: 0.875rem;
  padding: 0.5rem 0.75rem;
  box-sizing: border-box;

  :focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.input.hoverBorder};
    box-shadow: ${({ theme }) => theme.input.hoverShadow};
  }
`;

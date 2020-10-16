import { transparentize } from 'polished';
import styled, { css } from 'styled-components';
import Button from '../ui/Button';

export const ModalBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => transparentize(0.5, theme.primaryColor)};
`;

export type ModalType = 'normal' | 'error';

interface ModalWrapperProps {
  type: ModalType;
}

export const ModalWrapper = styled.div<ModalWrapperProps>`
  min-width: 18rem;
  max-width: 36rem;
  background: ${({ theme }) => theme.modalBackground};
  border-radius: ${({ theme }) => theme.smallBorderRadius};
  padding: 1.6rem;
  box-shadow: rgba(0, 0, 0, 0.03) 0 0 0 0.0625em, rgba(0, 0, 0, 0.05) 0 0.0625em 0 0,
    rgba(0, 0, 0, 0.1) 0 0.0625em 0.1875em 0;

  ${Button} {
    margin-bottom: 0;
    margin-left: 1rem;
  }

  ${({ type }) =>
    type === 'error' &&
    css`
      ${Button} {
        border-color: ${({ theme }) => theme.errorColor};
        color: ${({ theme }) => theme.errorColor};

        &:hover {
          background: ${({ theme }) => transparentize(0.1, theme.errorColor)};
        }
      }
    `};
`;

export const ModalButtons = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
`;

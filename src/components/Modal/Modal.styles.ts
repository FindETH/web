import { transparentize } from 'polished';
import styled from 'styled-components';
import Button from '../ui/Button';
import Heading from '../ui/Heading';
import Typography from '../ui/Typography';

export const ModalBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => transparentize(0.4, theme.primaryColor)};
`;

export type ModalType = 'normal' | 'error';

interface ModalWrapperProps {
  type: ModalType;
}

export const ModalWrapper = styled.div<ModalWrapperProps>`
  min-width: 18rem;
  max-width: 32rem;
  background: ${({ theme }) => theme.modal.background};
  border-radius: ${({ theme }) => theme.mediumBorderRadius};
  box-shadow: ${({ theme }) => theme.largeShadow};

  ${Button} {
    margin-bottom: 0;
    margin-left: 1rem;
  }
`;

export const ModalContent = styled.div`
  padding: 1.5rem 1.5rem 1rem 1.5rem;

  ${Typography} {
    color: ${({ theme }) => theme.modal.text};
    margin: 0;
  }

  ${Heading} {
    color: ${({ theme }) => theme.primaryColor};
    font-size: 1.125rem;
    line-height: 1.5rem;
    margin: 0 0 0.5rem 0;
  }
`;

export const ModalButtons = styled.div`
  padding: 0.75rem 1.5rem;
  display: flex;
  justify-content: flex-end;
  background: ${({ theme }) => theme.modal.buttonBackground};
  border-bottom-left-radius: ${({ theme }) => theme.smallBorderRadius};
  border-bottom-right-radius: ${({ theme }) => theme.smallBorderRadius};
`;

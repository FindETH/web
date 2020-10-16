import { FunctionComponent, ReactPortal } from 'react';
import { createPortal } from 'react-dom';
import Button from '../ui/Button';
import { ModalBackground, ModalButtons, ModalType, ModalWrapper } from './Modal.styles';

export interface Props {
  isVisible: boolean;
  type?: ModalType;
  closeText?: string;
  confirmText?: string;

  onClose(): void;

  onConfirm?(): void;
}

const Modal: FunctionComponent<Props> = ({
  isVisible,
  type = 'normal',
  closeText,
  confirmText,
  onClose,
  onConfirm,
  children
}): ReactPortal =>
  createPortal(
    <>
      {isVisible && (
        <ModalBackground>
          <ModalWrapper type={type}>
            {children}
            <ModalButtons>
              <Button onClick={onClose}>{closeText ?? 'Close'}</Button>
              {onConfirm && <Button onClick={onConfirm}>{confirmText ?? 'Confirm'}</Button>}
            </ModalButtons>
          </ModalWrapper>
        </ModalBackground>
      )}
    </>,
    document.getElementById('modal')!
  );

export default Modal;

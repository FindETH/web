import { AnimatePresence } from 'framer-motion';
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
    <AnimatePresence>
      {isVisible && (
        <ModalBackground
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}>
          <ModalWrapper initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }} type={type}>
            {children}
            <ModalButtons>
              <Button onClick={onClose}>{closeText ?? 'Close'}</Button>
              {onConfirm && <Button onClick={onConfirm}>{confirmText ?? 'Confirm'}</Button>}
            </ModalButtons>
          </ModalWrapper>
        </ModalBackground>
      )}
    </AnimatePresence>,
    document.getElementById('modal')!
  );

export default Modal;

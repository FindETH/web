import { FunctionComponent } from 'react';
import { ModalBackground, ModalType, ModalWrapper } from './Modal.styles';

export interface Props {
  isVisible: boolean;
  type?: ModalType;
  closeText?: string;
  confirmText?: string;
}

const Modal: FunctionComponent<Props> = ({ isVisible, type = 'normal', children }) => (
  <>
    {isVisible && (
      <ModalBackground>
        <ModalWrapper type={type}>{children}</ModalWrapper>
      </ModalBackground>
    )}
  </>
);

export default Modal;

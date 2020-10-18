import { FunctionComponent } from 'react';
import { ModalBackground, ModalType, ModalWrapper } from './Modal.styles';

export interface Props {
  type?: ModalType;
  closeText?: string;
  confirmText?: string;
}

const Modal: FunctionComponent<Props> = ({ type = 'normal', children }) => (
  <ModalBackground>
    <ModalWrapper type={type}>{children}</ModalWrapper>
  </ModalBackground>
);

export default Modal;

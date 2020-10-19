import { FunctionComponent } from 'react';
import Icon from '../Icon';
import { AlertContainer, AlertContent, CloseIcon } from './Alert.styles';

interface Props {
  onClose?(): void;
}

const Alert: FunctionComponent<Props> = ({ onClose, children }) => (
  <AlertContainer>
    <Icon icon="error-2" size="1.25rem" />
    <AlertContent>{children}</AlertContent>
    {onClose && <CloseIcon icon="cross" onClick={onClose} />}
  </AlertContainer>
);

export default Alert;

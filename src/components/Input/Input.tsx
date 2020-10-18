import { DetailedHTMLProps, FunctionComponent, HTMLAttributes } from 'react';
import { IconName } from '../Icon';
import { InputContainer, InputIcon, StyledInput } from './Input.styles';

interface OwnProps {
  icon?: IconName;
  hasError?: boolean;
}

type Props = OwnProps & DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input: FunctionComponent<Props> = ({
  hasError = false,
  icon = hasError ? 'error' : undefined,
  ref: _,
  ...props
}) => (
  <InputContainer>
    <StyledInput {...props} />
    {icon && <InputIcon icon={icon} />}
  </InputContainer>
);

export default Input;

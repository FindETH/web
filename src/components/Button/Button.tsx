import { DetailedHTMLProps, FunctionComponent, HTMLAttributes } from 'react';
import Spinner from '../Spinner';
import StyledButton, { ButtonType } from './Button.styles';

interface OwnProps {
  primary?: boolean;
  disabled?: boolean;
  variant?: ButtonType;
  loading?: boolean;
}

type Props = OwnProps & Omit<DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'ref' | 'type'>;

const Button: FunctionComponent<Props> = ({ children, loading, ...props }) => (
  <StyledButton as="button" {...props}>
    {loading ? <Spinner size="1.1rem" /> : <>{children}</>}
  </StyledButton>
);

export default Button;

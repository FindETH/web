import { FunctionComponent } from 'react';
import Typography from '../ui/Typography';
import { FieldContainer } from './Field.styles';

interface Props {
  label: string;
  hasError?: boolean;
}

const Field: FunctionComponent<Props> = ({ label, hasError = false, children }) => (
  <FieldContainer hasError={hasError}>
    <Typography>{label}</Typography>
    {children}
  </FieldContainer>
);

export default Field;

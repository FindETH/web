import { FunctionComponent } from 'react';
import { SpinnerProps, StyledSpinner } from './Spinner.styles';

interface OwnProps {
  isVisible: boolean;
}

type Props = OwnProps & SpinnerProps;

const Spinner: FunctionComponent<Props> = ({ isVisible, ...props }) => <>{isVisible && <StyledSpinner {...props} />}</>;

export default Spinner;

import { AnimatePresence } from 'framer-motion';
import { FunctionComponent } from 'react';
import { SpinnerProps, StyledSpinner } from './Spinner.styles';

interface OwnProps {
  isVisible: boolean;
}

type Props = OwnProps & SpinnerProps;

const Spinner: FunctionComponent<Props> = ({ isVisible, ...props }) => (
  <AnimatePresence>
    {isVisible && (
      <StyledSpinner
        {...props}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.3 }}
        variants={{
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        }}
      />
    )}
  </AnimatePresence>
);

export default Spinner;

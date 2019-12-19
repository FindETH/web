import { AnimatePresence } from 'framer-motion';
import React, { FunctionComponent } from 'react';

export const PAGE_TRANSITION_PROPS = {
  initial: 'initial',
  animate: 'enter',
  exit: 'exit',
  transition: { duration: 0.6 },
  variants: {
    initial: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    exit: {
      opacity: 0
    }
  }
};

const PageTransition: FunctionComponent = ({ children }) => (
  <AnimatePresence exitBeforeEnter={true} initial={true}>
    {children}
  </AnimatePresence>
);

export default PageTransition;

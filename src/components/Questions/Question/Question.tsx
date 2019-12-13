import { AnimatePresence } from 'framer-motion';
import React, { FunctionComponent, useState } from 'react';
import { QuestionBody, QuestionContainer, QuestionHeading } from './Question.styles';

export interface Props {
  title: string;
}

const Question: FunctionComponent<Props> = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => setOpen(!isOpen);

  return (
    <QuestionContainer>
      <QuestionHeading as="h2" isOpen={isOpen} onClick={handleClick}>
        {title}
      </QuestionHeading>
      <AnimatePresence>
        {isOpen && (
          <QuestionBody
            initial="collapsed"
            animate="open"
            exit="collapsed"
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            variants={{
              open: {
                opacity: 1,
                height: 'auto',
                margin: '2rem 1rem'
              },
              collapsed: {
                opacity: 0,
                height: 0,
                margin: '0rem 1rem'
              }
            }}>
            {children}
          </QuestionBody>
        )}
      </AnimatePresence>
    </QuestionContainer>
  );
};

export default Question;

import { FunctionComponent, useState } from 'react';
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
      {isOpen && <QuestionBody>{children}</QuestionBody>}
    </QuestionContainer>
  );
};

export default Question;

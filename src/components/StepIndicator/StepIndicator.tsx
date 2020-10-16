import { FunctionComponent } from 'react';
import Step from './Step';
import { StepContainer } from './StepIndicator.styles';

interface Props {
  steps: number;
  currentStep: number;
}

const StepIndicator: FunctionComponent<Props> = ({ steps, currentStep }) => (
  <StepContainer>
    {[...Array(steps)].map((_, index) => (
      <Step key={`step-${index}`} active={currentStep === index} />
    ))}
  </StepContainer>
);

export default StepIndicator;

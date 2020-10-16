import { ComponentType, FunctionComponent, useEffect, useState } from 'react';

export interface FlowComponentProps {
  onReset(): void;
  onNext(): void;
}

interface Props {
  components: Array<ComponentType<FlowComponentProps>>;
  onDone(): void;
}

const Flow: FunctionComponent<Props> = ({ components, onDone }) => {
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    if (step >= components.length) {
      onDone();
    }
  }, [components, step]);

  const handleReset = () => setStep(0);
  const handleNext = () => setStep(value => value + 1);

  const Component = components[step];
  if (Component) {
    return <Component onReset={handleReset} onNext={handleNext} />;
  }

  return null;
};

export default Flow;

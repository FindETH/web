import { ComponentType, FunctionComponent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from '../../utils/hooks';
import { setFlow } from './types';

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
  const isFlow = useSelector(state => state.flow.isFlow);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFlow(true));

    return () => {
      if (isFlow) {
        dispatch(setFlow(false));
      }
    };
  }, []);

  useEffect(() => {
    if (step >= components.length) {
      dispatch(setFlow(false));
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

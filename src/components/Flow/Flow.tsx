import React, { ComponentType, ReactElement, useEffect, useState } from 'react';
import { useDispatch } from '../../hooks';
import { setFlow } from '../../store/derivation';
import StepIndicator from '../StepIndicator';
import Container from '../ui/Container';
import FlexContainer from '../ui/FlexContainer';
import Heading from '../ui/Heading';

interface Props<State> {
  title: string;
  components: Array<ComponentType<FlowComponentProps<State>>>;

  handleDone(result: State): void;
}

export interface FlowComponentProps<State> {
  state: Partial<State>;

  onReset(): void;

  onNext(result: Partial<State>): void;
}

/**
 * Flow is a FunctionComponent but since we use generics we can't use the FunctionComponent specifier.
 *
 * TODO: Figure out if it's possible to create a union of the values returned by the components.
 */
const Flow = <State extends object>({ title, components, handleDone }: Props<State>): ReactElement => {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(0);
  const [result, setResult] = useState<Partial<State>>({});

  useEffect(() => {
    dispatch(setFlow(true));

    return () => {
      dispatch(setFlow(false));
    };
  }, []);

  useEffect(() => {
    if (components.length <= current) {
      dispatch(setFlow(false));
      handleDone(result as Required<State>);
    }
  }, [current]);

  const handleReset = () => {
    setCurrent(0);
    setResult({});
  };

  const handleNext = (currentResult?: Partial<State>) => {
    if (currentResult) {
      setResult({ ...result, ...currentResult });
    }

    setCurrent(current + 1);
  };

  const Component = components[current];

  return (
    <>
      <Container>
        <FlexContainer>
          <Heading as="h1">{title}</Heading>
          <StepIndicator steps={components.length} currentStep={current} />
        </FlexContainer>
      </Container>
      {Component && <Component state={result} onReset={handleReset} onNext={handleNext} />}
    </>
  );
};

export default Flow;

import React, { ComponentType, ReactElement, useEffect, useState } from 'react';
import { setFlow } from '../store/derivation';
import { useDispatch } from './useDispatch';

export interface FlowComponentProps<T extends object = {}> {
  state: Partial<T>;

  onNext(result?: T): void;
}

const useFlow = <T extends object>(
  components: Array<ComponentType<FlowComponentProps<T>>>,
  onDone: (state: Partial<T>) => void
): [ReactElement | null] => {
  const [current, setCurrent] = useState(0);
  const [result, setResult] = useState<Partial<T>>({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFlow(true));

    if (components.length <= current) {
      dispatch(setFlow(false));

      onDone(result);
    }
  }, [current]);

  const handleNext = (currentResult?: Partial<T>) => {
    if (currentResult) {
      setResult({ ...result, ...currentResult });
    }

    setCurrent(current + 1);
  };

  const Component = components[current];
  if (Component) {
    return [<Component key="flow-component" state={result} onNext={handleNext} />];
  }

  return [null];
};

export default useFlow;

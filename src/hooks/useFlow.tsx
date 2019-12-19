import { ComponentType, useEffect, useState } from 'react';
import { setFlow } from '../store/derivation';
import { useDispatch } from './useDispatch';

export interface FlowComponentProps<T extends object = {}> {
  state: Partial<T>;

  onReset(): void;
  onNext(result?: Partial<T>): void;
}

export const useFlow = <T extends object>(
  components: Array<ComponentType<FlowComponentProps<T>>>,
  onDone: (state: Partial<T>) => void
): [ComponentType<FlowComponentProps<T>> | null, FlowComponentProps<T>] => {
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

  const handleReset = () => {
    setCurrent(0);
    setResult({});
  };

  const handleNext = (currentResult?: Partial<T>) => {
    if (currentResult) {
      setResult({ ...result, ...currentResult });
    }

    setCurrent(current + 1);
  };

  const Component = components[current];
  if (Component) {
    return [Component, { state: result, onReset: handleReset, onNext: handleNext }];
  }

  return [null, { state: result, onReset: handleReset, onNext: handleNext }];
};

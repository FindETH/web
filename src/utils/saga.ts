import { DeepPartial } from 'redux';
import { runSaga, Saga } from 'redux-saga';
import { ApplicationState } from '../store';

/**
 * Test utility for `redux-saga` that records any actions done by the saga, by running the saga. Returns an array with
 * the actions.
 *
 * @template A
 * @param {Saga<[A]>} saga
 * @param {A} initialAction
 * @param {DeepPartial<ApplicationState>} state
 * @return {Promise<unknown[]>}
 */
export const recordSaga = async <A>(
  saga: Saga<[A]>,
  initialAction: A,
  state?: DeepPartial<ApplicationState>
): Promise<unknown[]> => {
  const dispatched: unknown[] = [];

  const task = runSaga<A, ApplicationState, Saga<[A]>>(
    {
      dispatch: (action) => dispatched.push(action),
      getState: () => state as ApplicationState
    },
    saga,
    initialAction
  );

  await task.toPromise();

  return dispatched;
};

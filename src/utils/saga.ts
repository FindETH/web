import { Action } from 'redux';
import { runSaga, Saga } from 'redux-saga';
import { ApplicationState } from '../store';

/**
 * Test utility for `redux-saga` that records any actions done by the saga, by running the saga. Returns an array with
 * the actions.
 *
 * @template A
 * @param {Saga<[A]>} saga
 * @param {A} initialAction
 * @return {Action[]}
 */
export const recordSaga = async <A extends Action>(saga: Saga<[A]>, initialAction: A) => {
  const dispatched: Action[] = [];

  await runSaga<A, ApplicationState, Saga<[A]>>(
    {
      dispatch: action => dispatched.push(action)
    },
    saga,
    initialAction
  );

  return dispatched;
};

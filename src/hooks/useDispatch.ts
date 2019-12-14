import { useDispatch as useReduxDispatch } from 'react-redux';
import { ApplicationDispatch } from '../store';

/**
 * Type-safe version of the `react-redux` useDispatch hook.
 */
export const useDispatch: () => ApplicationDispatch = useReduxDispatch;

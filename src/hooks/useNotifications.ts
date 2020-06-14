import { useContext } from 'react';
import { NotificationContext, NotificationState } from '../components/NotificationProvider';

/**
 * Wrapper of the `useContext` hook to provide the NotificationContext.
 */
export const useNotifications = (): NotificationState => useContext(NotificationContext);

import { useContext } from 'react';
import { NotificationContext } from '../components/NotificationProvider';

/**
 * Wrapper of the `useContext` hook to provide the NotificationContext.
 */
export const useNotifications = () => useContext(NotificationContext);

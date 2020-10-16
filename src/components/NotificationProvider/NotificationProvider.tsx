import { createContext, FunctionComponent, ReactElement, Reducer, useReducer, useRef } from 'react';
import Typography from '../ui/Typography';

export interface NotificationType {
  id: string;
  type: 'info' | 'warning' | 'error';
  notification: ReactElement;
}

export interface NotificationState {
  notifications: NotificationType[];

  sendNotification(notification: ReactElement | string, type?: 'info' | 'warning' | 'error'): number;
}

export const NotificationContext = createContext<NotificationState>({
  notifications: [],
  sendNotification(): number {
    return 0;
  }
});

interface AddNotificationAction {
  type: 'ADD_NOTIFICATION';
  payload: NotificationType;
}

interface RemoveNotificationAction {
  type: 'REMOVE_NOTIFICATION';
  payload: string;
}

type NotificationAction = AddNotificationAction | RemoveNotificationAction;

const reducer: Reducer<NotificationType[], NotificationAction> = (state, action) => {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return [...state, action.payload];
    case 'REMOVE_NOTIFICATION':
      return state.filter(notification => notification.id !== action.payload);
  }

  return state;
};

const NotificationProvider: FunctionComponent = ({ children }) => {
  const index = useRef(0);
  const [notifications, dispatch] = useReducer(reducer, []);

  const handleRemoveNotification = (id: string) => {
    dispatch({
      type: 'REMOVE_NOTIFICATION',
      payload: id
    });
  };

  const handleAddNotification = (
    notification: ReactElement | string,
    type: 'info' | 'warning' | 'error' = 'info'
  ): number => {
    const id = index.current.toString();

    const content = typeof notification === 'string' ? <Typography>{notification}</Typography> : notification;

    dispatch({
      type: 'ADD_NOTIFICATION',
      payload: {
        id,
        type,
        notification: content
      }
    });

    setTimeout(() => {
      handleRemoveNotification(id);
    }, 5000);

    return index.current++;
  };

  return (
    <NotificationContext.Provider value={{ notifications, sendNotification: handleAddNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;

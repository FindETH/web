import { AnimatePresence } from 'framer-motion';
import React, { FunctionComponent } from 'react';
import { useNotifications } from '../../hooks';
import Notification from '../Notification';
import { NotificationsContainer } from './NotificationList.styles';

const NotificationList: FunctionComponent = () => {
  const { notifications } = useNotifications();

  return (
    <NotificationsContainer>
      <AnimatePresence>
        {notifications.map(({ id, type, notification }) => (
          <Notification key={`notification-${id}`} type={type}>
            {notification}
          </Notification>
        ))}
      </AnimatePresence>
    </NotificationsContainer>
  );
};

export default NotificationList;

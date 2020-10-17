import { FunctionComponent } from 'react';
import { useNotifications } from '../../hooks';
import Notification from '../Notification';
import { NotificationsContainer } from './NotificationList.styles';

const NotificationList: FunctionComponent = () => {
  const { notifications } = useNotifications();

  return (
    <NotificationsContainer>
      {notifications.map(({ id, type, notification }) => (
        <Notification key={`notification-${id}`} type={type}>
          {notification}
        </Notification>
      ))}
    </NotificationsContainer>
  );
};

export default NotificationList;

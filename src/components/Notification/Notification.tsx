import { FunctionComponent } from 'react';
import { NotificationWrapper } from './Notification.styles';

type NotificationType = 'info' | 'warning' | 'error';

interface Props {
  type?: NotificationType;
}

const Notification: FunctionComponent<Props> = ({ type = 'info', children }) => (
  <NotificationWrapper
    type={type}
    positionTransition={true}
    initial={{ opacity: 0, y: -50, scale: 0.3 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}>
    {children}
  </NotificationWrapper>
);

export default Notification;

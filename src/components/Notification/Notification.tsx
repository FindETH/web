import { FunctionComponent } from 'react';
import { NotificationWrapper } from './Notification.styles';

type NotificationType = 'info' | 'warning' | 'error';

interface Props {
  type?: NotificationType;
}

const Notification: FunctionComponent<Props> = ({ type = 'info', children }) => (
  <NotificationWrapper type={type}>{children}</NotificationWrapper>
);

export default Notification;

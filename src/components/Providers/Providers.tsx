import { FunctionComponent } from 'react';
import { ModalProvider } from 'react-modal-hook';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import NotificationProvider from '../NotificationProvider';

interface Props {
  theme: DefaultTheme;
}

const Providers: FunctionComponent<Props> = ({ theme, children }) => (
  <NotificationProvider>
    <ThemeProvider theme={theme}>
      <ModalProvider>{children}</ModalProvider>
    </ThemeProvider>
  </NotificationProvider>
);

export default Providers;

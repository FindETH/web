import React, { FunctionComponent } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import NotificationProvider from '../NotificationProvider';

interface Props {
  theme: DefaultTheme;
}

const Providers: FunctionComponent<Props> = ({ theme, children }) => (
  <NotificationProvider>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </NotificationProvider>
);

export default Providers;

import { FunctionComponent } from 'react';
import { ModalProvider } from 'react-modal-hook';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

const Providers: FunctionComponent = ({ children }) => (
  <ThemeProvider theme={theme}>
    <ModalProvider>{children}</ModalProvider>
  </ThemeProvider>
);

export default Providers;

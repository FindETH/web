import { FunctionComponent } from 'react';
import { ModalProvider } from 'react-modal-hook';
import { DefaultTheme, ThemeProvider } from 'styled-components';

interface Props {
  theme: DefaultTheme;
}

const Providers: FunctionComponent<Props> = ({ theme, children }) => (
  <ThemeProvider theme={theme}>
    <ModalProvider>{children}</ModalProvider>
  </ThemeProvider>
);

export default Providers;

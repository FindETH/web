import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #___gatsby, #gatsby-focus-wrapper {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
  }

  body {
    background: ${({ theme }) => theme.backgroundColour};
  }
`;

export default GlobalStyle;

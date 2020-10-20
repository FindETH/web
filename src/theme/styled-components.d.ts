import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryColor: string;
    textColor: string;
    invertedText: string;
    link: string;
    borderColor: string;
    warningColor: string;
    errorColor: string;

    backgroundColour: string;

    smallBorderRadius: string;
    mediumBorderRadius: string;

    font: string;
    headingFont: string;

    smallShadow: string;
    largeShadow: string;

    border: string;

    mutedText: string;

    table: {
      background: white;
      headerBackground: string;
    };

    input: {
      background: white;
      shadow: string;
      border: string;
      hoverShadow: string;
      hoverBorder: string;
      errorBorder: string;
    };

    button: {
      default: {
        background: string;
        text: string;
      };
      primary: {
        background: string;
        text: string;
      };
      danger: {
        background: string;
        text: string;
      };
    };

    modal: {
      text: string;
      background: string;
      buttonBackground: string;
    };

    navigation: {
      font: string;

      background: string;
      hoverBackground: string;
      activeBackground: string;

      text: string;
      activeText: string;
    };

    pageHeader: {
      font: string;
      background: string;
    };

    footer: {
      text: string;
      background: string;
    };
  }
}

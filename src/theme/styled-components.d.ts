import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryColor: string;
    textColor: string;
    invertedText: string;
    linkColor: string;
    linkHoverColor: string;
    borderColor: string;
    warningColor: string;
    errorColor: string;

    backgroundColour: string;

    sectionBackground: string;
    sectionOddBackground: string;
    modalBackground: string;

    smallBorderRadius: string;

    font: string;
    headingFont: string;

    navigation: {
      font: string;

      background: string;
      hoverBackground: string;
      activeBackground: string;

      text: string;
      activeText: string;
    };
  }
}

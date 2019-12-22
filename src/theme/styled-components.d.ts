import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryColor: string;
    textColor: string;
    linkColor: string;
    linkHoverColor: string;
    borderColor: string;
    errorColor: string;

    sectionBackground: string;
    sectionOddBackground: string;
    modalBackground: string;

    smallBorderRadius: string;

    font: string;
    headingFont: string;
  }
}

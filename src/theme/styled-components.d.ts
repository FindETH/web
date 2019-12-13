import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryColor: string;
    linkColor: string;
    linkHoverColor: string;
    borderColor: string;

    sectionBackground: string;
    sectionOddBackground: string;
    modalBackground: string;

    smallBorderRadius: string;

    font: string;
    headingFont: string;
  }
}

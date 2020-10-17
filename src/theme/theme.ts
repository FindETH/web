import { darken, lighten } from 'polished';
import { DefaultTheme } from 'styled-components';

export const PRIMARY_COLOUR = '#242429';

const theme: DefaultTheme = {
  primaryColor: PRIMARY_COLOUR,
  textColor: '#323232',
  invertedText: 'white',
  linkColor: '#1eb8e7',
  linkHoverColor: '#4cc7ec',
  borderColor: '#e5e5e5',
  warningColor: '#ffcc00',
  errorColor: '#ed4337',

  backgroundColour: '#f4f5f7',

  sectionBackground: 'white',
  sectionOddBackground: '#f6f7f9',
  modalBackground: 'white',

  smallBorderRadius: '.5rem',

  font: '"Open Sans", sans-serif',
  headingFont: '"Public Sans", sans-serif',

  navigation: {
    font: '"Inter", sans-serif',

    background: PRIMARY_COLOUR,
    hoverBackground: lighten(0.1, PRIMARY_COLOUR),
    activeBackground: darken(0.1, PRIMARY_COLOUR),

    text: '#d2d6dc',
    activeText: 'white'
  }
};

export default theme;

import { darken, lighten } from 'polished';
import { DefaultTheme } from 'styled-components';

export const PRIMARY_COLOUR = '#242429';

const theme: DefaultTheme = {
  primaryColor: PRIMARY_COLOUR,
  textColor: '#323232',
  invertedText: 'white',
  link: '#2c9bbb',
  borderColor: '#e5e5e5',
  warningColor: '#ffcc00',
  errorColor: '#ed4337',

  backgroundColour: '#f4f5f7',

  smallBorderRadius: '.375rem',
  mediumBorderRadius: '.5rem',

  font: '"Inter", sans-serif',
  headingFont: '"Inter", sans-serif',

  smallShadow: '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .05)',
  largeShadow: '0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)',

  border: '#d2d6dc',

  mutedText: '#6b7280',

  table: {
    background: 'white',
    headerBackground: '#f9fafb'
  },

  input: {
    background: 'white',
    shadow: '0 1px 2px 0 rgba(0, 0, 0, .05)',
    border: '#d2d6dc',
    hoverShadow: '0 0 0 3px rgba(164, 202, 254, .45)',
    hoverBorder: '#a4cafe',
    errorBorder: '#f8b4b4'
  },

  button: {
    default: {
      background: 'white',
      text: PRIMARY_COLOUR
    },
    primary: {
      background: PRIMARY_COLOUR,
      text: 'white'
    },
    danger: {
      background: '#e02424',
      text: 'white'
    }
  },

  modal: {
    text: '#6b7280',
    background: 'white',
    buttonBackground: '#f9fafb'
  },

  navigation: {
    text: '#d2d6dc',
    activeText: 'white',
    font: '"Inter", sans-serif',

    background: PRIMARY_COLOUR,
    hoverBackground: lighten(0.1, PRIMARY_COLOUR),
    activeBackground: darken(0.1, PRIMARY_COLOUR)
  },

  pageHeader: {
    font: '"Inter", sans-serif',
    background: 'white'
  },

  footer: {
    text: '#727e8b',
    background: '#f4f5f7'
  }
};

export default theme;

import styled, { css, DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import Typography from '../ui/Typography';

interface NotificationWrapperProps {
  type: 'info' | 'warning' | 'error';
}

const NOTIFICATION_VARIANTS: {
  [key in NotificationWrapperProps['type']]: FlattenInterpolation<ThemeProps<DefaultTheme>>;
} = {
  info: css`
    border-left-color: ${({ theme }) => theme.linkColor};
  `,
  warning: css`
    border-left-color: ${({ theme }) => theme.warningColor};
  `,
  error: css`
    border-left-color: ${({ theme }) => theme.errorColor};
  `
};

export const NotificationWrapper = styled.li<NotificationWrapperProps>`
  display: block;
  width: 20rem;
  max-width: 100%;
  background: white;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: rgba(0, 0, 0, 0.03) 0 0 0 0.0625em, rgba(0, 0, 0, 0.05) 0 0.0625em 0 0,
    rgba(0, 0, 0, 0.1) 0 0.0625em 0.1875em 0;
  border-left: ${({ theme }) => `0.3rem solid ${theme.primaryColor}`};
  box-sizing: border-box;

  ${({ type }) => NOTIFICATION_VARIANTS[type]};

  ${Typography} {
    margin: 0;
  }
`;

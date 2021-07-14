import { lighten, transitions } from 'polished';
import styled, { css, DefaultTheme, StyledComponent } from 'styled-components';
import Typography from '../Typography';

export type ButtonType = 'default' | 'primary' | 'danger';

interface Props {
  primary?: boolean;
  disabled?: boolean;
  variant?: ButtonType;
}

const StyledButton: StyledComponent<'button', DefaultTheme, Props> = styled(Typography)<Props>`
  outline: none;
  border: none;
  border-radius: ${({ theme }) => theme.smallBorderRadius};
  background: ${({ theme, variant = 'default' }) => theme.button[variant].background};
  margin: 1rem 0 0;
  padding: 0.5rem 1rem;
  font-family: ${({ theme }) => theme.font};
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme, variant = 'default' }) => theme.button[variant].text};
  cursor: pointer;

  ${transitions(['background-color', 'color', 'opacity'], '0.2s')};

  :hover {
    background: ${({ theme, disabled, variant = 'default' }) =>
      !disabled && lighten(0.15, theme.button[variant].background)};
    color: white;
  }

  ${({ variant = 'default' }) =>
    variant === 'default' &&
    css<Props>`
      box-shadow: ${({ theme }) => theme.smallShadow};
      border: 1px solid ${({ theme }) => theme.border};

      :hover {
        color: ${({ theme, disabled }) => (disabled ? theme.primaryColor : lighten(0.35, theme.primaryColor))};
      }
    `};

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.7;
      cursor: initial;
    `};
`;

export default StyledButton;

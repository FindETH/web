import { lighten, transitions } from 'polished';
import styled, { css } from 'styled-components';
import Typography from '../Typography';

type ButtonType = 'default' | 'primary' | 'danger';

interface Props {
  primary?: boolean;
  disabled?: boolean;
  type?: ButtonType;
}

const Button = styled(Typography).attrs({ as: 'button' })<Props>`
  outline: none;
  border: none;
  border-radius: ${({ theme }) => theme.smallBorderRadius};
  background: ${({ theme, type = 'default' }) => theme.button[type].background};
  padding: 0.5rem 1rem;
  font-family: ${({ theme }) => theme.font};
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme, type = 'default' }) => theme.button[type].text};
  cursor: pointer;

  ${transitions(['background-color', 'color', 'opacity'], '0.2s')};

  :hover {
    background: ${({ theme, disabled, type = 'default' }) => !disabled && lighten(0.15, theme.button[type].background)};
    color: white;
  }

  ${({ type = 'default' }) =>
    type === 'default' &&
    css`
      box-shadow: ${({ theme }) => theme.smallShadow};
      border: 1px solid ${({ theme }) => theme.border};

      :hover {
        color: ${({ theme }) => lighten(0.35, theme.primaryColor)};
      }
    `};

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.7;
      cursor: initial;
    `};
`;

export default Button;

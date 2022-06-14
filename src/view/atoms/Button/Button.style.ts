import styled, { css, DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import { TButtonProps } from './TButtonProps';

type TButtonType = Record<string, FlattenInterpolation<ThemeProps<DefaultTheme>>>;

const outlinedBtns: TButtonType = {
  outlineSuccess: css`
    border: 2px solid ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
  `,
  outlineSubmit: css`
    border: 2px solid ${({ theme }) => theme.colors.violet};
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
  `,
  outlineCancel: css`
    border: 2px solid ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
  `,
};

const paintedOverBtns: TButtonType = {
  success: css`
    background-color: ${({ theme }) => theme.colors.green};
  `,
  submit: css`
    background-color: ${({ theme }) => theme.colors.violet};
  `,
  cancel: css`
    background-color: ${({ theme }) => theme.colors.red};
  `,
};

const variants = {
  success: css<TButtonProps>`
    ${({ outlined }) => (outlined ? outlinedBtns.outlineSuccess : paintedOverBtns.success)};
  `,
  submit: css<TButtonProps>`
    ${({ outlined }) => (outlined ? outlinedBtns.outlineSubmit : paintedOverBtns.submit)};
  `,
  cancel: css<TButtonProps>`
    ${({ outlined }) => (outlined ? outlinedBtns.outlineCancel : paintedOverBtns.cancel)};
  `,
};

export const Button = styled.button<TButtonProps>`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.colors.white};
  width: 320px;
  height: 48px;
  ${({ variant }) => variants[variant]};
  @media ${({ theme }) => theme.media.tablet} {
    width: 384px;
    height: 48px;
  }
  @media ${({ theme }) => theme.media.notebook} {
    width: 412px;
    height: 64px;
    font-size: 24px;
  }
`;

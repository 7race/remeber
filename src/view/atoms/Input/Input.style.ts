import styled, { css } from 'styled-components';
import { TInputProps } from './TInputProps';

const variants = {
  grey: css`
    background-color: ${({ theme }) => theme.colors.lightGrey};
    border: none;
    &::placeholder {
      color: ${({ theme }) => theme.colors.grey};
    }
  `,
};

export const InputPassword = styled.div`
  position: relative;
  & img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-left: -50px;
    cursor: pointer;
    width: 30px;
    height: 30px;
  }
`;

export const Input = styled.input<TInputProps>`
  font-size: 20px;
  padding: 15px;
  border-radius: 8px;
  outline: none;
  padding-left: 20px;

  ${({ variant }) => (variant ? variants[variant] : null)}
`;

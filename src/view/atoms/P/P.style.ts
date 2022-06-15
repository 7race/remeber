import styled, { css } from 'styled-components';
import { TP } from './TPProps';

const pVariantsTablet = {
  h1: css`
    font-size: 40px;
  `,
  h2: css`
    font-size: 30px;
  `,
  small1: css`
    font-size: 16px;
  `,
  small2: css`
    font-size: 14px;
  `,
};

const pVariantsNotebook = {
  h1: css`
    font-size: 50px;
  `,
  h2: css`
    font-size: 50px;
  `,
  small1: css`
    font-size: 18px;
  `,
  small2: css`
    font-size: 16px;
  `,
};

export const P = styled.p<TP>`
  font-family: 'Tai Heritage Pro', serif;
  ${({ variant }) => pVariantsTablet[variant]}
  @media ${({ theme }) => theme.media.notebook} {
    ${({ variant }) => pVariantsNotebook[variant]}
  }
`;

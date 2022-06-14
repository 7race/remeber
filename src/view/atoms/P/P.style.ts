import styled, { css } from 'styled-components';
import { TP } from './TPProps';

const pTypesTablet = {
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

const pTypesNotebook = {
  h1: css`
    font-size: 50px;
  `,
  h2: css`
    font-size: 50px;
  `,
  small1: css`
    font-size: 30px;
  `,
  small2: css`
    font-size: 20px;
  `,
};

export const P = styled.p<TP>`
  font-family: 'Tai Heritage Pro', serif;
  ${({ type }) => pTypesTablet[type]}
  @media ${({ theme }) => theme.media.notebook} {
    ${({ type }) => pTypesNotebook[type]}
  }
`;

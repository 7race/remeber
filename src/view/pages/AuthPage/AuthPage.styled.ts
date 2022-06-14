import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const AuthPage = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 20vh minmax(min-content, max-content) 1fr;
  & > form {
    grid-area: form;
  }
  grid-template-areas:
    '.'
    'form'
    '.';
  padding: 20px;

  @media ${({ theme }) => theme.media.tablet} {
    grid-template-rows: 1fr minmax(min-content, max-content) 1fr;
    grid-template-columns: 1fr 400px 1fr;
    grid-template-areas:
      '. . .'
      '. form .'
      '. . .';
  }
`;

import styled from 'styled-components';

export const WelcomePage = styled.div`
  display: grid;
  justify-items: center;
  grid-gap: 100px;
  margin-top: 30px;
  & img {
    width: 200px;
    margin-bottom: 100px;
  }

  @media ${({ theme }) => theme.media.tablet} {
    & img {
      width: 500px;
      margin-bottom: 0px;
    }
  }
`;

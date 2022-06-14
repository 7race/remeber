import styled from 'styled-components';

export const Form = styled.form`
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  & p {
    text-align: center;
    margin-bottom: 46px;
  }
  & input {
    width: 100%;
    background-color: white;
  }
  & > input {
    margin-bottom: 40px;
  }
  & div:first-of-type {
    width: 100%;
    margin-bottom: 60px;
  }
  & button {
    width: 100%;
  }

  @media ${({ theme }) => theme.media.notebook} {
    background-color: ${({ theme }) => theme.colors.white};
    padding: 60px 50px;
    width: 512px;
    height: 550px;
    & input {
      background-color: ${({ theme }) => theme.colors.lightGrey};
    }
    & div:first-of-type {
      margin-bottom: 80px;
    }
  }
`;

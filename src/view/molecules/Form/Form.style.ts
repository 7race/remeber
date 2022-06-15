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
  & button {
    width: 100%;
  }
  & .text-error {
    color: ${({ theme }) => theme.colors.red};
    text-align: left;
    margin-top: 15px;
    margin-bottom: 0;
  }

  & > div:not(:last-of-type) {
    margin-bottom: 25px;
  }

  @media ${({ theme }) => theme.media.notebook} {
    background-color: ${({ theme }) => theme.colors.white};
    padding: 60px 50px;
    width: 512px;
    & input {
      background-color: ${({ theme }) => theme.colors.lightGrey};
    }
  }
`;

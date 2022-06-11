import styled from 'styled-components';

export const InputPassword = styled.div`
  position: relative;
  & img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-left: -50px;
    cursor: pointer;
    width: 35px;
    height: 35px;
  }
`;

export const Input = styled.input`
  font-size: 20px;
  padding: 15px;
  border-radius: 8px;
  outline: none;
`;

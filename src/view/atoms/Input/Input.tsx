import { useState } from 'react';
import { eyeSolid, eyeSlash } from '@static';
import * as S from './Input.style';

type TInputProps = {
  placeholder?: string;
  type?: 'text' | 'password';
};

type TInputPasswordProps = {
  placeholder?: string;
  type: 'password';
};

const InputPassword = ({ placeholder, type }: TInputPasswordProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const changeVisible = () => setIsPasswordVisible((prev) => !prev);
  return (
    <S.InputPassword>
      {isPasswordVisible ? (
        <>
          <S.Input placeholder={placeholder} />
          <img src={eyeSolid} alt='opened eye' onClick={changeVisible} />
        </>
      ) : (
        <>
          <S.Input placeholder={placeholder} type={type} />
          <img src={eyeSlash} alt='closed eye' onClick={changeVisible} />
        </>
      )}
    </S.InputPassword>
  );
};

export const Input = ({ placeholder, type = 'text' }: TInputProps) =>
  type === 'password' ? (
    <InputPassword placeholder={placeholder} type={type} />
  ) : (
    <S.Input placeholder={placeholder} type={type} />
  );

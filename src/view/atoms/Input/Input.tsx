import { useState } from 'react';
import { eyeSolid, eyeSlash } from '@static';
import { TInputProps } from './TInputProps';
import * as S from './Input.style';

const InputPassword = ({ placeholder, type, variant, value, onChange }: TInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const changeVisible = () => setIsPasswordVisible((prev) => !prev);
  return (
    <S.InputPassword>
      {isPasswordVisible ? (
        <>
          <S.Input placeholder={placeholder} variant={variant} value={value} onChange={onChange} />
          <img src={eyeSolid} alt='opened eye' onClick={changeVisible} />
        </>
      ) : (
        <>
          <S.Input placeholder={placeholder} type={type} variant={variant} value={value} onChange={onChange} />
          <img src={eyeSlash} alt='closed eye' onClick={changeVisible} />
        </>
      )}
    </S.InputPassword>
  );
};

export const Input = ({ placeholder, type, variant, value, onChange }: TInputProps) =>
  type === 'password' ? (
    <InputPassword placeholder={placeholder} type={type} variant={variant} value={value} onChange={onChange} />
  ) : (
    <S.Input placeholder={placeholder} type={type} variant={variant} value={value} onChange={onChange} />
  );

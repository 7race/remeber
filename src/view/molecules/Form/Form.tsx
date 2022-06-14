import { MouseEvent } from 'react';
import { P } from '@atoms/P';
import { Input } from '@atoms/Input';
import { Button } from '@atoms/Button';
import * as S from './Form.style';

export const Form = () => {
  const submitClick = (e: MouseEvent) => {
    e.preventDefault();
  };

  return (
    <S.Form aria-label='form'>
      <P type='h1'>Вход</P>
      <Input placeholder='Логин' variant='grey' />
      <Input placeholder='Пароль' type='password' variant='grey' />
      <Button variant='submit' onClick={submitClick}>
        Войти
      </Button>
    </S.Form>
  );
};

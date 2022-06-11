import { MouseEvent } from 'react';
import { P } from '@atoms/P';
import { Input } from '@atoms/Input';
import { Button } from '@atoms/Button';

export const Form = () => {
  const submitClick = (e: MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <P type='h1'>Вход</P>
      <Input placeholder='Логин' />
      <Input placeholder='Пароль' type='password' />
      <Button variant='submit' onClick={submitClick}>
        Войти
      </Button>
    </div>
  );
};

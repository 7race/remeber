import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { P } from '@atoms/P';
import { Input } from '@atoms/Input';
import { Button } from '@atoms/Button';
import * as S from './Form.style';

type TInputs = {
  login: string;
  password: string;
};

export const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TInputs>();

  const onSubmit: SubmitHandler<TInputs> = () => {};

  return (
    <S.Form aria-label='form' onSubmit={handleSubmit(onSubmit)}>
      <P variant='h1'>Вход</P>
      <div>
        <Controller
          name='login'
          control={control}
          defaultValue=''
          rules={{ required: true }}
          render={({ field: { value, onChange } }) => (
            <Input value={value} onChange={onChange} placeholder='Логин' variant='grey' />
          )}
        />
        {errors.login ? (
          <P variant='small1' className='text-error'>
            ⚠ This field is required
          </P>
        ) : (
          <P variant='small1' className='text-error'>
            &nbsp;
          </P>
        )}
      </div>

      <div>
        <Controller
          name='password'
          control={control}
          defaultValue=''
          rules={{ required: true }}
          render={({ field: { value, onChange } }) => (
            <Input value={value} onChange={onChange} placeholder='Пароль' type='password' variant='grey' />
          )}
        />
        {errors.password ? (
          <P variant='small1' className='text-error'>
            ⚠ This field is required
          </P>
        ) : (
          <P variant='small1' className='text-error'>
            &nbsp;
          </P>
        )}
      </div>
      <Button variant='secondary' type='submit'>
        Войти
      </Button>
    </S.Form>
  );
};

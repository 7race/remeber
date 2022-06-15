import Confetti from 'react-confetti';
import { P } from '@atoms/P';
import { Button } from '@atoms/Button';
import { meow } from '@static';
import { useWindowSize } from '@hooks/useWindowSize';
import * as S from './WelcomePage.style';

export const WelcomePage = () => {
  const { width, height } = useWindowSize();

  return (
    <>
      <Confetti width={width} height={height} />
      <S.WelcomePage>
        <P variant='h1'>Welcome</P>
        <img src={meow} alt='cat' />
        <Button variant='cancel' outlined>
          Log out
        </Button>
      </S.WelcomePage>
    </>
  );
};

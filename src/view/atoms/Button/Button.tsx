import Ripples from 'react-ripples';
import * as S from './Button.style';
import { TButtonProps } from './TButtonProps';

export const Button = ({ children, variant, outlined, type, onClick }: TButtonProps) => (
  <Ripples>
    <S.Button variant={variant} outlined={outlined} type={type} onClick={onClick}>
      {children}
    </S.Button>
  </Ripples>
);

import Ripples from 'react-ripples';
import * as S from './Button.style';
import { TButtonProps } from './TButtonProps';

export const Button = ({ children, variant, outlined }: TButtonProps) => (
  <Ripples>
    <S.Button variant={variant} outlined={outlined}>
      {children}
    </S.Button>
  </Ripples>
);

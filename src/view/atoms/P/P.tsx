import { TP } from './TPProps';
import * as S from './P.style';

export const P = ({ children, variant, className }: TP) => (
  <S.P variant={variant} className={className}>
    {children}
  </S.P>
);

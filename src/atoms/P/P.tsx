import { TP } from './TPProps';
import * as S from './P.styled';

export const P = ({ children, type }: TP) => <S.P type={type}>{children}</S.P>;
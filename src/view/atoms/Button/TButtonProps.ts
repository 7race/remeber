import { MouseEventHandler } from 'react';

export type TButtonProps = {
  children: string;
  variant: 'success' | 'secondary' | 'cancel';
  type?: 'submit';
  outlined?: boolean;
  onClick?: MouseEventHandler;
};

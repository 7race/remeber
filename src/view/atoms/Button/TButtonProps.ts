import { MouseEventHandler } from 'react';

export type TButtonProps = {
  children: string;
  variant: 'success' | 'submit' | 'cancel';
  outlined?: boolean;
  onClick?: MouseEventHandler;
};

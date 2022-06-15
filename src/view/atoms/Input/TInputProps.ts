import { ChangeEventHandler } from 'react';

export type TInputProps = {
  placeholder?: string;
  type?: 'password';
  variant?: 'grey';
  value: string;
  onChange: ChangeEventHandler;
};

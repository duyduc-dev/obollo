import cn from '@libs/clsx';
import React, { forwardRef, ReactNode } from 'react';

import style from './input.module.scss';

type InputProps = {
  hasError?: boolean;
  containerClassName?: string;
  rightSection?: ReactNode;
  type?: 'text' | 'password';
} & React.HTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
  const { containerClassName, hasError, rightSection, type = 'text', ...restProps } = props;

  return (
    <div
      className={cn(style.inputContainer, containerClassName, {
        [style.hasError]: hasError,
      })}
    >
      <input spellCheck="false" autoComplete="off" type={type} ref={ref} {...restProps} />
      {rightSection}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;

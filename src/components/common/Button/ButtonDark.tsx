import { PuffLoader } from '@components/common/Loading';
import cn from '@libs/clsx';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import React, { ReactNode } from 'react';

interface ButtonDarkProps extends ButtonProps {
  children?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  loadingMessage?: string;
}

const ButtonStyled = styled(Button)`
  font-family: var(--font-family);
  font-weight: 580;
  height: var(--space-slll-px);
  font-size: 13px;
  font-style: normal;
  text-transform: none;
  padding: var(--space-xss-px) var(--space-sll-px);
  background-color: ${(props) => (props.disabled ? '#EFEFEF' : '#161616')};
  color: ${({ disabled }) => (disabled ? '#8F8F8F' : '#F8F8F8')};
  border-radius: var(--space-xss-px);
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  outline-style: none;
  appearance: none;
  white-space: nowrap;
  width: auto;

  &:hover {
    background-color: #444444;
  }

  &:focus {
    outline: none;
  }
`;

const ButtonDark = (props: ButtonDarkProps) => {
  const { children, disabled, className, loading, loadingMessage, ...rest } = props;

  return (
    <ButtonStyled type="button" disabled={disabled} {...rest} className={cn(className)}>
      {loading && (
        <>
          <PuffLoader color="#f8f8f8" />
          {loadingMessage}
        </>
      )}
      {!loading && children}
    </ButtonStyled>
  );
};

export default ButtonDark;

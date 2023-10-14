import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import React from 'react';

const ButtonStyled = styled(Button)`
  background-color: transparent;
  text-decoration: none;
  color: var(--neutrals-grey-1);
  text-transform: none;
  margin-left: 0;
  padding: 4px 4px;
  cursor: pointer;
  text-align: center;
  line-height: var(--space-sl-px);
  font-weight: var(--font-weight-bolder);
  font-size: var(--space-sm-px);

  &:hover {
    background-color: transparent;
  }
`;

type ButtonOverlayProps = ButtonProps;

const ButtonOverlay = (props: ButtonOverlayProps) => {
  const { children, ...restProps } = props;

  return <ButtonStyled {...restProps}>{children}</ButtonStyled>;
};

export default ButtonOverlay;

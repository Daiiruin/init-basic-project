import type * as React from 'react';
import styled from 'styled-components';
import { colorPrimary, colorPrimaryHover, paddingSM, paddingXS, borderRadiusXS } from './tokens';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const StyledButton = styled.button({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `${paddingXS} ${paddingSM}`,
  border: 'none',
  borderRadius: borderRadiusXS,
  fontSize: '0.9375rem',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'background-color 0.2s, opacity 0.2s',
  width: '100%',
  backgroundColor: colorPrimary,
  color: '#ffffff',

  '&:hover:not(:disabled)': {
    backgroundColor: colorPrimaryHover,
  },

  '&[disabled]': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
});

export function Button({ children, ...props }: ButtonProps) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

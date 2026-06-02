import type * as React from 'react';
import styled from 'styled-components';
import { colorText, colorBackground, colorBorder, colorBorderFocus, colorTextPlaceholder, paddingXS, borderRadiusXS } from './tokens';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const StyledInput = styled.input({
  width: '100%',
  padding: `${paddingXS} 0.875rem`,
  border: `1px solid ${colorBorder}`,
  borderRadius: borderRadiusXS,
  fontSize: '0.9375rem',
  color: colorText,
  backgroundColor: colorBackground,
  boxSizing: 'border-box',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  outline: 'none',

  '&:focus': {
    borderColor: colorBorderFocus,
    boxShadow: `0 0 0 3px rgba(79, 70, 229, 0.15)`,
  },

  '&::placeholder': {
    color: colorTextPlaceholder,
  },
});

export function Input(props: InputProps) {
  return <StyledInput {...props} />;
}

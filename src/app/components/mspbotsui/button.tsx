import React from 'react';
import { UpdateIcon } from '@radix-ui/react-icons';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Button({
  className = '',
  variant = 'primary',
  size = 'md',
  loading = false,
  leftIcon,
  rightIcon,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseClass = 'mspbots-button';
  const variantClass = `mspbots-button-${variant}`;
  const sizeClass = `mspbots-button-${size}`;

  return (
    <button
      className={`${baseClass} ${variantClass} ${sizeClass} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <UpdateIcon className="animate-spin" />}
      {!loading && leftIcon && <span className="flex items-center shrink-0">{leftIcon}</span>}
      <span className="font-inter text-[14px] leading-[22px]">{children}</span>
      {!loading && rightIcon && <span className="flex items-center shrink-0">{rightIcon}</span>}
    </button>
  );
}
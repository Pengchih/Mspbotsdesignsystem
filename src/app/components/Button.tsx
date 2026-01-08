import React from 'react';

export type ButtonColorStyle = 'primary' | 'info' | 'success' | 'danger';
export type ButtonVariant = 'solid' | 'plain' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The color style of the button */
  colorStyle?: ButtonColorStyle;
  /** The visual variant of the button */
  variant?: ButtonVariant;
  /** The size of the button */
  size?: ButtonSize;
  /** Icon to display on the left side of the button text */
  leftIcon?: React.ReactNode;
  /** Icon to display on the right side of the button text */
  rightIcon?: React.ReactNode;
  /** Whether the button is in a loading state */
  loading?: boolean;
  /** The content of the button */
  children?: React.ReactNode;
}

/**
 * Button component following MSPBots Design System.
 * 
 * Supports 4 color styles (primary, info, success, danger) and 4 variants (solid, plain, outline, ghost).
 * 
 * @example
 * ```tsx
 * <Button colorStyle="primary" variant="solid" size="md">
 *   Click me
 * </Button>
 * 
 * <Button colorStyle="danger" variant="outline" leftIcon={<TrashIcon />}>
 *   Delete
 * </Button>
 * ```
 */
export function Button({
  colorStyle = 'primary',
  variant = 'solid',
  size = 'md',
  leftIcon,
  rightIcon,
  loading = false,
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseClass = 'mspbots-button';
  const colorStyleClass = `mspbots-button-${colorStyle}`;
  const variantClass = `mspbots-button-${variant}`;
  const sizeClass = `mspbots-button-${size}`;
  const disabledClass = disabled ? 'mspbots-button-disabled' : '';
  
  const classes = [
    baseClass,
    colorStyleClass,
    variantClass,
    sizeClass,
    disabledClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span className="mspbots-button-spinner" aria-hidden="true">
          <svg 
            className="mspbots-button-spinner-icon" 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none"
          >
            <circle 
              cx="8" 
              cy="8" 
              r="6" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round"
              strokeDasharray="32"
              strokeDashoffset="12"
            />
          </svg>
        </span>
      )}
      {!loading && leftIcon && (
        <span className="mspbots-button-icon">{leftIcon}</span>
      )}
      {children && <span className="mspbots-button-content">{children}</span>}
      {!loading && rightIcon && (
        <span className="mspbots-button-icon">{rightIcon}</span>
      )}
    </button>
  );
}

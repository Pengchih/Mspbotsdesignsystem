import React, { useState, useRef } from 'react';
import { CrossCircledIcon } from '@radix-ui/react-icons';

export type InputSize = 'sm' | 'md' | 'lg';
export type InputVariant = 'plain' | 'error' | 'disable';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** The size of the input */
  size?: InputSize;
  /** The visual variant of the input */
  variant?: InputVariant;
  /** Whether the input is clearable */
  clearable?: boolean;
  /** Icon to display on the left side */
  leftIcon?: React.ReactNode;
  /** Icon to display on the right side */
  rightIcon?: React.ReactNode;
  /** Callback when the clear button is clicked */
  onClear?: () => void;
  /** Maximum number of characters allowed (shows counter) */
  wordLimit?: number;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    size = 'md', 
    variant = 'plain', 
    clearable = false, 
    leftIcon, 
    rightIcon, 
    className, 
    disabled, 
    onClear,
    wordLimit,
    value,
    onChange,
    ...props 
  }, ref) => {
    const [internalValue, setInternalValue] = useState<string | number | readonly string[] | undefined>(props.defaultValue || '');
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalValue(e.target.value);
      }
      onChange?.(e);
    };

    const handleClear = () => {
      if (!isControlled) {
        setInternalValue('');
      }
      
      // Create a synthetic event to trigger onChange
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;
      const input = internalRef.current;
      
      if (input && nativeInputValueSetter) {
        nativeInputValueSetter.call(input, '');
        const event = new Event('input', { bubbles: true });
        input.dispatchEvent(event);
      }

      onClear?.();
    };

    const internalRef = useRef<HTMLInputElement>(null);
    const combinedRef = (node: HTMLInputElement) => {
      internalRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
      }
    };

    const isError = variant === 'error';
    const isDisabled = variant === 'disable' || disabled;

    const inputClasses = [
      'mspbots-input',
      `mspbots-input-${size}`,
      isError ? 'mspbots-input-error' : '',
      leftIcon ? 'mspbots-input-with-left-icon' : '',
      (rightIcon || (clearable && currentValue)) ? 'mspbots-input-with-right-icon' : '',
      className
    ].filter(Boolean).join(' ');

    const wrapperClasses = [
      'mspbots-input-wrapper',
      'relative',
      'w-full'
    ].filter(Boolean).join(' ');

    const charCount = String(currentValue || '').length;

    return (
      <div className="w-full">
        <div className={wrapperClasses}>
          {leftIcon && (
            <div className={`mspbots-input-icon-left mspbots-input-icon-${size}`}>
              {leftIcon}
            </div>
          )}
          
          <input
            ref={combinedRef}
            className={inputClasses}
            disabled={isDisabled}
            value={value}
            onChange={handleChange}
            {...props}
          />

          {clearable && currentValue && !isDisabled && (
            <button
              type="button"
              className={`mspbots-input-clear-button mspbots-input-clear-${size}`}
              onClick={handleClear}
              tabIndex={-1}
            >
              <CrossCircledIcon />
            </button>
          )}

          {!clearable && rightIcon && (
            <div className={`mspbots-input-icon-right mspbots-input-icon-${size}`}>
              {rightIcon}
            </div>
          )}
        </div>
        {wordLimit && (
          <div className="mspbots-input-word-limit">
            {charCount}/{wordLimit}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

import React, { useState, useRef } from 'react';
import { CrossCircledIcon } from '@radix-ui/react-icons';

export type InputSize = 'sm' | 'md' | 'lg';
export type InputVariant = 'plain' | 'error' | 'disable';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>, 'size'> {
  /** The size of the input */
  size?: InputSize;
  /** The visual variant of the input */
  variant?: InputVariant;
  /** Whether the input is clearable (only for single-line inputs) */
  clearable?: boolean;
  /** Icon to display on the left side (single-line only) */
  leftIcon?: React.ReactNode;
  /** Icon to display on the right side (single-line only) */
  rightIcon?: React.ReactNode;
  /** Callback when the clear button is clicked */
  onClear?: () => void;
  /** Maximum number of characters allowed (shows counter) */
  wordLimit?: number;
  /** Content to prepend to the input */
  prepend?: React.ReactNode;
  /** Content to append to the input */
  append?: React.ReactNode;
  /** Label text */
  label?: string;
  /** Error message */
  error?: string;
  /** Success message */
  success?: string;
  /** Container class name */
  containerClassName?: string;
  /** Whether to render as a textarea */
  multiline?: boolean;
  /** Auto resize height based on content (textarea only) */
  autosize?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
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
    prepend,
    append,
    value,
    onChange,
    label,
    error,
    success,
    containerClassName,
    multiline,
    autosize,
    ...props 
  }, ref) => {
    const [internalValue, setInternalValue] = useState<string | number | readonly string[] | undefined>(props.defaultValue || '');
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;

    const internalRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
    const combinedRef = (node: HTMLInputElement | HTMLTextAreaElement) => {
      internalRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLInputElement | HTMLTextAreaElement | null>).current = node;
      }
    };

    // Auto-resize logic for textarea
    React.useEffect(() => {
      if (multiline && autosize && internalRef.current) {
        const textarea = internalRef.current as HTMLTextAreaElement;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight + 2}px`;
      }
    }, [currentValue, multiline, autosize]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (!isControlled) {
        setInternalValue(e.target.value);
      }
      
      if (multiline && autosize) {
        const target = e.target as HTMLTextAreaElement;
        target.style.height = 'auto';
        target.style.height = `${target.scrollHeight + 2}px`;
      }

      onChange?.(e as any);
    };

    const handleClear = () => {
      if (!isControlled) {
        setInternalValue('');
      }
      
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        multiline ? window.HTMLTextAreaElement.prototype : window.HTMLInputElement.prototype, 
        "value"
      )?.set;
      
      const input = internalRef.current;
      
      if (input && nativeInputValueSetter) {
        nativeInputValueSetter.call(input, '');
        const event = new Event('input', { bubbles: true });
        input.dispatchEvent(event);
      }

      onClear?.();
    };

    const isError = variant === 'error' || !!error;
    const isDisabled = variant === 'disable' || disabled;

    const charCount = String(currentValue || '').length;

    // --- Render Content ---

    // 1. Textarea Render Logic
    if (multiline) {
      const textareaClasses = [
        'mspbots-textarea',
        isError ? 'mspbots-textarea-error' : '',
        success ? 'mspbots-textarea-success' : '',
        autosize ? 'mspbots-textarea-autosize' : '',
        className,
      ].filter(Boolean).join(' ');

      const wordLimitElement = wordLimit ? (
        <div className="mspbots-textarea-word-limit">
          {charCount} / {wordLimit}
        </div>
      ) : null;

      const textareaElement = (
        <div className="mspbots-textarea-wrapper">
          <textarea
            ref={combinedRef as any}
            className={textareaClasses}
            disabled={isDisabled}
            value={currentValue}
            onChange={handleChange as any}
            maxLength={wordLimit}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
          {wordLimitElement}
        </div>
      );

      return (
        <div className={`mspbots-input-container ${containerClassName || ''} w-full`}>
          {label && <label className="mspbots-input-label">{label}</label>}
          {textareaElement}
          {error && (
            <span className="mspbots-input-message mspbots-input-message-error text-xs">
              {error}
            </span>
          )}
          {success && (
            <span className="mspbots-input-message mspbots-input-message-success text-xs">
              {success}
            </span>
          )}
        </div>
      );
    }

    // 2. Input Render Logic
    const inputClasses = [
      'mspbots-input',
      `mspbots-input-${size}`,
      isError ? 'mspbots-input-error' : '',
      success ? 'mspbots-input-success' : '',
      leftIcon ? 'mspbots-input-with-left-icon' : '',
      (rightIcon || (clearable && currentValue)) ? 'mspbots-input-with-right-icon' : '',
      prepend ? 'mspbots-input-has-prepend' : '',
      append ? 'mspbots-input-has-append' : '',
      className
    ].filter(Boolean).join(' ');

    const wrapperClasses = [
      'mspbots-input-wrapper',
      'relative',
      'w-full'
    ].filter(Boolean).join(' ');

    const inputElement = (
      <div className={wrapperClasses}>
        {leftIcon && (
          <div className={`mspbots-input-icon-left ${isDisabled ? 'opacity-50' : ''}`}>
            {leftIcon}
          </div>
        )}
        <input
          ref={combinedRef as any}
          className={inputClasses}
          disabled={isDisabled}
          value={currentValue}
          onChange={handleChange as any}
          maxLength={wordLimit}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
        {(rightIcon || (clearable && currentValue)) && (
          <div className={`mspbots-input-icon-right ${isDisabled ? 'opacity-50' : ''}`}>
            {clearable && currentValue ? (
              <button
                type="button"
                className="mspbots-input-clear-btn"
                onClick={handleClear}
                tabIndex={-1}
              >
                <CrossCircledIcon />
              </button>
            ) : rightIcon}
          </div>
        )}
        {wordLimit && (
          <div className="mspbots-input-word-limit">
            {charCount}/{wordLimit}
          </div>
        )}
      </div>
    );

    let wrappedInput = inputElement;

    if (prepend || append) {
      wrappedInput = (
        <div className={`mspbots-input-group ${isDisabled ? 'mspbots-input-group-disabled' : ''}`}>
          {prepend && (
            <div className={`mspbots-input-group-addon mspbots-input-group-prepend mspbots-input-group-addon-${size}`}>
              {prepend}
            </div>
          )}
          {inputElement}
          {append && (
            <div className={`mspbots-input-group-addon mspbots-input-group-append mspbots-input-group-addon-${size}`}>
              {append}
            </div>
          )}
        </div>
      );
    }

    // Wrap with label/error/success if present
    if (label || error || success) {
      return (
        <div className={`mspbots-input-container ${containerClassName || ''} w-full`}>
          {label && <label className="mspbots-input-label">{label}</label>}
          {wrappedInput}
          {error && (
            <span className="mspbots-input-message mspbots-input-message-error text-xs">
              {error}
            </span>
          )}
          {success && (
            <span className="mspbots-input-message mspbots-input-message-success text-xs">
              {success}
            </span>
          )}
        </div>
      );
    }

    return (
      <div className="w-full">
        {wrappedInput}
      </div>
    );
  }
);

Input.displayName = 'Input';

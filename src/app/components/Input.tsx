import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Label text */
  label?: string;
  /** Icon component to display on the left */
  leftIcon?: React.ReactNode;
  /** Icon component to display on the right */
  rightIcon?: React.ReactNode;
  /** Error message */
  error?: string;
  /** Success message */
  success?: string;
  /** Container class name */
  containerClassName?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      leftIcon,
      rightIcon,
      error,
      success,
      containerClassName,
      className,
      ...props
    },
    ref
  ) => {
    const inputClasses = [
      'mspbots-input',
      leftIcon && 'mspbots-input-with-left-icon',
      rightIcon && 'mspbots-input-with-right-icon',
      error && 'mspbots-input-error',
      success && 'mspbots-input-success',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const inputElement = (
      <>
        {leftIcon && (
          <span className="mspbots-input-icon-left w-[15px] h-[15px]">
            {leftIcon}
          </span>
        )}
        <input ref={ref} className={inputClasses} {...props} />
        {rightIcon && (
          <span className="mspbots-input-icon-right w-[15px] h-[15px]">
            {rightIcon}
          </span>
        )}
      </>
    );

    if (label || error || success) {
      return (
        <div className={`mspbots-input-container ${containerClassName || ''}`}>
          {label && <label className="mspbots-input-label">{label}</label>}
          {leftIcon || rightIcon ? (
            <div className="mspbots-input-wrapper">{inputElement}</div>
          ) : (
            inputElement
          )}
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

    if (leftIcon || rightIcon) {
      return <div className="mspbots-input-wrapper">{inputElement}</div>;
    }

    return <input ref={ref} className={inputClasses} {...props} />;
  }
);

Input.displayName = 'Input';

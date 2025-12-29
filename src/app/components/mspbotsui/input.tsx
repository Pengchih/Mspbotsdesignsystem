import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Input({
  label,
  error,
  success,
  leftIcon,
  rightIcon,
  className = '',
  ...props
}: InputProps) {
  const inputClass = `mspbots-input ${leftIcon ? 'mspbots-input-with-left-icon' : ''} ${
    rightIcon ? 'mspbots-input-with-right-icon' : ''
  } ${error ? 'mspbots-input-error' : success ? 'mspbots-input-success' : ''} ${className}`;

  return (
    <div className="mspbots-input-container">
      {label && (
        <label className="mspbots-input-label">
          {label}
        </label>
      )}
      <div className="mspbots-input-wrapper">
        {leftIcon && (
          <div className="mspbots-input-icon-left">
            {leftIcon}
          </div>
        )}
        <input
          className={inputClass}
          {...props}
        />
        {rightIcon && (
          <div className="mspbots-input-icon-right">
            {rightIcon}
          </div>
        )}
      </div>
      {error && <span className="mspbots-input-message mspbots-input-message-error">{error}</span>}
      {success && <span className="mspbots-input-message mspbots-input-message-success">{success}</span>}
    </div>
  );
}

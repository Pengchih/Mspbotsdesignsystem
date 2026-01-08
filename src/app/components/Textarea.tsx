import React from 'react';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Label text */
  label?: string;
  /** Error message */
  error?: string;
  /** Success message */
  success?: string;
  /** Container class name */
  containerClassName?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { label, error, success, containerClassName, className, ...props },
    ref
  ) => {
    const textareaClasses = [
      'mspbots-textarea',
      error && 'mspbots-textarea-error',
      success && 'mspbots-textarea-success',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    if (label || error || success) {
      return (
        <div className={`mspbots-input-container ${containerClassName || ''}`}>
          {label && <label className="mspbots-input-label">{label}</label>}
          <textarea ref={ref} className={textareaClasses} {...props} />
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

    return <textarea ref={ref} className={textareaClasses} {...props} />;
  }
);

Textarea.displayName = 'Textarea';

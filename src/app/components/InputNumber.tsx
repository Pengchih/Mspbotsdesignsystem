import React, { useState, useEffect, useRef } from 'react';
import { MinusIcon, PlusIcon, ChevronUpIcon, ChevronDownIcon } from '@radix-ui/react-icons';
import { Input, InputSize } from './Input';

export type InputNumberPosition = 'horizontal' | 'vertical';

export interface InputNumberProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  /** The size of the input */
  size?: InputSize | 'xs';
  /** The layout position of the controls */
  position?: InputNumberPosition;
  /** Current value */
  value?: number;
  /** Default value for uncontrolled state */
  defaultValue?: number;
  /** Callback when value changes */
  onChange?: (value: number | undefined) => void;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Step increment */
  step?: number;
}

export const InputNumber = React.forwardRef<HTMLInputElement, InputNumberProps>(
  ({ 
    size = 'md', 
    position = 'horizontal', 
    value, 
    defaultValue, 
    onChange, 
    min = -Infinity, 
    max = Infinity, 
    step = 1, 
    className, 
    disabled, 
    ...props 
  }, ref) => {
    const [internalValue, setInternalValue] = useState<number | undefined>(defaultValue);
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;

    const handleChange = (newValue: number | undefined) => {
      if (newValue !== undefined) {
        if (newValue < min) newValue = min;
        if (newValue > max) newValue = max;
      }

      if (!isControlled) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      if (val === '') {
        handleChange(undefined);
      } else {
        const num = parseFloat(val);
        if (!isNaN(num)) {
          // We allow typing out of bounds temporarily, but validation happens on blur usually
          // For now, let's just pass it through, but strict min/max might block typing
          // Let's rely on simple update
          if (!isControlled) setInternalValue(num);
          onChange?.(num);
        }
      }
    };

    const handleBlur = () => {
      if (currentValue !== undefined) {
        let finalValue = currentValue;
        if (finalValue < min) finalValue = min;
        if (finalValue > max) finalValue = max;
        if (finalValue !== currentValue) {
          handleChange(finalValue);
        }
      }
    };

    const increment = () => {
      const val = currentValue ?? 0;
      handleChange(val + step);
    };

    const decrement = () => {
      const val = currentValue ?? 0;
      handleChange(val - step);
    };

    const wrapperClasses = [
      'mspbots-input-number',
      `mspbots-input-number-${size}`,
      `mspbots-input-number-${position}`,
      disabled ? 'mspbots-input-number-disabled' : '',
      className
    ].filter(Boolean).join(' ');

    const buttonClasses = `mspbots-input-number-btn mspbots-input-number-btn-${size}`;

    if (position === 'vertical') {
      return (
        <div className={wrapperClasses}>
          <div className="mspbots-input-number-input-wrapper">
             <input
              ref={ref}
              type="number"
              className="mspbots-input-number-field"
              value={currentValue ?? ''}
              onChange={handleInputChange}
              onBlur={handleBlur}
              disabled={disabled}
              {...props}
            />
          </div>
          <div className="mspbots-input-number-controls">
            <button 
              type="button" 
              className={`${buttonClasses} mspbots-input-number-btn-up`}
              onClick={increment}
              disabled={disabled || (currentValue !== undefined && currentValue >= max)}
              tabIndex={-1}
            >
              <ChevronUpIcon />
            </button>
            <button 
              type="button" 
              className={`${buttonClasses} mspbots-input-number-btn-down`}
              onClick={decrement}
              disabled={disabled || (currentValue !== undefined && currentValue <= min)}
              tabIndex={-1}
            >
              <ChevronDownIcon />
            </button>
          </div>
        </div>
      );
    }

    // Horizontal
    return (
      <div className={wrapperClasses}>
        <button 
          type="button" 
          className={`${buttonClasses} mspbots-input-number-btn-minus`}
          onClick={decrement}
          disabled={disabled || (currentValue !== undefined && currentValue <= min)}
          tabIndex={-1}
        >
          <MinusIcon />
        </button>
        <input
          ref={ref}
          type="number"
          className="mspbots-input-number-field"
          value={currentValue ?? ''}
          onChange={handleInputChange}
          onBlur={handleBlur}
          disabled={disabled}
          {...props}
        />
        <button 
          type="button" 
          className={`${buttonClasses} mspbots-input-number-btn-plus`}
          onClick={increment}
          disabled={disabled || (currentValue !== undefined && currentValue >= max)}
          tabIndex={-1}
        >
          <PlusIcon />
        </button>
      </div>
    );
  }
);

InputNumber.displayName = 'InputNumber';

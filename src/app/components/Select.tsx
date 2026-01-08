import React from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Label text */
  label?: string;
  /** Container class name */
  containerClassName?: string;
  /** Options array */
  options?: Array<{
    value: string;
    label: string;
  }>;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    { label, containerClassName, options, className, children, ...props },
    ref
  ) => {
    const selectClasses = ['mspbots-select', className]
      .filter(Boolean)
      .join(' ');

    const selectElement = (
      <div className="mspbots-select-wrapper">
        <select ref={ref} className={selectClasses} {...props}>
          {options
            ? options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))
            : children}
        </select>
        <ChevronDownIcon
          className="mspbots-select-arrow"
          width={15}
          height={15}
        />
      </div>
    );

    if (label) {
      return (
        <div className={`mspbots-input-container ${containerClassName || ''}`}>
          <label className="mspbots-input-label">{label}</label>
          {selectElement}
        </div>
      );
    }

    return selectElement;
  }
);

Select.displayName = 'Select';

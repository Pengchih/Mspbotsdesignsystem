import React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  /** Label text */
  label?: string;
  /** Label class name */
  labelClassName?: string;
}

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ label, labelClassName, id, ...props }, ref) => {
  const checkbox = (
    <CheckboxPrimitive.Root
      ref={ref}
      id={id}
      className="mspbots-checkbox"
      {...props}
    >
      <CheckboxPrimitive.Indicator className="mspbots-checkbox-indicator">
        <CheckIcon width={12} height={12} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );

  if (label) {
    return (
      <div className="flex items-center gap-2">
        {checkbox}
        <label
          className={`text-sm font-medium leading-none cursor-pointer ${
            labelClassName || ''
          }`}
          htmlFor={id}
        >
          {label}
        </label>
      </div>
    );
  }

  return checkbox;
});

Checkbox.displayName = 'Checkbox';

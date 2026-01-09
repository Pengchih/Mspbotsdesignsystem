import React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon, MinusIcon } from '@radix-ui/react-icons';

export type CheckboxSize = 'xs' | 'sm' | 'md';
export type CheckboxVariant = 'default' | 'bordered';

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  /** Label text */
  label?: string;
  /** Label class name */
  labelClassName?: string;
  /** Size of the checkbox */
  size?: CheckboxSize;
  /** Visual variant */
  variant?: CheckboxVariant;
}

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ label, labelClassName, id, size = 'sm', variant = 'default', className, disabled, checked, ...props }, ref) => {
  
  const isBordered = variant === 'bordered';
  const isIndeterminate = checked === 'indeterminate';
  
  // Checkbox classes
  const checkboxClasses = [
    'mspbots-checkbox',
    `mspbots-checkbox-${size}`,
    className
  ].filter(Boolean).join(' ');

  // Icon size based on checkbox size
  const iconSize = size === 'xs' ? 10 : 12;

  const checkbox = (
    <CheckboxPrimitive.Root
      ref={ref}
      id={id}
      className={checkboxClasses}
      disabled={disabled}
      checked={checked}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="mspbots-checkbox-indicator">
        {isIndeterminate ? (
           <MinusIcon width={iconSize} height={iconSize} />
        ) : (
           <CheckIcon width={iconSize} height={iconSize} />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );

  if (label || isBordered) {
    const wrapperClasses = [
      'mspbots-checkbox-wrapper',
      isBordered ? 'mspbots-checkbox-wrapper-bordered' : '',
      isBordered ? `mspbots-checkbox-wrapper-${size}` : '',
      disabled ? 'mspbots-checkbox-wrapper-disabled' : '',
    ].filter(Boolean).join(' ');

    const labelClasses = [
      'mspbots-checkbox-label',
      `mspbots-checkbox-label-${size}`,
      labelClassName
    ].filter(Boolean).join(' ');

    // For bordered variant, we wrap everything in the Root to ensure the whole area is clickable.
    // However, Radix Checkbox.Root IS the input. We can't wrap it with another Root.
    // So we use a label as wrapper if we want clickability, or just a div if we rely on the Root (which is small).
    // Actually, for better UX, the whole bordered area should be clickable. 
    // We can wrap with a label (htmlFor) to trigger the checkbox.
    
    // Note: We need to manually handle data-state on the wrapper for styling purposes if we can't use :has()
    // Since we are passing `checked` prop, we can determine the state.
    // If checked is uncontrolled (undefined), we might have styling issues without internal state tracking.
    // But for a Design System component, we usually expect controlled usage or we rely on the internal primitive state.
    // Let's rely on the `checked` prop being passed if we want perfect styling for the wrapper.
    // If it's uncontrolled, the wrapper might not update its border color immediately without extra logic.
    // For now, let's assume controlled or use `data-state` from the prop if provided.
    
    const state = isIndeterminate ? 'indeterminate' : (checked ? 'checked' : 'unchecked');

    return (
      <label 
        className={wrapperClasses} 
        htmlFor={id}
        data-state={state}
      >
        {checkbox}
        {label && (
          <span className={labelClasses}>
            {label}
          </span>
        )}
      </label>
    );
  }

  return checkbox;
});

Checkbox.displayName = 'Checkbox';

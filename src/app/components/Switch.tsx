import React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  /** Label text */
  label?: string;
  /** Label class name */
  labelClassName?: string;
}

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ label, labelClassName, id, ...props }, ref) => {
  const switchElement = (
    <SwitchPrimitive.Root
      ref={ref}
      id={id}
      className="mspbots-switch"
      {...props}
    >
      <SwitchPrimitive.Thumb className="mspbots-switch-thumb" />
    </SwitchPrimitive.Root>
  );

  if (label) {
    return (
      <div className="flex items-center gap-2">
        {switchElement}
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

  return switchElement;
});

Switch.displayName = 'Switch';

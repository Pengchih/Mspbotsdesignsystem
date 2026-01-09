import React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';

export type SwitchSize = 'xs' | 'sm' | 'md';

export interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  size?: SwitchSize;
  brand?: boolean;
}

export const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitive.Root>, SwitchProps>(
  ({ size = 'md', brand = true, className, ...props }, ref) => {
    const rootClasses = [
      'mspbots-switch',
      `mspbots-switch-${size}`,
      brand ? 'mspbots-switch-brand' : 'mspbots-switch-no-brand',
      className
    ].filter(Boolean).join(' ');

    return (
      <SwitchPrimitive.Root className={rootClasses} ref={ref} {...props}>
        <SwitchPrimitive.Thumb className={`mspbots-switch-thumb mspbots-switch-thumb-${size}`} />
      </SwitchPrimitive.Root>
    );
  }
);

Switch.displayName = 'Switch';

import React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

export interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  /** Radio options */
  options?: Array<{
    value: string;
    label: string;
    id?: string;
  }>;
  /** Layout direction */
  direction?: 'vertical' | 'horizontal';
}

export const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ options, direction = 'vertical', className, children, ...props }, ref) => {
  const containerClasses = [
    'flex',
    direction === 'vertical' ? 'flex-col' : 'flex-row flex-wrap',
    direction === 'vertical' ? 'gap-2.5' : 'gap-4',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <RadioGroupPrimitive.Root ref={ref} className={containerClasses} {...props}>
      {options
        ? options.map((option) => (
            <RadioGroupItem
              key={option.value}
              value={option.value}
              id={option.id || `radio-${option.value}`}
              label={option.label}
            />
          ))
        : children}
    </RadioGroupPrimitive.Root>
  );
});

RadioGroup.displayName = 'RadioGroup';

export interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  /** Label text */
  label?: string;
  /** Label class name */
  labelClassName?: string;
}

export const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ label, labelClassName, id, ...props }, ref) => {
  const radio = (
    <RadioGroupPrimitive.Item
      ref={ref}
      id={id}
      className="mspbots-radio-item"
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="mspbots-radio-indicator" />
    </RadioGroupPrimitive.Item>
  );

  if (label) {
    return (
      <div className="flex items-center gap-2">
        {radio}
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

  return radio;
});

RadioGroupItem.displayName = 'RadioGroupItem';

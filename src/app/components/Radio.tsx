import React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

export type RadioSize = 'xs' | 'sm' | 'md';
export type RadioVariant = 'default' | 'bordered';

export interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  /** Radio options */
  options?: Array<{
    value: string;
    label: string;
    id?: string;
    disabled?: boolean;
  }>;
  /** Layout direction */
  direction?: 'vertical' | 'horizontal';
  /** The size of the radio buttons */
  size?: RadioSize;
  /** The visual variant of the radio buttons */
  variant?: RadioVariant;
}

export const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ options, direction = 'vertical', size = 'sm', variant = 'default', className, children, ...props }, ref) => {
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
              disabled={option.disabled}
              size={size}
              variant={variant}
            />
          ))
        : React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.type === RadioGroupItem) {
              return React.cloneElement(child, {
                size: child.props.size || size,
                variant: child.props.variant || variant,
              } as RadioGroupItemProps);
            }
            return child;
          })}
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
  /** Size of the radio item */
  size?: RadioSize;
  /** Visual variant */
  variant?: RadioVariant;
}

export const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ label, labelClassName, id, size = 'sm', variant = 'default', className, disabled, ...props }, ref) => {
  
  const isBordered = variant === 'bordered';
  
  // Radio Item Classes
  const radioClasses = [
    'mspbots-radio-item',
    `mspbots-radio-item-${size}`,
    className
  ].filter(Boolean).join(' ');

  const radio = (
    <RadioGroupPrimitive.Item
      ref={ref}
      id={id}
      className={radioClasses}
      disabled={disabled}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="mspbots-radio-indicator" />
    </RadioGroupPrimitive.Item>
  );

  // If label exists OR it's a bordered variant (which needs a wrapper), render the wrapper
  if (label || isBordered) {
    const wrapperClasses = [
      'mspbots-radio-wrapper',
      isBordered ? 'mspbots-radio-wrapper-bordered' : '',
      isBordered ? `mspbots-radio-wrapper-${size}` : '',
      disabled ? 'mspbots-radio-wrapper-disabled' : '',
    ].filter(Boolean).join(' ');

    const labelClasses = [
      'mspbots-radio-label',
      `mspbots-radio-label-${size}`,
      labelClassName
    ].filter(Boolean).join(' ');

    // For bordered variant, we need to pass checked state to the wrapper for styling
    // But RadioGroupPrimitive.Item handles the state internally. 
    // We can use the data-state attribute from the Item if we could access it, 
    // but the wrapper is outside. 
    // Wait, Radix UI doesn't expose state to parent easily without Context or controlled state.
    // However, CSS :has() selector is not fully supported everywhere yet, but maybe enough for modern browsers?
    // Alternatively, we can make the Item the Wrapper? 
    // No, Item must be the input-like element usually.
    
    // Actually, in the bordered design, the WHOLE container is likely clickable.
    // If I make the wrapper the Label (htmlFor), clicking it triggers the radio.
    // And I can use the sibling selector or :has to style the wrapper based on the radio state?
    // Or better: Use the Item AS the wrapper?
    // If I use Item as wrapper, where does the circle go? 
    // Radix allows rendering children inside Item.
    // So: Item (Wrapper) -> [Circle (visual), Label].
    // This is a better approach for "Card-like" radios.
    
    if (isBordered) {
      return (
        <RadioGroupPrimitive.Item
          ref={ref}
          id={id}
          className={wrapperClasses}
          disabled={disabled}
          {...props}
        >
          {/* The actual radio circle */}
          <div className={`mspbots-radio-item mspbots-radio-item-${size}`}>
            <RadioGroupPrimitive.Indicator className="mspbots-radio-indicator" />
          </div>
          
          {label && (
            <span className={labelClasses}>
              {label}
            </span>
          )}
        </RadioGroupPrimitive.Item>
      );
    }

    // Default variant
    return (
      <div className="flex items-center gap-2">
        {radio}
        {label && (
          <label
            className={labelClasses}
            htmlFor={id}
          >
            {label}
          </label>
        )}
      </div>
    );
  }

  return radio;
});

RadioGroupItem.displayName = 'RadioGroupItem';

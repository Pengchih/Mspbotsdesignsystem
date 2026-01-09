import React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon, CheckIcon } from '@radix-ui/react-icons';

export type SelectSize = 'sm' | 'md' | 'lg';
export type SelectVariant = 'plain' | 'error' | 'disable';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> {
  size?: SelectSize;
  variant?: SelectVariant;
  placeholder?: string;
  options: SelectOption[];
  className?: string;
}

export const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  ({ size = 'md', variant = 'plain', placeholder = 'Select', options, className, disabled, ...props }, ref) => {
    const isError = variant === 'error';
    const isDisabled = variant === 'disable' || disabled;

    const triggerClasses = [
      'mspbots-select-trigger',
      `mspbots-select-${size}`,
      isError ? 'mspbots-select-error' : '',
      className
    ].filter(Boolean).join(' ');

    return (
      <SelectPrimitive.Root disabled={isDisabled} {...props}>
        <SelectPrimitive.Trigger ref={ref} className={triggerClasses}>
          <SelectPrimitive.Value placeholder={placeholder} />
          <SelectPrimitive.Icon className="mspbots-select-icon">
            <ChevronDownIcon />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>

        <SelectPrimitive.Portal>
          <SelectPrimitive.Content className="mspbots-select-content" position="popper" sideOffset={5}>
            <SelectPrimitive.Viewport className="mspbots-select-viewport">
              {options.map((option) => (
                <SelectPrimitive.Item
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                  className={`mspbots-select-item mspbots-select-item-${size}`}
                >
                  <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                  <SelectPrimitive.ItemIndicator className="mspbots-select-item-indicator">
                    <CheckIcon />
                  </SelectPrimitive.ItemIndicator>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    );
  }
);

Select.displayName = 'Select';

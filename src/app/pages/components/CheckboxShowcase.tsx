import React from 'react';
import { ComponentExample } from '../../components/ComponentExample';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

export function CheckboxShowcase() {
  return (
    <div className="w-fit mx-auto space-y-10 pb-20">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Checkbox</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          A control that allows the user to toggle between checked and not checked.
        </p>
      </div>

      {/* General Preview */}
      <div className="flex flex-wrap gap-4 p-12 border border-border rounded-[8px] bg-background items-center justify-center min-h-[160px]">
        <div className="flex items-center gap-2">
          <Checkbox.Root className="mspbots-checkbox" defaultChecked id="c1">
            <Checkbox.Indicator className="mspbots-checkbox-indicator">
              <CheckIcon width={12} height={12} />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <label className="text-sm font-medium leading-none cursor-pointer" htmlFor="c1">
            Accept terms and conditions
          </label>
        </div>
      </div>

      <div className="space-y-12">
        <ComponentExample
          title="Default"
          description="A standard checkbox component."
          code={`import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

<div className="flex items-center gap-2">
  <Checkbox.Root className="mspbots-checkbox" id="terms">
    <Checkbox.Indicator className="mspbots-checkbox-indicator">
      <CheckIcon width={12} height={12} />
    </Checkbox.Indicator>
  </Checkbox.Root>
  <label 
    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" 
    htmlFor="terms"
  >
    Accept terms and conditions
  </label>
</div>`}
        >
          <div className="flex items-center gap-2">
            <Checkbox.Root className="mspbots-checkbox" id="terms">
              <Checkbox.Indicator className="mspbots-checkbox-indicator">
                <CheckIcon width={12} height={12} />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <label 
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" 
              htmlFor="terms"
            >
              Accept terms and conditions
            </label>
          </div>
        </ComponentExample>
      </div>
    </div>
  );
}

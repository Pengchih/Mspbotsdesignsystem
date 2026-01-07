import React from 'react';
import { ComponentExample } from './ComponentExample';
import * as Switch from '@radix-ui/react-switch';

export function SwitchShowcase() {
  return (
    <div className="w-fit mx-auto space-y-10 pb-20">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Switch</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          A control that allows the user to toggle between checked and not checked.
        </p>
      </div>

      {/* General Preview */}
      <div className="flex flex-wrap gap-4 p-12 border border-border rounded-[8px] bg-background items-center justify-center min-h-[160px]">
        <div className="flex items-center gap-2">
          <Switch.Root className="mspbots-switch" id="airplane-mode">
            <Switch.Thumb className="mspbots-switch-thumb" />
          </Switch.Root>
          <label className="text-sm font-medium leading-none cursor-pointer" htmlFor="airplane-mode">
            Airplane Mode
          </label>
        </div>
      </div>

      <div className="space-y-12">
        <ComponentExample
          title="Default"
          description="A standard switch component."
          code={`import * as Switch from '@radix-ui/react-switch';

<div className="flex items-center gap-2">
  <Switch.Root className="mspbots-switch" id="airplane-mode">
    <Switch.Thumb className="mspbots-switch-thumb" />
  </Switch.Root>
  <label className="text-sm font-medium leading-none" htmlFor="airplane-mode">
    Airplane Mode
  </label>
</div>`}
        >
          <div className="flex items-center gap-2">
            <Switch.Root className="mspbots-switch" id="airplane-mode-example">
              <Switch.Thumb className="mspbots-switch-thumb" />
            </Switch.Root>
            <label className="text-sm font-medium leading-none cursor-pointer" htmlFor="airplane-mode-example">
              Airplane Mode
            </label>
          </div>
        </ComponentExample>
      </div>
    </div>
  );
}

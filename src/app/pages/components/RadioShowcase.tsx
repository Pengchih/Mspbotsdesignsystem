import React from 'react';
import { ComponentExample } from '../../components/ComponentExample';
import * as RadioGroup from '@radix-ui/react-radio-group';

export function RadioShowcase() {
  return (
    <div className="w-fit mx-auto space-y-10 pb-20">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Radio Group</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.
        </p>
      </div>

      {/* General Preview */}
      <div className="flex flex-wrap gap-4 p-12 border border-border rounded-[8px] bg-background items-center justify-center min-h-[160px]">
        <RadioGroup.Root className="flex flex-col gap-2.5" defaultValue="default">
          <div className="flex items-center gap-2">
            <RadioGroup.Item className="mspbots-radio-item" value="default" id="r1">
              <RadioGroup.Indicator className="mspbots-radio-indicator" />
            </RadioGroup.Item>
            <label className="text-sm font-medium leading-none cursor-pointer" htmlFor="r1">
              Default
            </label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroup.Item className="mspbots-radio-item" value="comfortable" id="r2">
              <RadioGroup.Indicator className="mspbots-radio-indicator" />
            </RadioGroup.Item>
            <label className="text-sm font-medium leading-none cursor-pointer" htmlFor="r2">
              Comfortable
            </label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroup.Item className="mspbots-radio-item" value="compact" id="r3">
              <RadioGroup.Indicator className="mspbots-radio-indicator" />
            </RadioGroup.Item>
            <label className="text-sm font-medium leading-none cursor-pointer" htmlFor="r3">
              Compact
            </label>
          </div>
        </RadioGroup.Root>
      </div>

      <div className="space-y-12">
        <ComponentExample
          title="Default"
          description="A standard radio group component."
          code={`import * as RadioGroup from '@radix-ui/react-radio-group';

<RadioGroup.Root className="flex flex-col gap-2.5" defaultValue="default">
  <div className="flex items-center gap-2">
    <RadioGroup.Item className="mspbots-radio-item" value="default" id="r1">
      <RadioGroup.Indicator className="mspbots-radio-indicator" />
    </RadioGroup.Item>
    <label className="text-sm font-medium leading-none" htmlFor="r1">
      Default
    </label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroup.Item className="mspbots-radio-item" value="comfortable" id="r2">
      <RadioGroup.Indicator className="mspbots-radio-indicator" />
    </RadioGroup.Item>
    <label className="text-sm font-medium leading-none" htmlFor="r2">
      Comfortable
    </label>
  </div>
</RadioGroup.Root>`}
        >
          <RadioGroup.Root className="flex flex-col gap-2.5" defaultValue="default">
            <div className="flex items-center gap-2">
              <RadioGroup.Item className="mspbots-radio-item" value="default" id="r1-example">
                <RadioGroup.Indicator className="mspbots-radio-indicator" />
              </RadioGroup.Item>
              <label className="text-sm font-medium leading-none cursor-pointer" htmlFor="r1-example">
                Default
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroup.Item className="mspbots-radio-item" value="comfortable" id="r2-example">
                <RadioGroup.Indicator className="mspbots-radio-indicator" />
              </RadioGroup.Item>
              <label className="text-sm font-medium leading-none cursor-pointer" htmlFor="r2-example">
                Comfortable
              </label>
            </div>
          </RadioGroup.Root>
        </ComponentExample>
      </div>
    </div>
  );
}

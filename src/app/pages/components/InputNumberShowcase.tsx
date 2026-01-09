import React from 'react';
import { ComponentExample } from '../../components/ComponentExample';
import { InputNumber } from '../../components/InputNumber';

export function InputNumberShowcase() {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-10 pb-20">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Input Number</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Enter a number within a certain range with the mouse or keyboard.
        </p>
      </div>

      {/* General Preview */}
      <div className="flex flex-wrap gap-4 p-12 border border-border rounded-[8px] bg-background items-center justify-center min-h-[160px]">
        <div className="w-full max-w-xs">
          <InputNumber defaultValue={3} min={1} max={10} />
        </div>
      </div>

      <div className="space-y-12">
        <ComponentExample
          title="Basic Usage"
          description="Basic usage of the InputNumber component."
          code={`<InputNumber min={1} max={10} defaultValue={3} />`}
        >
          <div className="w-full max-w-xs">
            <InputNumber min={1} max={10} defaultValue={3} />
          </div>
        </ComponentExample>

        <ComponentExample
          title="Sizes"
          description="InputNumber comes in 4 sizes: lg, md (default), sm, and xs."
          code={`<InputNumber size="lg" defaultValue={1} />
<InputNumber size="md" defaultValue={1} />
<InputNumber size="sm" defaultValue={1} />
<InputNumber size="xs" defaultValue={1} />`}
        >
          <div className="w-full max-w-xs space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-8 text-xs text-muted-foreground">LG</span>
              <InputNumber size="lg" defaultValue={1} />
            </div>
            <div className="flex items-center gap-4">
              <span className="w-8 text-xs text-muted-foreground">MD</span>
              <InputNumber size="md" defaultValue={1} />
            </div>
            <div className="flex items-center gap-4">
              <span className="w-8 text-xs text-muted-foreground">SM</span>
              <InputNumber size="sm" defaultValue={1} />
            </div>
            <div className="flex items-center gap-4">
              <span className="w-8 text-xs text-muted-foreground">XS</span>
              <InputNumber size="xs" defaultValue={1} />
            </div>
          </div>
        </ComponentExample>

        <ComponentExample
          title="Vertical Controls"
          description="Vertical layout for the step controls."
          code={`<InputNumber position="vertical" size="lg" defaultValue={3} />
<InputNumber position="vertical" size="md" defaultValue={3} />
<InputNumber position="vertical" size="sm" defaultValue={3} />
<InputNumber position="vertical" size="xs" defaultValue={3} />`}
        >
          <div className="w-full max-w-xs space-y-4">
             <div className="flex items-center gap-4">
              <span className="w-8 text-xs text-muted-foreground">LG</span>
              <InputNumber position="vertical" size="lg" defaultValue={3} />
            </div>
            <div className="flex items-center gap-4">
              <span className="w-8 text-xs text-muted-foreground">MD</span>
              <InputNumber position="vertical" size="md" defaultValue={3} />
            </div>
            <div className="flex items-center gap-4">
              <span className="w-8 text-xs text-muted-foreground">SM</span>
              <InputNumber position="vertical" size="sm" defaultValue={3} />
            </div>
            <div className="flex items-center gap-4">
              <span className="w-8 text-xs text-muted-foreground">XS</span>
              <InputNumber position="vertical" size="xs" defaultValue={3} />
            </div>
          </div>
        </ComponentExample>

        <ComponentExample
          title="Disabled"
          description="Disabled state."
          code={`<InputNumber defaultValue={3} disabled />
<InputNumber position="vertical" defaultValue={3} disabled />`}
        >
          <div className="w-full max-w-xs space-y-4">
            <InputNumber defaultValue={3} disabled />
            <InputNumber position="vertical" defaultValue={3} disabled />
          </div>
        </ComponentExample>

        <ComponentExample
          title="Step and Limits"
          description="Custom step size (e.g., 0.1) and min/max limits."
          code={`<InputNumber step={0.1} min={0} max={10} defaultValue={1.5} />`}
        >
          <div className="w-full max-w-xs">
            <InputNumber step={0.1} min={0} max={10} defaultValue={1.5} />
          </div>
        </ComponentExample>
      </div>
    </div>
  );
}

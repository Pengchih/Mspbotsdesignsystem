import React from 'react';
import { ComponentExample } from '../../components/ComponentExample';
import { Select } from '../../components/Select';

export function SelectShowcase() {
  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'blueberry', label: 'Blueberry' },
    { value: 'grapes', label: 'Grapes' },
    { value: 'pineapple', label: 'Pineapple' },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto space-y-10 pb-20">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Select</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Displays a list of options for the user to pick from—triggered by a button.
        </p>
      </div>

      {/* General Preview */}
      <div className="flex flex-wrap gap-4 p-12 border border-border rounded-[8px] bg-background items-center justify-center min-h-[160px]">
        <div className="w-full max-w-xs">
          <Select options={options} placeholder="Select a fruit" />
        </div>
      </div>

      <div className="space-y-12">
        <ComponentExample
          title="Basic Usage"
          description="Basic usage of the Select component."
          code={`const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
];

<Select options={options} placeholder="Select a fruit" />`}
        >
          <div className="w-full max-w-xs">
            <Select options={options} placeholder="Select a fruit" />
          </div>
        </ComponentExample>

        <ComponentExample
          title="Sizes"
          description="Select comes in 3 sizes: lg, md (default), and sm."
          code={`<Select size="lg" options={options} placeholder="Large" />
<Select size="md" options={options} placeholder="Medium" />
<Select size="sm" options={options} placeholder="Small" />`}
        >
          <div className="w-full max-w-xs space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-12 text-xs text-muted-foreground">LG</span>
              <Select size="lg" options={options} placeholder="Large" />
            </div>
            <div className="flex items-center gap-4">
              <span className="w-12 text-xs text-muted-foreground">MD</span>
              <Select size="md" options={options} placeholder="Medium" />
            </div>
            <div className="flex items-center gap-4">
              <span className="w-12 text-xs text-muted-foreground">SM</span>
              <Select size="sm" options={options} placeholder="Small" />
            </div>
          </div>
        </ComponentExample>

        <ComponentExample
          title="States"
          description="Visual cues for disabled and error states."
          code={`<Select disabled options={options} placeholder="Disabled" />
<Select variant="error" options={options} placeholder="Error" />`}
        >
          <div className="w-full max-w-xs space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Disabled</label>
              <Select disabled options={options} placeholder="Disabled" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Error</label>
              <Select variant="error" options={options} placeholder="Error" />
            </div>
          </div>
        </ComponentExample>

        <ComponentExample
          title="Disabled Options"
          description="Individual options can be disabled."
          code={`const optionsWithDisabled = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana', disabled: true },
  { value: 'blueberry', label: 'Blueberry' },
];

<Select options={optionsWithDisabled} placeholder="Select a fruit" />`}
        >
          <div className="w-full max-w-xs">
            <Select 
              options={[
                { value: 'apple', label: 'Apple' },
                { value: 'banana', label: 'Banana', disabled: true },
                { value: 'blueberry', label: 'Blueberry' },
              ]} 
              placeholder="Select a fruit" 
            />
          </div>
        </ComponentExample>
      </div>
    </div>
  );
}

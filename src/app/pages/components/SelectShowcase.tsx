import React from 'react';
import { ComponentExample } from '../../components/ComponentExample';
import { ChevronDownIcon } from '@radix-ui/react-icons';

export function SelectShowcase() {
  return (
    <div className="w-fit mx-auto space-y-10 pb-20">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Select</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Displays a list of options for the user to pick from—triggered by a button.
        </p>
      </div>

      {/* General Preview */}
      <div className="flex flex-wrap gap-4 p-12 border border-border rounded-[8px] bg-background items-center justify-center min-h-[160px]">
        <div className="w-full max-w-xs">
          <div className="mspbots-select-wrapper">
            <select className="mspbots-select">
              <option value="">Select an option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
            <ChevronDownIcon className="mspbots-select-arrow" width={15} height={15} />
          </div>
        </div>
      </div>

      <div className="space-y-12">
        <ComponentExample
          title="Default"
          description="A standard native select component with custom styling."
          code={`import { ChevronDownIcon } from '@radix-ui/react-icons';

<div className="mspbots-select-wrapper">
  <select className="mspbots-select">
    <option value="">Select a fruit</option>
    <option value="apple">Apple</option>
    <option value="banana">Banana</option>
    <option value="blueberry">Blueberry</option>
    <option value="grapes">Grapes</option>
    <option value="pineapple">Pineapple</option>
  </select>
  <ChevronDownIcon className="mspbots-select-arrow" width={15} height={15} />
</div>`}
        >
          <div className="w-full max-w-sm mspbots-select-wrapper">
            <select className="mspbots-select">
              <option value="">Select a fruit</option>
              <option value="apple">Apple</option>
              <option value="banana">Banana</option>
              <option value="blueberry">Blueberry</option>
              <option value="grapes">Grapes</option>
              <option value="pineapple">Pineapple</option>
            </select>
            <ChevronDownIcon className="mspbots-select-arrow" width={15} height={15} />
          </div>
        </ComponentExample>

        <ComponentExample
          title="With Label"
          description="Use the mspbots-input-container to add a label."
          code={`import { ChevronDownIcon } from '@radix-ui/react-icons';

<div className="mspbots-input-container">
  <label className="mspbots-input-label">Role</label>
  <div className="mspbots-select-wrapper">
    <select className="mspbots-select">
      <option value="admin">Admin</option>
      <option value="member">Member</option>
      <option value="guest">Guest</option>
    </select>
    <ChevronDownIcon className="mspbots-select-arrow" width={15} height={15} />
  </div>
</div>`}
        >
          <div className="w-full max-w-sm mspbots-input-container">
            <label className="mspbots-input-label">Role</label>
            <div className="mspbots-select-wrapper">
              <select className="mspbots-select">
                <option value="admin">Admin</option>
                <option value="member">Member</option>
                <option value="guest">Guest</option>
              </select>
              <ChevronDownIcon className="mspbots-select-arrow" width={15} height={15} />
            </div>
          </div>
        </ComponentExample>
      </div>
    </div>
  );
}

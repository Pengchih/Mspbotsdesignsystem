import React from 'react';
import { ComponentExample } from '../../components/ComponentExample';
import { MagnifyingGlassIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';

export function InputShowcase() {
  return (
    <div className="w-fit mx-auto space-y-10 pb-20">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Input</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Displays a form input field or a component that looks like an input field.
          Supports labels, icons, and validation states.
        </p>
      </div>

      {/* General Preview */}
      <div className="flex flex-wrap gap-4 p-12 border border-border rounded-[8px] bg-background items-center justify-center min-h-[160px]">
        <div className="w-full max-w-xs">
          <input type="text" className="mspbots-input" placeholder="Type something..." />
        </div>
      </div>

      <div className="space-y-12">
        <ComponentExample
          title="Default"
          description="A standard text input field."
          code={`<input type="text" className="mspbots-input" placeholder="Email" />`}
        >
          <div className="w-full max-w-sm">
            <input type="text" className="mspbots-input" placeholder="Email" />
          </div>
        </ComponentExample>

        <ComponentExample
          title="With Label"
          description="Wrap the input in a container with a label for better accessibility."
          code={`<div className="mspbots-input-container">
  <label className="mspbots-input-label">Email</label>
  <input type="email" className="mspbots-input" placeholder="name@example.com" />
</div>`}
        >
          <div className="w-full max-w-sm mspbots-input-container">
            <label className="mspbots-input-label">Email</label>
            <input type="email" className="mspbots-input" placeholder="name@example.com" />
          </div>
        </ComponentExample>

        <ComponentExample
          title="With Icons"
          description="Add icons to the left or right of the input to provide context. Use 15px icons."
          code={`import { MagnifyingGlassIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';

<div className="mspbots-input-wrapper">
  <MagnifyingGlassIcon className="mspbots-input-icon-left w-[15px] h-[15px]" />
  <input 
    type="text" 
    className="mspbots-input mspbots-input-with-left-icon" 
    placeholder="Search..." 
  />
</div>

<div className="mspbots-input-wrapper">
  <EnvelopeClosedIcon className="mspbots-input-icon-left w-[15px] h-[15px]" />
  <input 
    type="email" 
    className="mspbots-input mspbots-input-with-left-icon" 
    placeholder="Email" 
  />
</div>`}
        >
          <div className="w-full max-w-sm space-y-4">
            <div className="mspbots-input-wrapper">
              <MagnifyingGlassIcon className="mspbots-input-icon-left w-[15px] h-[15px]" />
              <input 
                type="text" 
                className="mspbots-input mspbots-input-with-left-icon" 
                placeholder="Search..." 
              />
            </div>
            <div className="mspbots-input-wrapper">
              <EnvelopeClosedIcon className="mspbots-input-icon-left w-[15px] h-[15px]" />
              <input 
                type="email" 
                className="mspbots-input mspbots-input-with-left-icon" 
                placeholder="Email" 
              />
            </div>
          </div>
        </ComponentExample>

        <ComponentExample
          title="Validation States"
          description="Visual cues for error and success states."
          code={`<div className="mspbots-input-container">
  <label className="mspbots-input-label">Error State</label>
  <input 
    type="text" 
    className="mspbots-input mspbots-input-error" 
    defaultValue="Invalid value" 
  />
  <span className="mspbots-input-message mspbots-input-message-error text-xs">
    Invalid input
  </span>
</div>

<div className="mspbots-input-container">
  <label className="mspbots-input-label">Success State</label>
  <input 
    type="text" 
    className="mspbots-input mspbots-input-success" 
    defaultValue="Valid value" 
  />
  <span className="mspbots-input-message mspbots-input-message-success text-xs">
    Great job!
  </span>
</div>`}
        >
          <div className="w-full max-w-sm space-y-6">
            <div className="mspbots-input-container">
              <label className="mspbots-input-label">Error State</label>
              <input 
                type="text" 
                className="mspbots-input mspbots-input-error" 
                defaultValue="Invalid value" 
              />
              <span className="mspbots-input-message mspbots-input-message-error text-xs">
                Invalid input
              </span>
            </div>
            <div className="mspbots-input-container">
              <label className="mspbots-input-label">Success State</label>
              <input 
                type="text" 
                className="mspbots-input mspbots-input-success" 
                defaultValue="Valid value" 
              />
              <span className="mspbots-input-message mspbots-input-message-success text-xs">
                Great job!
              </span>
            </div>
          </div>
        </ComponentExample>

        <ComponentExample
          title="Disabled"
          description="Prevent interaction with the disabled attribute."
          code={`<input type="text" className="mspbots-input" disabled placeholder="Disabled input" />`}
        >
          <div className="w-full max-w-sm">
            <input type="text" className="mspbots-input" disabled placeholder="Disabled input" />
          </div>
        </ComponentExample>
      </div>
    </div>
  );
}

import React from 'react';
import { ComponentExample } from '../../components/ComponentExample';
import { Input } from '../../components/Input';
import { MagnifyingGlassIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';

export function InputShowcase() {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-10 pb-20">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Input</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Displays a form input field or a component that looks like an input field.
          Supports labels, icons, validation states, and different sizes.
        </p>
      </div>

      {/* General Preview */}
      <div className="flex flex-wrap gap-4 p-12 border border-border rounded-[8px] bg-background items-center justify-center min-h-[160px]">
        <div className="w-full max-w-xs">
          <Input placeholder="Type something..." />
        </div>
      </div>

      <div className="space-y-12">
        <ComponentExample
          title="Default"
          description="A standard text input field."
          code={`<Input placeholder="Email" />`}
        >
          <div className="w-full max-w-sm">
            <Input placeholder="Email" />
          </div>
        </ComponentExample>

        <ComponentExample
          title="Sizes"
          description="Inputs come in three sizes: sm, md (default), and lg."
          code={`<Input size="sm" placeholder="Small Input" />
<Input size="md" placeholder="Medium Input" />
<Input size="lg" placeholder="Large Input" />`}
        >
          <div className="w-full max-w-sm space-y-4">
            <Input size="sm" placeholder="Small Input" />
            <Input size="md" placeholder="Medium Input" />
            <Input size="lg" placeholder="Large Input" />
          </div>
        </ComponentExample>

        <ComponentExample
          title="With Icons"
          description="Add icons to the left or right of the input to provide context."
          code={`<Input 
  leftIcon={<MagnifyingGlassIcon />} 
  placeholder="Search..." 
/>
<Input 
  leftIcon={<EnvelopeClosedIcon />} 
  placeholder="Email" 
/>`}
        >
          <div className="w-full max-w-sm space-y-4">
            <Input 
              leftIcon={<MagnifyingGlassIcon />} 
              placeholder="Search..." 
            />
            <Input 
              leftIcon={<EnvelopeClosedIcon />} 
              placeholder="Email" 
            />
          </div>
        </ComponentExample>

        <ComponentExample
          title="Clearable"
          description="Input with a clear button that appears when there is a value."
          code={`<Input clearable placeholder="Type to clear..." />`}
        >
          <div className="w-full max-w-sm">
            <Input clearable placeholder="Type to clear..." />
          </div>
        </ComponentExample>

        <ComponentExample
          title="Word Limit"
          description="Input with a character counter."
          code={`<Input wordLimit={30} placeholder="Max 30 chars" />`}
        >
          <div className="w-full max-w-sm">
            <Input wordLimit={30} placeholder="Max 30 chars" />
          </div>
        </ComponentExample>

        <ComponentExample
          title="States"
          description="Visual cues for error and disabled states."
          code={`<Input variant="error" defaultValue="Invalid value" />
<Input variant="disable" defaultValue="Disabled value" />`}
        >
          <div className="w-full max-w-sm space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Error State</label>
              <Input variant="error" defaultValue="Invalid value" />
              <span className="text-xs text-red-500">Invalid input</span>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Disabled State</label>
              <Input variant="disable" defaultValue="Disabled value" />
            </div>
          </div>
        </ComponentExample>
      </div>
    </div>
  );
}

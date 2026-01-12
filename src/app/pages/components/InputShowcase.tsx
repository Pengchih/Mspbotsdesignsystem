import React from 'react';
import { ComponentExample } from '../../components/ComponentExample';
import { Input } from '../../components/Input';
import { MagnifyingGlassIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';

export function InputShowcase() {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-10 pb-20">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Input & Textarea</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Displays form input fields, textareas, and related components.
          Supports labels, icons, validation states, groups, and different sizes.
        </p>
      </div>

      {/* General Preview */}
      <div className="flex flex-wrap gap-4 p-12 border border-border rounded-[8px] bg-background items-center justify-center min-h-[160px]">
        <div className="w-full max-w-xs space-y-4">
          <Input placeholder="Input something..." />
          <Input multiline placeholder="Type multiple lines..." />
        </div>
      </div>

      <div className="space-y-12">
        <ComponentExample
          title="Default Input"
          description="A standard text input field."
          code={`<Input placeholder="Email" />`}
        >
          <div className="w-full max-w-sm">
            <Input placeholder="Email" />
          </div>
        </ComponentExample>

        <ComponentExample
          title="With Label & Messages"
          description="Input with label, error, or success messages."
          code={`<Input 
  label="Email Address" 
  placeholder="Enter your email" 
  error="Invalid email format" 
/>
<Input 
  label="Username" 
  value="mspbots_user" 
  success="Username is available" 
/>`}
        >
          <div className="w-full max-w-sm space-y-4">
            <Input 
              label="Email Address" 
              placeholder="Enter your email" 
              error="Invalid email format" 
            />
            <Input 
              label="Username" 
              value="mspbots_user" 
              success="Username is available" 
              readOnly
            />
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
          title="Input Groups (Prepend/Append)"
          description="Add text or icons before or after the input field."
          code={`{/* Prepend Text */}
<Input prepend="https://" placeholder="mspbots.ai" />

{/* Append Text */}
<Input append=".com" placeholder="username" />

{/* Prepend Icon */}
<Input prepend={<EnvelopeClosedIcon />} placeholder="Email" />

{/* Both */}
<Input prepend="$" append=".00" placeholder="Amount" />`}
        >
          <div className="w-full max-w-sm space-y-4">
            <Input prepend="https://" placeholder="mspbots.ai" />
            <Input append=".com" placeholder="username" />
            <Input prepend={<EnvelopeClosedIcon />} placeholder="Email" />
            <Input prepend="$" append=".00" placeholder="Amount" />
          </div>
        </ComponentExample>

        <ComponentExample
          title="Textarea (Multiline)"
          description="Render a textarea by setting the multiline prop."
          code={`<Input 
  multiline 
  label="Bio" 
  placeholder="Tell us about yourself..." 
/>`}
        >
          <div className="w-full max-w-sm">
            <Input 
              multiline 
              label="Bio" 
              placeholder="Tell us about yourself..." 
            />
          </div>
        </ComponentExample>

        <ComponentExample
          title="Textarea with Autosize & Limit"
          description="Textarea that grows with content and has a word limit."
          code={`<Input 
  multiline 
  autosize 
  wordLimit={200}
  label="Feedback" 
  placeholder="Type many lines..." 
/>`}
        >
          <div className="w-full max-w-sm">
            <Input 
              multiline 
              autosize 
              wordLimit={200}
              label="Feedback" 
              placeholder="Type many lines..." 
            />
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

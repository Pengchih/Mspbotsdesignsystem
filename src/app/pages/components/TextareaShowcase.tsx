import React from 'react';
import { ComponentExample } from '../../components/ComponentExample';
import { Input } from '../../components/Input';

export function TextareaShowcase() {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-10 pb-20">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Textarea</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          A multi-line text input control. Implemented via the Input component with the multiline prop.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 p-12 border border-border rounded-[8px] bg-background items-center justify-center min-h-[160px]">
        <div className="w-full max-w-xs">
          <Input multiline placeholder="Type something..." />
        </div>
      </div>

      <div className="space-y-12">
        <ComponentExample
          title="Basic Textarea"
          description="A standard multi-line input field."
          code={`<Input multiline placeholder="Enter description..." />`}
        >
          <div className="w-full max-w-sm">
            <Input multiline placeholder="Enter description..." />
          </div>
        </ComponentExample>

        <ComponentExample
          title="With Label & Autosize"
          description="Textarea that grows with content."
          code={`<Input 
  multiline 
  autosize 
  label="Bio" 
  placeholder="Tell us about yourself..." 
/>`}
        >
          <div className="w-full max-w-sm">
            <Input 
              multiline 
              autosize 
              label="Bio" 
              placeholder="Tell us about yourself..." 
            />
          </div>
        </ComponentExample>
      </div>
    </div>
  );
}

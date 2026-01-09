import React from 'react';
import { ComponentExample } from '../../components/ComponentExample';

export function TextareaShowcase() {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-10 pb-20">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Textarea</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Displays a form textarea or a component that looks like a textarea.
        </p>
      </div>

      {/* General Preview */}
      <div className="flex flex-wrap gap-4 p-12 border border-border rounded-[8px] bg-background items-center justify-center min-h-[160px]">
        <div className="w-full max-w-sm">
          <textarea className="mspbots-textarea" placeholder="Type your message here." />
        </div>
      </div>

      <div className="space-y-12">
        <ComponentExample
          title="Default"
          description="A standard textarea component."
          code={`<textarea className="mspbots-textarea" placeholder="Type your message here." />`}
        >
          <div className="w-full max-w-sm">
            <textarea className="mspbots-textarea" placeholder="Type your message here." />
          </div>
        </ComponentExample>

        <ComponentExample
          title="With Label"
          description="Use the mspbots-input-container to add a label."
          code={`<div className="mspbots-input-container">
  <label className="mspbots-input-label">Bio</label>
  <textarea 
    className="mspbots-textarea" 
    placeholder="Tell us a little bit about yourself" 
  />
</div>`}
        >
          <div className="w-full max-w-sm mspbots-input-container">
            <label className="mspbots-input-label">Bio</label>
            <textarea 
              className="mspbots-textarea" 
              placeholder="Tell us a little bit about yourself" 
            />
          </div>
        </ComponentExample>

        <ComponentExample
          title="Disabled"
          description="A disabled textarea."
          code={`<textarea 
  className="mspbots-textarea" 
  placeholder="This textarea is disabled" 
  disabled
/>`}
        >
          <div className="w-full max-w-sm">
            <textarea 
              className="mspbots-textarea" 
              placeholder="This textarea is disabled" 
              disabled
            />
          </div>
        </ComponentExample>
      </div>
    </div>
  );
}

import React from 'react';
import { ComponentExample } from '../../components/ComponentExample';

export function BadgeShowcase() {
  return (
    <div className="w-fit mx-auto space-y-10 pb-20">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Badge</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Displays a badge or a component that looks like a badge.
        </p>
      </div>

      {/* General Preview */}
      <div className="flex flex-wrap gap-4 p-12 border border-border rounded-[8px] bg-background items-center justify-center min-h-[160px]">
        <span className="mspbots-badge mspbots-badge-primary">Primary</span>
        <span className="mspbots-badge mspbots-badge-secondary">Secondary</span>
        <span className="mspbots-badge mspbots-badge-outline">Outline</span>
        <span className="mspbots-badge mspbots-badge-destructive">Destructive</span>
      </div>

      <div className="space-y-12">
        <ComponentExample
          title="Variants"
          description="Use badges to display status, categories, or other metadata."
          code={`<span className="mspbots-badge mspbots-badge-primary">Primary</span>
<span className="mspbots-badge mspbots-badge-secondary">Secondary</span>
<span className="mspbots-badge mspbots-badge-outline">Outline</span>
<span className="mspbots-badge mspbots-badge-destructive">Destructive</span>`}
        >
          <div className="flex gap-4">
            <span className="mspbots-badge mspbots-badge-primary">Primary</span>
            <span className="mspbots-badge mspbots-badge-secondary">Secondary</span>
            <span className="mspbots-badge mspbots-badge-outline">Outline</span>
            <span className="mspbots-badge mspbots-badge-destructive">Destructive</span>
          </div>
        </ComponentExample>
      </div>
    </div>
  );
}

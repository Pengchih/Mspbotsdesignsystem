import React from 'react';
import { ComponentExample } from '../../components/ComponentExample';
import { Badge } from '../../components/Badge';

export function BadgeShowcase() {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-10 pb-20">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Badge</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Displays a badge or a component that looks like a badge.
        </p>
      </div>

      {/* General Preview */}
      <div className="flex flex-wrap gap-4 p-12 border border-border rounded-[8px] bg-background items-center justify-center min-h-[160px]">
        <Badge type="primary">Primary</Badge>
        <Badge type="error">Error</Badge>
        <Badge type="info">Info</Badge>
        <Badge type="success">Success</Badge>
      </div>

      <div className="space-y-12">
        <ComponentExample
          title="Types"
          description="Use badges to display status, categories, or other metadata."
          code={`<Badge type="primary">Primary</Badge>
<Badge type="error">Error</Badge>
<Badge type="info">Info</Badge>
<Badge type="success">Success</Badge>`}
        >
          <div className="flex gap-4">
            <Badge type="primary">Primary</Badge>
            <Badge type="error">Error</Badge>
            <Badge type="info">Info</Badge>
            <Badge type="success">Success</Badge>
          </div>
        </ComponentExample>

        <ComponentExample
          title="Dot Variant"
          description="Use dot badges to indicate status without text."
          code={`<Badge type="primary" dot />
<Badge type="error" dot />
<Badge type="info" dot />
<Badge type="success" dot />`}
        >
          <div className="flex gap-4">
            <Badge type="primary" dot />
            <Badge type="error" dot />
            <Badge type="info" dot />
            <Badge type="success" dot />
          </div>
        </ComponentExample>

        <ComponentExample
          title="Legacy Variants (Backward Compatibility)"
          description="Legacy variants are mapped to the new types."
          code={`<Badge variant="secondary">Secondary (Info)</Badge>
<Badge variant="destructive">Destructive (Error)</Badge>
<Badge variant="outline">Outline (Info)</Badge>`}
        >
          <div className="flex gap-4">
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </ComponentExample>
      </div>
    </div>
  );
}

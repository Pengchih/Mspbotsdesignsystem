import React from 'react';
import { ComponentExample } from './ComponentExample';
import { 
  PlayIcon, 
  PlusIcon, 
  TrashIcon, 
  Share1Icon, 
  DownloadIcon,
  PaperPlaneIcon
} from '@radix-ui/react-icons';

export function ButtonShowcase() {
  return (
    <div className="w-fit mx-auto space-y-10 pb-20">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Button</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Buttons allow users to take actions, and make choices, with a single tap.
          Multiple variants and sizes are available to fit different contexts.
        </p>
      </div>

      {/* General Preview */}
      <div className="flex flex-wrap gap-4 p-12 border border-border rounded-[8px] bg-background items-center justify-center min-h-[160px]">
        <button className="mspbots-button mspbots-button-primary mspbots-button-md">Primary</button>
        <button className="mspbots-button mspbots-button-secondary mspbots-button-md">Secondary</button>
        <button className="mspbots-button mspbots-button-outline mspbots-button-md">Outline</button>
        <button className="mspbots-button mspbots-button-ghost mspbots-button-md">Ghost</button>
      </div>

      <div className="space-y-12">
        <ComponentExample
          title="Variants"
          description="Use different variants to establish hierarchy. Primary for main actions, Secondary for alternatives, Outline for less emphasis, and Ghost for subtle actions."
          code={`<button className="mspbots-button mspbots-button-primary mspbots-button-md">
  Primary
</button>

<button className="mspbots-button mspbots-button-secondary mspbots-button-md">
  Secondary
</button>

<button className="mspbots-button mspbots-button-outline mspbots-button-md">
  Outline
</button>

<button className="mspbots-button mspbots-button-ghost mspbots-button-md">
  Ghost
</button>`}
        >
           <div className="flex flex-wrap gap-4 items-center justify-center">
             <button className="mspbots-button mspbots-button-primary mspbots-button-md">Primary</button>
             <button className="mspbots-button mspbots-button-secondary mspbots-button-md">Secondary</button>
             <button className="mspbots-button mspbots-button-outline mspbots-button-md">Outline</button>
             <button className="mspbots-button mspbots-button-ghost mspbots-button-md">Ghost</button>
           </div>
        </ComponentExample>

        <ComponentExample
          title="Sizes"
          description="Buttons come in three sizes: small (24px), medium (32px), and large (40px)."
          code={`<button className="mspbots-button mspbots-button-primary mspbots-button-sm">
  Small
</button>

<button className="mspbots-button mspbots-button-primary mspbots-button-md">
  Medium
</button>

<button className="mspbots-button mspbots-button-primary mspbots-button-lg">
  Large
</button>`}
        >
           <div className="flex flex-wrap gap-4 items-end justify-center">
             <button className="mspbots-button mspbots-button-primary mspbots-button-sm">Small</button>
             <button className="mspbots-button mspbots-button-primary mspbots-button-md">Medium</button>
             <button className="mspbots-button mspbots-button-primary mspbots-button-lg">Large</button>
           </div>
        </ComponentExample>

        <ComponentExample
          title="With Icons"
          description="Icons can be added to buttons to enhance meaning. Use 15px Radix UI icons for consistency."
          code={`import { PlusIcon, Share1Icon, TrashIcon } from '@radix-ui/react-icons';

<button className="mspbots-button mspbots-button-primary mspbots-button-md">
  <PlusIcon width={15} height={15} />
  Add Item
</button>

<button className="mspbots-button mspbots-button-secondary mspbots-button-md">
  <Share1Icon width={15} height={15} />
  Share
</button>

<button className="mspbots-button mspbots-button-outline mspbots-button-md text-destructive hover:bg-destructive/10 hover:border-destructive border-destructive/50">
  <TrashIcon width={15} height={15} />
  Delete
</button>`}
        >
           <div className="flex flex-wrap gap-4 items-center justify-center">
             <button className="mspbots-button mspbots-button-primary mspbots-button-md">
               <PlusIcon width={15} height={15} />
               Add Item
             </button>
             <button className="mspbots-button mspbots-button-secondary mspbots-button-md">
               <Share1Icon width={15} height={15} />
               Share
             </button>
             <button className="mspbots-button mspbots-button-outline mspbots-button-md" style={{ color: 'var(--destructive)', borderColor: 'var(--destructive)' }}>
               <TrashIcon width={15} height={15} />
               Delete
             </button>
           </div>
        </ComponentExample>

        <ComponentExample
          title="Disabled State"
          description="Add the disabled attribute to indicate that a button is not interactive."
          code={`<button className="mspbots-button mspbots-button-primary mspbots-button-md" disabled>
  Disabled
</button>

<button className="mspbots-button mspbots-button-secondary mspbots-button-md" disabled>
  Disabled
</button>`}
        >
           <div className="flex flex-wrap gap-4 items-center justify-center">
             <button className="mspbots-button mspbots-button-primary mspbots-button-md" disabled>Disabled</button>
             <button className="mspbots-button mspbots-button-secondary mspbots-button-md" disabled>Disabled</button>
           </div>
        </ComponentExample>
      </div>
    </div>
  );
}

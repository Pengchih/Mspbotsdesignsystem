import React from 'react';
import { Plus, Minus, Search, Send, ArrowRight, Loader2 } from 'lucide-react';

export function ButtonShowcase() {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="mb-6">Button Variants</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <button className="px-4 py-2 bg-primary text-primary-foreground font-medium rounded-button hover:opacity-90 transition-all shadow-sm">
            Primary Button
          </button>
          <button className="px-4 py-2 bg-secondary text-secondary-foreground font-medium rounded-button border border-border hover:bg-muted transition-all shadow-sm">
            Secondary Button
          </button>
          <button className="px-4 py-2 bg-white text-foreground font-medium rounded-button border border-border hover:bg-secondary transition-all shadow-sm">
            Outline Button
          </button>
          <button className="px-4 py-2 text-muted-foreground font-medium rounded-button hover:text-foreground hover:bg-muted transition-all">
            Ghost Button
          </button>
          <button className="px-4 py-2 bg-destructive text-destructive-foreground font-medium rounded-button hover:opacity-90 transition-all shadow-sm">
            Destructive
          </button>
        </div>
      </section>

      <section>
        <h2 className="mb-6">With Icons & States</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-medium rounded-button shadow-sm">
            <Plus className="size-4" /> Add Item
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground font-medium rounded-button border border-border shadow-sm">
            Remove <Minus className="size-4" />
          </button>
          <button className="flex items-center justify-center size-10 bg-white border border-border rounded-button text-foreground hover:bg-secondary">
            <Search className="size-4" />
          </button>
          <button disabled className="px-4 py-2 bg-muted text-muted-foreground font-medium rounded-button cursor-not-allowed border border-border/50">
            Disabled
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-medium rounded-button opacity-80 cursor-wait">
            <Loader2 className="size-4 animate-spin" /> Loading
          </button>
        </div>
      </section>

      <section>
        <h2 className="mb-6">Sizes</h2>
        <div className="flex flex-wrap gap-6 items-end">
          <div className="space-y-2">
            <span className="text-xs text-muted-foreground uppercase">Small</span>
            <button className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-button">Button</button>
          </div>
          <div className="space-y-2">
            <span className="text-xs text-muted-foreground uppercase">Medium (Default)</span>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-button">Button</button>
          </div>
          <div className="space-y-2">
            <span className="text-xs text-muted-foreground uppercase">Large</span>
            <button className="px-6 py-3 text-lg bg-primary text-primary-foreground rounded-button">Button</button>
          </div>
        </div>
      </section>
    </div>
  );
}

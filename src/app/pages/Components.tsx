import React from 'react';
import { ArrowRightIcon } from '@radix-ui/react-icons';

const NavCard = ({ 
  title, 
  description, 
  onClick 
}: { 
  title: string; 
  description: string; 
  onClick: () => void;
}) => (
  <div 
    onClick={onClick}
    className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="relative z-10 space-y-4">
      <div className="text-[20px] font-semibold tracking-tight line-clamp-2">{title}</div>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      <div className="flex items-center text-sm font-medium text-primary group-hover:translate-x-1 transition-transform">
        Explore <ArrowRightIcon className="ml-1 w-4 h-4" />
      </div>
    </div>
  </div>
);

export function Components({ onNavigate }: { onNavigate: (tab: string) => void }) {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Components</h1>
        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Reusable interface elements that implement the foundation principles.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NavCard
          title="Buttons"
          description="Interactive elements for initiating actions, with support for various variants and states."
          onClick={() => onNavigate('buttons')}
        />
        <NavCard
          title="Inputs"
          description="Form controls for user input, including text fields and validation states."
          onClick={() => onNavigate('inputs')}
        />
        <NavCard
          title="Textarea"
          description="Multi-line input fields for longer text content."
          onClick={() => onNavigate('textarea')}
        />
        <NavCard
          title="Select"
          description="Displays a list of options for the user to pick from."
          onClick={() => onNavigate('select')}
        />
        <NavCard
          title="Checkbox"
          description="A control that allows the user to toggle between checked and not checked."
          onClick={() => onNavigate('checkbox')}
        />
        <NavCard
          title="Radio Group"
          description="A set of checkable buttons where no more than one can be checked at a time."
          onClick={() => onNavigate('radio')}
        />
        <NavCard
          title="Switch"
          description="A control that allows the user to toggle between checked and not checked."
          onClick={() => onNavigate('switch')}
        />
        <NavCard
          title="Slider"
          description="An input where the user selects a value from within a given range."
          onClick={() => onNavigate('slider')}
        />
        <NavCard
          title="Badge"
          description="Displays a badge or a component that looks like a badge."
          onClick={() => onNavigate('badge')}
        />
        <NavCard
          title="Avatar"
          description="An image element with a fallback for representing the user."
          onClick={() => onNavigate('avatar')}
        />
        <NavCard
          title="Card"
          description="Container for grouped content with header, content, and footer."
          onClick={() => onNavigate('card')}
        />
      </div>
    </div>
  );
}
import React from 'react';

interface OverviewCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  onClick: () => void;
}

export function OverviewCard({ icon: Icon, title, description, onClick }: OverviewCardProps) {
  return (
    <button 
      onClick={onClick}
      className="p-8 bg-muted/10 hover:bg-muted/20 transition-all rounded-[var(--radius-xl)] border border-border/40 text-left group"
    >
      <div className="mb-6 flex items-center justify-start h-6">
        <Icon className="size-6 text-primary transition-transform duration-300 group-hover:scale-115 origin-left" />
      </div>
      <h4 className="mb-2 group-hover:text-primary transition-colors">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </button>
  );
}
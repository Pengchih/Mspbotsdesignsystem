import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mb-12">
      <h3 className="tracking-tight text-foreground leading-none mb-4">{title}</h3>
      <p className="text-secondary-foreground text-[14px] leading-relaxed max-w-2xl">{description}</p>
    </div>
  );
}
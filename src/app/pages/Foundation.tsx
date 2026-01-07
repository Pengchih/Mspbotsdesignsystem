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
      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      <div className="flex items-center text-sm font-medium text-primary group-hover:translate-x-1 transition-transform">
        Explore <ArrowRightIcon className="ml-1 w-4 h-4" />
      </div>
    </div>
  </div>
);

export function Foundation({ onNavigate }: { onNavigate: (tab: string) => void }) {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Foundation</h1>
        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
          The fundamental building blocks of the MSPBots design system. These elements ensure consistency across all applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NavCard
          title="Colors"
          description="Our semantic color palette including brand colors, functional states, and data visualization."
          onClick={() => onNavigate('colors')}
        />
        <NavCard
          title="Typography"
          description="Type scale, font weights, and text styles for clear and readable content."
          onClick={() => onNavigate('typography')}
        />
        <NavCard
          title="Icons"
          description="A comprehensive library of 15px Radix UI icons for actions and navigation."
          onClick={() => onNavigate('icons')}
        />
      </div>
    </div>
  );
}
import React from 'react';

const colors = [
  { name: 'Primary', variable: 'var(--primary)', description: 'Main action color' },
  { name: 'Background', variable: 'var(--background)', description: 'Main page background' },
  { name: 'Foreground', variable: 'var(--foreground)', description: 'Default text color' },
  { name: 'Card', variable: 'var(--card)', description: 'Container background' },
  { name: 'Muted', variable: 'var(--muted)', description: 'Subtle backgrounds' },
  { name: 'Border', variable: 'var(--border)', description: 'Component borders' },
  { name: 'Accent', variable: 'var(--accent)', description: 'Highlight color' },
  { name: 'Destructive', variable: 'var(--destructive)', description: 'Error/Delete actions' },
];

const chartColors = [
  { name: 'Chart 1', variable: 'var(--chart-1)' },
  { name: 'Chart 2', variable: 'var(--chart-2)' },
  { name: 'Chart 3', variable: 'var(--chart-3)' },
  { name: 'Chart 4', variable: 'var(--chart-4)' },
  { name: 'Chart 5', variable: 'var(--chart-5)' },
];

export function Colors() {
  return (
    <div className="space-y-20">
      <section>
        <div className="flex items-center justify-between mb-10 pb-4 border-b border-border/40">
          <div>
            <h3 className="tracking-tight">Core Palette</h3>
            <p className="text-sm text-muted-foreground mt-1">Foundation colors for interface and identity.</p>
          </div>
          <span className="px-2 py-0.5 bg-muted text-[10px] font-bold text-muted-foreground rounded-sm uppercase tracking-tight">System Standards</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
          {colors.map((color) => (
            <div key={color.name} className="group">
              <div 
                className="h-32 w-full rounded-[var(--radius-card)] border border-border/50 mb-4 transition-all duration-300"
                style={{ backgroundColor: color.variable }}
              />
              <div className="space-y-1">
                <span className="block font-semibold text-sm">{color.name}</span>
                <span className="block text-[10px] text-muted-foreground/70 font-mono tracking-tighter">{color.variable}</span>
                <p className="text-xs text-muted-foreground leading-relaxed mt-2">{color.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-10 pb-4 border-b border-border/40">
          <h3 className="tracking-tight">Data Visualization</h3>
          <p className="text-sm text-muted-foreground mt-1">Specialized palette for charts and metrics.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {chartColors.map((color) => (
            <div key={color.name} className="space-y-4 text-center">
              <div 
                className="h-20 w-full rounded-[var(--radius-card)] border border-border/40"
                style={{ backgroundColor: color.variable }}
              />
              <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest">{color.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
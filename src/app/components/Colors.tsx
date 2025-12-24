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
    <div className="space-y-12">
      <section>
        <h2 className="mb-6">Core Palette</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {colors.map((color) => (
            <div key={color.name} className="group">
              <div 
                className="h-24 w-full rounded-lg border border-border shadow-sm mb-3 transition-transform group-hover:scale-[1.02]"
                style={{ backgroundColor: color.variable }}
              />
              <div className="space-y-1">
                <span className="block font-semibold">{color.name}</span>
                <span className="block text-xs text-muted-foreground font-mono">{color.variable}</span>
                <p className="text-sm text-muted-foreground">{color.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6">Chart Palette</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {chartColors.map((color) => (
            <div key={color.name} className="space-y-2 text-center">
              <div 
                className="h-16 w-full rounded-md border border-border shadow-sm mx-auto"
                style={{ backgroundColor: color.variable }}
              />
              <span className="text-xs font-medium text-muted-foreground">{color.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

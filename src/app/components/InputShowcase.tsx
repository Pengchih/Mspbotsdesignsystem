import React from 'react';
import { Search, Mail, Lock, Eye, CheckCircle2 } from 'lucide-react';

export function InputShowcase() {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="mb-6">Input Fields</h2>
        <div className="max-w-md space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Text Input</label>
            <input 
              type="text" 
              placeholder="Enter something..." 
              className="w-full px-3 py-2 bg-white border border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Input with Icon</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full pl-10 pr-3 py-2 bg-white border border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Error State</label>
            <input 
              type="email" 
              defaultValue="invalid-email" 
              className="w-full px-3 py-2 bg-white border border-destructive rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-destructive/20 transition-all"
            />
            <span className="text-xs text-destructive">Please enter a valid email address.</span>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Success State</label>
            <div className="relative">
              <input 
                type="text" 
                defaultValue="mspbots-user" 
                className="w-full px-3 py-2 bg-white border border-chart-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-chart-2/20 transition-all"
              />
              <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-chart-2" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-6">Other Controls</h2>
        <div className="flex flex-wrap gap-12">
          <div className="space-y-4">
            <label className="text-sm font-medium block">Checkbox</label>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="check1" className="size-4 accent-primary border-border rounded" />
              <label htmlFor="check1">Option One</label>
            </div>
            <div className="flex items-center gap-2 opacity-50">
              <input type="checkbox" id="check2" checked disabled className="size-4 accent-primary border-border rounded" />
              <label htmlFor="check2">Disabled Checked</label>
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-sm font-medium block">Switch</label>
            <div className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-10 h-5 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-border after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
              <span className="ml-3 text-sm font-medium text-foreground">Notifications</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

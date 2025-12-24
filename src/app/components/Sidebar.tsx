import React from 'react';
import { Palette, Type, Component, Layers, Monitor, Cpu, ChevronRight } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: 'foundation', label: 'Foundation', icon: Layers },
    { id: 'typography', label: 'Typography', icon: Type, parent: 'foundation' },
    { id: 'colors', label: 'Colors', icon: Palette, parent: 'foundation' },
    { id: 'components', label: 'Components', icon: Component },
    { id: 'buttons', label: 'Buttons', icon: Cpu, parent: 'components' },
    { id: 'inputs', label: 'Inputs', icon: Monitor, parent: 'components' },
  ];

  return (
    <div className="w-64 h-screen bg-[#F1F3F5] border-r border-border flex flex-col fixed left-0 top-0 overflow-y-auto">
      <div className="p-6 border-b border-border bg-white/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          <span className="font-semibold tracking-tight text-foreground">MSPBots Design</span>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2 mt-4">
          Core
        </div>
        <button
          onClick={() => setActiveTab('foundation')}
          className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 ${
            activeTab === 'foundation' || activeTab === 'typography' || activeTab === 'colors'
              ? 'bg-white text-foreground shadow-sm' 
              : 'text-muted-foreground hover:bg-white/50 hover:text-foreground'
          }`}
        >
          <Layers className="size-4" />
          <span className="flex-1 text-left font-medium">Foundation</span>
          <ChevronRight className={`size-3 transition-transform ${activeTab.includes('foundation') ? 'rotate-90' : ''}`} />
        </button>
        
        <div className="pl-4 space-y-1 mt-1">
          <button
            onClick={() => setActiveTab('typography')}
            className={`w-full flex items-center gap-3 px-3 py-1.5 rounded-md text-sm transition-all ${
              activeTab === 'typography' 
                ? 'text-primary font-medium' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Type className="size-3.5" />
            <span>Typography</span>
          </button>
          <button
            onClick={() => setActiveTab('colors')}
            className={`w-full flex items-center gap-3 px-3 py-1.5 rounded-md text-sm transition-all ${
              activeTab === 'colors' 
                ? 'text-primary font-medium' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Palette className="size-3.5" />
            <span>Colors</span>
          </button>
        </div>

        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2 mt-8">
          Library
        </div>
        <button
          onClick={() => setActiveTab('components')}
          className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 ${
            activeTab.includes('components') || activeTab === 'buttons' || activeTab === 'inputs'
              ? 'bg-white text-foreground shadow-sm' 
              : 'text-muted-foreground hover:bg-white/50 hover:text-foreground'
          }`}
        >
          <Component className="size-4" />
          <span className="flex-1 text-left font-medium">Components</span>
          <ChevronRight className={`size-3 transition-transform ${activeTab.includes('components') ? 'rotate-90' : ''}`} />
        </button>

        <div className="pl-4 space-y-1 mt-1">
          <button
            onClick={() => setActiveTab('buttons')}
            className={`w-full flex items-center gap-3 px-3 py-1.5 rounded-md text-sm transition-all ${
              activeTab === 'buttons' 
                ? 'text-primary font-medium' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Cpu className="size-3.5" />
            <span>Buttons</span>
          </button>
          <button
            onClick={() => setActiveTab('inputs')}
            className={`w-full flex items-center gap-3 px-3 py-1.5 rounded-md text-sm transition-all ${
              activeTab === 'inputs' 
                ? 'text-primary font-medium' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Monitor className="size-3.5" />
            <span>Inputs</span>
          </button>
        </div>
      </nav>

      <div className="p-4 mt-auto">
        <div className="p-3 bg-white/40 rounded-lg border border-border/50">
          <p className="text-[10px] text-muted-foreground leading-relaxed">
            v1.0.0-alpha<br />
            Built with Figma Make
          </p>
        </div>
      </div>
    </div>
  );
}

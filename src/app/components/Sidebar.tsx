import React, { useState, useEffect, useCallback } from 'react';
import { 
  ColorWheelIcon, 
  FontFamilyIcon, 
  ComponentInstanceIcon, 
  LayersIcon, 
  DesktopIcon, 
  ComponentBooleanIcon, 
  ChevronRightIcon, 
  ChevronDownIcon, 
  DragHandleVerticalIcon 
} from '@radix-ui/react-icons';

interface SidebarProps {
  activeCategory: 'foundation' | 'components';
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Sidebar({ activeCategory, activeTab, setActiveTab }: SidebarProps) {
  const [isFoundationOpen, setIsFoundationOpen] = useState(true);
  const [isComponentsOpen, setIsComponentsOpen] = useState(true);
  const [width, setWidth] = useState(260);
  const [isResizing, setIsResizing] = useState(false);

  const startResizing = useCallback(() => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (mouseMoveEvent: MouseEvent) => {
      if (isResizing) {
        const newWidth = mouseMoveEvent.clientX;
        if (newWidth >= 180 && newWidth <= 480) {
          setWidth(newWidth);
        }
      }
    },
    [isResizing]
  );

  useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", resize);
      window.addEventListener("mouseup", stopResizing);
    } else {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    }
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [isResizing, resize, stopResizing]);

  const foundationItems = [
    { id: 'foundation', label: 'Overview', icon: LayersIcon },
    { id: 'typography', label: 'Typography', icon: FontFamilyIcon },
    { id: 'colors', label: 'Colors', icon: ColorWheelIcon },
  ];

  const componentItems = [
    { id: 'components', label: 'Overview', icon: ComponentInstanceIcon },
    { id: 'buttons', label: 'Buttons', icon: ComponentBooleanIcon },
    { id: 'inputs', label: 'Inputs', icon: DesktopIcon },
  ];

  const currentItems = activeCategory === 'foundation' ? foundationItems : componentItems;
  const currentTitle = activeCategory === 'foundation' ? 'Core Foundation' : 'Component Library';

  const renderSection = (
    title: string, 
    items: any[], 
    isOpen: boolean, 
    setIsOpen: (val: boolean) => void
  ) => (
    <div className="space-y-0.5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-1.5 px-2 py-1.5 text-[11px] font-bold text-muted-foreground/60 uppercase tracking-widest hover:text-foreground transition-colors cursor-pointer"
      >
        <span className="transition-transform duration-200">
          {isOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}
        </span>
        <span>{title}</span>
      </button>
      
      {isOpen && (
        <div className="ml-3.5 pl-3 border-l border-border/40 space-y-0.5 mt-0.5 py-1">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-2.5 px-3 py-1.5 rounded-md text-sm transition-all duration-200 group ${
                  isActive 
                    ? 'bg-secondary text-foreground font-medium' 
                    : 'text-muted-foreground hover:bg-muted/40 hover:text-foreground'
                }`}
              >
                <Icon className={`transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground/40 group-hover:text-muted-foreground/70'}`} />
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );

  return (
    <div 
      className="h-[calc(100vh-64px)] bg-sidebar border-r border-border/60 flex flex-col fixed left-0 top-16 z-20"
      style={{ width: `${width}px` }}
    >
      <nav className="flex-1 p-4 overflow-y-auto space-y-4 select-none scrollbar-hide">
        {activeCategory === 'foundation' ? (
          renderSection('Core Foundation', foundationItems, isFoundationOpen, setIsFoundationOpen)
        ) : (
          renderSection('Component Library', componentItems, isComponentsOpen, setIsComponentsOpen)
        )}
      </nav>

      {/* Resize Handle */}
      <div 
        onMouseDown={startResizing}
        className={`absolute right-0 top-0 bottom-0 w-1.5 cursor-col-resize group z-30 transition-colors ${isResizing ? 'bg-primary/20' : 'hover:bg-primary/10'}`}
      >
        <div className={`absolute inset-y-0 right-0 w-[1px] bg-border/40 group-hover:bg-primary/30 transition-colors ${isResizing ? 'bg-primary/50' : ''}`} />
        {isResizing && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full p-0.5 shadow-lg border border-white/20">
            <DragHandleVerticalIcon className="text-white" />
          </div>
        )}
      </div>
    </div>
  );
}
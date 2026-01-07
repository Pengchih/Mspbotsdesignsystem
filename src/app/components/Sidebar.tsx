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
  DragHandleVerticalIcon,
  CircleIcon,
  FrameIcon,
  TextNoneIcon,
  CheckboxIcon,
  RadiobuttonIcon,
  IdCardIcon,
  SliderIcon,
  TextAlignLeftIcon,
  DropdownMenuIcon,
  PersonIcon,
  CardStackIcon
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
  
  // New state for nested sections
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    color: true,
    typography: true,
    icons: true
  });

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

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

  const foundationItems = [];

  const colorItems = [
    { id: 'colors', label: 'Color Palette', icon: CircleIcon },
  ];

  const iconItems = [
    { id: 'icons', label: 'Radix Icons', icon: FrameIcon },
  ];

  const typographyItems = [
    { id: 'typography', label: 'Scales', icon: TextNoneIcon },
  ];

  const componentItems = [
    { id: 'components', label: 'Overview', icon: ComponentInstanceIcon },
    { id: 'buttons', label: 'Buttons', icon: ComponentBooleanIcon },
    { id: 'inputs', label: 'Inputs', icon: DesktopIcon },
    { id: 'textarea', label: 'Textarea', icon: TextAlignLeftIcon },
    { id: 'select', label: 'Select', icon: DropdownMenuIcon },
    { id: 'checkbox', label: 'Checkbox', icon: CheckboxIcon },
    { id: 'radio', label: 'Radio Group', icon: RadiobuttonIcon },
    { id: 'switch', label: 'Switch', icon: SliderIcon },
    { id: 'badge', label: 'Badge', icon: IdCardIcon },
    { id: 'avatar', label: 'Avatar', icon: PersonIcon },
    { id: 'card', label: 'Card', icon: CardStackIcon },
  ];

  const currentItems = activeCategory === 'foundation' ? foundationItems : componentItems;
  const currentTitle = activeCategory === 'foundation' ? 'Core Foundation' : 'Component Library';

  const renderSection = (
    title: string, 
    items: any[], 
    isOpen: boolean, 
    setIsOpen: (val: boolean) => void,
    collapsible = true
  ) => (
    <div className="space-y-0.5">
      <button
        onClick={() => collapsible && setIsOpen(!isOpen)}
        className={`w-full flex items-center gap-1.5 px-2 py-1.5 text-[11px] font-bold text-muted-foreground/60 uppercase tracking-widest hover:text-foreground transition-colors ${collapsible ? 'cursor-pointer' : 'cursor-default'}`}
      >
        {collapsible && (
          <span className="transition-transform duration-200">
            {isOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}
          </span>
        )}
        <span>{title}</span>
      </button>
      
      {isOpen && (
        <div className={`${collapsible ? 'ml-3.5 pl-3 border-l border-border/40' : ''} space-y-0.5 mt-0.5 py-1`}>
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
                <Icon className={`transition-colors size-[15px] ${isActive ? 'text-primary' : 'text-muted-foreground/40 group-hover:text-muted-foreground/70'}`} />
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
      <nav className="flex-1 p-4 overflow-y-auto space-y-6 select-none scrollbar-hide">
        {activeCategory === 'foundation' ? (
          <>
            {renderSection('Color', colorItems, openSections.color, () => toggleSection('color'))}
            {renderSection('Icons', iconItems, openSections.icons, () => toggleSection('icons'))}
            {renderSection('Typography', typographyItems, openSections.typography, () => toggleSection('typography'))}
          </>
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
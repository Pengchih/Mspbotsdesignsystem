import React, { useState } from 'react';
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
  CardStackIcon,
  PlusIcon
} from '@radix-ui/react-icons';

interface SidebarProps {
  activeCategory: 'foundation' | 'components';
  activeTab: string;
  setActiveTab: (tab: string) => void;
  width: number;
  isResizing: boolean;
  onResizeStart: () => void;
}

export function Sidebar({ 
  activeCategory, 
  activeTab, 
  setActiveTab,
  width,
  isResizing,
  onResizeStart
}: SidebarProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    color: true,
    typography: true,
    icons: true,
    basic: true,
    form: true,
    data: true,
    notice: true,
    navigation: true,
    others: true,
  });

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const colorItems = [
    { id: 'colors', label: 'Color Palette', icon: CircleIcon },
  ];

  const iconItems = [
    { id: 'icons', label: 'Radix Icons', icon: FrameIcon },
  ];

  const typographyItems = [
    { id: 'typography', label: 'Scales', icon: TextNoneIcon },
  ];

  const basicItems = [
    { id: 'buttons', label: 'Button' },
  ];

  const formItems = [
    { id: 'inputs', label: 'Input' },
    { id: 'input-number', label: 'Input Number' },
    { id: 'select', label: 'Select' },
    { id: 'textarea', label: 'Textarea' },
    { id: 'checkbox', label: 'Checkbox' },
    { id: 'radio', label: 'Radio Group' },
    { id: 'switch', label: 'Switch' },
    { id: 'slider', label: 'Slider' },
  ];

  const dataItems = [
    { id: 'badge', label: 'Badge' },
    { id: 'avatar', label: 'Avatar' },
    { id: 'card', label: 'Card' },
  ];

  const noticeItems: any[] = [];
  const navigationItems: any[] = [];
  const othersItems: any[] = [];

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
                    ? 'bg-secondary text-primary font-medium' 
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {Icon && <Icon className={`transition-colors size-[15px] ${isActive ? 'text-primary' : 'text-muted-foreground/40 group-hover:text-muted-foreground/70'}`} />}
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
          <>
            <button 
              onClick={() => setActiveTab('components')}
              className={`w-full flex items-center gap-2.5 px-3 py-1.5 rounded-md text-sm transition-all duration-200 group ${
                activeTab === 'components' 
                  ? 'bg-secondary text-primary font-medium' 
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              <ComponentInstanceIcon className={`transition-colors size-[15px] ${activeTab === 'components' ? 'text-primary' : 'text-muted-foreground/40 group-hover:text-muted-foreground/70'}`} />
              <span className="truncate">Overview</span>
            </button>

            <div className="space-y-6">
              {renderSection('Basic', basicItems, openSections.basic, () => toggleSection('basic'))}
              {renderSection('Form', formItems, openSections.form, () => toggleSection('form'))}
              {renderSection('Data', dataItems, openSections.data, () => toggleSection('data'))}
              {noticeItems.length > 0 && renderSection('Notice', noticeItems, openSections.notice, () => toggleSection('notice'))}
              {navigationItems.length > 0 && renderSection('Navigation', navigationItems, openSections.navigation, () => toggleSection('navigation'))}
              {othersItems.length > 0 && renderSection('Others', othersItems, openSections.others, () => toggleSection('others'))}
            </div>
          </>
        )}
      </nav>

      {/* Resize Handle */}
      <div 
        onMouseDown={onResizeStart}
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
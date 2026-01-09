import React, { useState, useCallback, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Colors } from './pages/Foundation/Colors';
import { Typography } from './pages/Foundation/Typography';
import { Icons } from './pages/Foundation/Icons';
import { ButtonShowcase } from './pages/Components/ButtonShowcase';
import { InputShowcase } from './pages/Components/InputShowcase';
import { CheckboxShowcase } from './pages/Components/CheckboxShowcase';
import { RadioShowcase } from './pages/Components/RadioShowcase';
import { SwitchShowcase } from './pages/Components/SwitchShowcase';
import { SliderShowcase } from './pages/Components/SliderShowcase';
import { BadgeShowcase } from './pages/Components/BadgeShowcase';
import { TextareaShowcase } from './pages/Components/TextareaShowcase';
import { SelectShowcase } from './pages/Components/SelectShowcase';
import { AvatarShowcase } from './pages/Components/AvatarShowcase';
import { CardShowcase } from './pages/Components/CardShowcase';
import { Foundation } from './pages/Foundation';
import { Components } from './pages/Components';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<'foundation' | 'components'>('foundation');
  const [activeTab, setActiveTab] = useState('foundation');
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

  const handleCategoryChange = (cat: 'foundation' | 'components') => {
    setActiveCategory(cat);
    setActiveTab(cat);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'colors':
        return <Colors />;
      case 'typography':
        return <Typography />;
      case 'icons':
        return <Icons />;
      case 'buttons':
        return <ButtonShowcase />;
      case 'inputs':
        return <InputShowcase />;
      case 'checkbox':
        return <CheckboxShowcase />;
      case 'radio':
        return <RadioShowcase />;
      case 'switch':
        return <SwitchShowcase />;
      case 'badge':
        return <BadgeShowcase />;
      case 'textarea':
        return <TextareaShowcase />;
      case 'select':
        return <SelectShowcase />;
      case 'avatar':
        return <AvatarShowcase />;
      case 'card':
        return <CardShowcase />;
      case 'foundation':
        return <Foundation onNavigate={setActiveTab} />;
      case 'components':
        return <Components onNavigate={setActiveTab} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Navigation */}
      <header className="h-16 border-b border-border/40 bg-background fixed top-0 left-0 right-0 z-30 flex items-center justify-center">
        <div className="flex items-center gap-1">
          <button
            onClick={() => handleCategoryChange('foundation')}
            className={`px-5 py-2 rounded-[var(--radius-lg)] text-sm font-semibold transition-all duration-200 ${
              activeCategory === 'foundation'
                ? 'bg-muted text-foreground'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
          >
            Foundation
          </button>
          <button
            onClick={() => handleCategoryChange('components')}
            className={`px-5 py-2 rounded-[var(--radius-lg)] text-sm font-semibold transition-all duration-200 ${
              activeCategory === 'components'
                ? 'bg-muted text-foreground'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
          >
            Components
          </button>
        </div>
      </header>

      <div className="flex pt-16">
        <Sidebar 
          activeCategory={activeCategory}
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          width={width}
          isResizing={isResizing}
          onResizeStart={startResizing}
        />
        
        <main 
          className="flex-1 lg:p-20 overflow-y-auto min-h-[calc(100vh-64px)] bg-background scroll-smooth p-[40px]"
          style={{ marginLeft: `${width}px` }}
        >
          <div className="w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="w-full"
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}

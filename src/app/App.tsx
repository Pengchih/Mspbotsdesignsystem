import React, { useState, useCallback, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { routes } from './routes';
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
    // Find the first route in this category to set as active tab
    const firstRoute = routes.find(r => r.category === cat);
    if (firstRoute) {
      setActiveTab(firstRoute.id);
    } else {
      setActiveTab(cat); // Fallback
    }
  };

  const renderContent = () => {
    const route = routes.find(r => r.id === activeTab);
    
    if (route) {
      const Component = route.component;
      // Pass onNavigate prop if the component accepts it (like Foundation/Components overview)
      // We can cast to any to avoid strict type checking for the optional prop
      return <Component onNavigate={setActiveTab} />;
    }
    
    return null;
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

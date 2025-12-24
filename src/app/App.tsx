import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Colors } from './components/Colors';
import { Typography } from './components/Typography';
import { ButtonShowcase } from './components/ButtonShowcase';
import { InputShowcase } from './components/InputShowcase';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState('foundation');

  const renderContent = () => {
    switch (activeTab) {
      case 'colors':
        return <Colors />;
      case 'typography':
        return <Typography />;
      case 'buttons':
        return <ButtonShowcase />;
      case 'inputs':
        return <InputShowcase />;
      case 'foundation':
        return (
          <div className="space-y-8">
            <section className="bg-white p-8 rounded-xl border border-border shadow-sm">
              <h2 className="mb-4">Foundation Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                The MSPBots Design System is built on principles of clarity, efficiency, and professional aesthetics. 
                Our foundation defines the core visual language of our applications, ensuring consistency across all products.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <button 
                  onClick={() => setActiveTab('colors')}
                  className="p-6 bg-secondary hover:bg-muted transition-all rounded-lg border border-border text-left group"
                >
                  <h3 className="mb-2 group-hover:text-primary transition-colors">Colors</h3>
                  <p className="text-sm text-muted-foreground">Our functional and aesthetic palette.</p>
                </button>
                <button 
                  onClick={() => setActiveTab('typography')}
                  className="p-6 bg-secondary hover:bg-muted transition-all rounded-lg border border-border text-left group"
                >
                  <h3 className="mb-2 group-hover:text-primary transition-colors">Typography</h3>
                  <p className="text-sm text-muted-foreground">Font families, weights, and hierarchies.</p>
                </button>
              </div>
            </section>
          </div>
        );
      case 'components':
        return (
          <div className="space-y-8">
            <section className="bg-white p-8 rounded-xl border border-border shadow-sm">
              <h2 className="mb-4">Component Library</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our component library provides reusable, production-ready UI elements designed to work seamlessly together.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <button 
                  onClick={() => setActiveTab('buttons')}
                  className="p-6 bg-secondary hover:bg-muted transition-all rounded-lg border border-border text-left group"
                >
                  <h3 className="mb-2 group-hover:text-primary transition-colors">Buttons</h3>
                  <p className="text-sm text-muted-foreground">Interactive triggers for user actions.</p>
                </button>
                <button 
                  onClick={() => setActiveTab('inputs')}
                  className="p-6 bg-secondary hover:bg-muted transition-all rounded-lg border border-border text-left group"
                >
                  <h3 className="mb-2 group-hover:text-primary transition-colors">Inputs</h3>
                  <p className="text-sm text-muted-foreground">Form controls for gathering user data.</p>
                </button>
              </div>
            </section>
          </div>
        );
      default:
        return null;
    }
  };

  const getPageTitle = () => {
    const titles: Record<string, string> = {
      foundation: 'Foundation Overview',
      colors: 'Color Palette',
      typography: 'Typography',
      components: 'Component Library',
      buttons: 'Buttons',
      inputs: 'Input Fields',
    };
    return titles[activeTab] || 'Design System';
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 ml-64 p-8 lg:p-12 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
              <span>Docs</span>
              <span>/</span>
              <span className="capitalize">{activeTab.includes('buttons') || activeTab.includes('inputs') ? 'Components' : 'Foundation'}</span>
              <span>/</span>
              <span className="text-foreground font-medium">{getPageTitle()}</span>
            </div>
            <motion.h1 
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="tracking-tight"
            >
              {getPageTitle()}
            </motion.h1>
          </header>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

import React, { useState } from 'react';
import { Check, Copy, Code, ChevronDown, ChevronUp } from 'lucide-react';
import { copyToClipboard } from '../utils/clipboard';

interface ComponentExampleProps {
  children: React.ReactNode;
  code: string;
  title?: string;
  description?: string;
}

export function ComponentExample({ 
  children, 
  code, 
  title, 
  description 
}: ComponentExampleProps) {
  const [isCodeOpen, setIsCodeOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await copyToClipboard(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full space-y-3 group">
      {(title || description) && (
        <div className="space-y-1">
          {title && <h3 className="text-sm font-medium text-foreground">{title}</h3>}
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>
      )}

      <div className="rounded-[8px] border border-border overflow-hidden bg-background">
        {/* Preview Area */}
        <div className="p-8 flex items-center justify-center bg-background border-b border-border/40 relative min-h-[120px]">
          <div className="w-full flex justify-center items-center z-10">
            {children}
          </div>
          
          {/* Actions */}
          <div className="absolute bottom-3 right-3 flex items-center gap-2">
            <button
              onClick={() => setIsCodeOpen(!isCodeOpen)}
              className="h-7 px-2.5 rounded text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors flex items-center gap-1.5"
            >
              <Code size={14} />
              {isCodeOpen ? 'Hide Code' : 'View Code'}
            </button>
          </div>
        </div>

        {/* Code Section */}
        {isCodeOpen && (
          <div className="bg-muted/30 border-t border-border relative animate-in slide-in-from-top-2 duration-200">
            <div className="p-4 overflow-x-auto">
              <pre className="font-mono text-[13px] leading-relaxed text-foreground/80 font-normal">
                <code>{code}</code>
              </pre>
            </div>
            <button
              onClick={handleCopy}
              className="absolute top-3 right-3 p-1.5 rounded hover:bg-black/5 text-muted-foreground hover:text-foreground transition-colors"
              title="Copy code"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

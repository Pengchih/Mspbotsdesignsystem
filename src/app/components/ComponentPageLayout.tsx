import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLinkIcon, ExclamationTriangleIcon, PlayIcon, ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon } from '@radix-ui/react-icons';

interface PropInfo {
  name: string;
  type: string;
  default?: string;
}

interface ComponentPageLayoutProps {
  title: string;
  description: string;
  links?: { label: string; href: string; icon?: any }[];
  props?: PropInfo[];
  children: React.ReactNode;
  prev?: { label: string; href: string };
  next?: { label: string; href: string };
}

export function ComponentPageLayout({ title, description, links, props, children, prev, next }: ComponentPageLayoutProps) {
  const defaultLinks = [
    { label: 'View source', href: '#', icon: ExternalLinkIcon },
    { label: 'Report an issue', href: '#', icon: ExclamationTriangleIcon },
    { label: 'View in Playground', href: '#', icon: PlayIcon },
  ];

  const displayLinks = links || defaultLinks;

  return (
    <div className="max-w-[986px] mx-auto space-y-16 py-12 px-0">
      {/* Header Section - Matched to Figma Design */}
      <header className="flex flex-col gap-[21px] items-start w-full">
        <h2 className="text-foreground font-raleway font-semibold text-[36px] leading-[36px]">{title}</h2>
        <p className="text-secondary-foreground font-inter text-[14px] leading-[22px]">
          {description}
        </p>
        <div className="flex flex-wrap gap-8 items-center h-[21px]">
          {displayLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <a 
                key={i} 
                href={link.href} 
                className="inline-flex items-center gap-2 text-foreground hover:text-mspbots-primary transition-colors group h-full"
              >
                {Icon && <Icon className="size-[15px] text-foreground group-hover:text-mspbots-primary" />}
                <span className="text-[14px] leading-[21px] font-inter">{link.label}</span>
              </a>
            );
          })}
        </div>
      </header>

      {/* Children will handle Main Preview, API Reference, and Examples */}
      <div className="space-y-20 pb-20">
        {children}
      </div>

      {/* Footer Navigation */}
      {(prev || next) && (
        <footer className="pt-12 border-t border-border flex justify-between items-center">
          {prev ? (
            <a href={prev.href} className="group flex flex-col items-start gap-1">
              <span className="text-muted-foreground uppercase tracking-widest">Previous</span>
              <span className="flex items-center gap-1 text-foreground group-hover:text-primary transition-colors">
                <ChevronLeftIcon /> {prev.label}
              </span>
            </a>
          ) : <div />}
          
          {next ? (
            <a href={next.href} className="group flex flex-col items-end gap-1">
              <span className="text-muted-foreground uppercase tracking-widest text-right">Next</span>
              <span className="flex items-center gap-1 text-foreground group-hover:text-primary transition-colors">
                {next.label} <ChevronRightIcon />
              </span>
            </a>
          ) : <div />}
        </footer>
      )}
    </div>
  );
}

interface ComponentSectionProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  code?: string;
}

export function ComponentSection({ title, description, children, code }: ComponentSectionProps) {
  const [isCodeExpanded, setIsCodeExpanded] = useState(false);

  return (
    <section className="space-y-6">
      {title && (
        <div className="space-y-2">
          <h4 className="text-foreground font-semibold text-[20px] leading-[28px] font-raleway">{title}</h4>
          {description && <p className="text-secondary-foreground text-[14px] leading-[22px]">{description}</p>}
        </div>
      )}
      
      <div className="space-y-0 border border-border rounded-[var(--radius-card)] overflow-hidden bg-background">
        <div className="p-12 flex items-center justify-center min-h-[160px]">
          {children}
        </div>
        {code && (
          <>
            <button
              onClick={() => setIsCodeExpanded(!isCodeExpanded)}
              className="w-full px-6 py-3 bg-muted/10 border-t border-border flex items-center justify-between hover:bg-muted/20 transition-colors text-[13px] text-muted-foreground font-medium group"
            >
              <span className="group-hover:text-foreground transition-colors">{isCodeExpanded ? 'Hide' : 'Show'} code</span>
              <ChevronDownIcon className={`size-[15px] transition-transform duration-200 ${isCodeExpanded ? 'rotate-180' : ''}`} />
            </button>
            {isCodeExpanded && (
              <div className="bg-muted/5 border-t border-border p-8 overflow-x-auto">
                <pre className="font-mono text-[13px] text-foreground/70 whitespace-pre-wrap leading-relaxed">
                  {code}
                </pre>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export function ApiReference({ props }: { props: PropInfo[] }) {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-foreground">API Reference</h2>
        <p className="text-muted-foreground">
          This component is based on the <code className="px-1.5 py-0.5 bg-muted/50 rounded-sm text-sm">button</code> element and inherits common margin props.
        </p>
      </div>
      <div className="border border-border rounded-[var(--radius-card)] overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-muted/20 border-b border-border">
              <th className="px-6 py-3 text-sm text-muted-foreground font-medium uppercase tracking-wider">Prop</th>
              <th className="px-6 py-3 text-sm text-muted-foreground font-medium uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-sm text-muted-foreground font-medium uppercase tracking-wider">Default</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {props.map((prop, i) => (
              <tr key={i} className="hover:bg-muted/5 transition-colors">
                <td className="px-6 py-4">
                  <code className="font-mono text-[13px] text-primary">{prop.name}</code>
                </td>
                <td className="px-6 py-4">
                  <code className="font-mono text-[13px] text-muted-foreground">{prop.type}</code>
                </td>
                <td className="px-6 py-4">
                  <span className="text-[13px] text-muted-foreground">{prop.default || '-'}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
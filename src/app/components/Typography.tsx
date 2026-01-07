import React from 'react';
import { CopyIcon } from '@radix-ui/react-icons';
import { toast } from 'sonner';
import { copyToClipboard } from '../utils/clipboard';

const TypographyItem = ({ 
  label, 
  sample, 
  details, 
  variable 
}: { 
  label: string; 
  sample: React.ReactNode; 
  details: string;
  variable?: string;
}) => {
  const handleCopy = async () => {
    if (variable) {
      await copyToClipboard(`var(${variable})`, `Copied ${variable} to clipboard`);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-6 rounded-lg border border-border bg-card hover:shadow-sm transition-all duration-200">
      <div className="flex items-start justify-between">
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{label}</span>
        {variable && (
          <button 
            onClick={handleCopy}
            className="text-xs flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded-md hover:bg-muted"
            title="Copy variable"
          >
            <code className="font-mono">{variable}</code>
            <CopyIcon className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
      <div className="py-2 border-b border-border/50">
        {sample}
      </div>
      <p className="text-sm text-muted-foreground font-mono">{details}</p>
    </div>
  );
};

export function Typography() {
  return (
    <div className="w-fit mx-auto space-y-10 pb-20">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Typography</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          The typographic system uses a combination of Raleway for headings and Inter for body text.
          All sizes are defined via CSS variables for consistency.
        </p>
      </div>

      <section className="space-y-6">
        <h3 className="text-lg font-semibold tracking-tight border-b border-border/40 pb-4">Headings</h3>
        <div className="grid gap-6">
          <TypographyItem 
            label="Heading 1" 
            variable="--text-h1"
            sample={<h1 className="m-0">The quick brown fox</h1>}
            details="Font: Raleway / Size: 47px / Weight: Semibold (600)"
          />
          <TypographyItem 
            label="Heading 2" 
            variable="--text-h2"
            sample={<h2 className="m-0">The quick brown fox</h2>}
            details="Font: Raleway / Size: 41px / Weight: Semibold (600)"
          />
          <TypographyItem 
            label="Heading 3" 
            variable="--text-h3"
            sample={<h3 className="m-0">The quick brown fox</h3>}
            details="Font: Raleway / Size: 36px / Weight: Semibold (600)"
          />
          <TypographyItem 
            label="Heading 4" 
            variable="--text-h4"
            sample={<h4 className="m-0">The quick brown fox</h4>}
            details="Font: Raleway / Size: 31px / Weight: Semibold (600)"
          />
        </div>
      </section>

      <section className="space-y-6">
        <h3 className="text-lg font-semibold tracking-tight border-b border-border/40 pb-4">Body</h3>
        <div className="grid gap-6">
          <TypographyItem 
            label="Base Text" 
            variable="--text-base"
            sample={<p className="m-0">The quick brown fox jumps over the lazy dog. It acts as a primary typeface for body text.</p>}
            details="Font: Inter / Size: 14px / Weight: Regular (400)"
          />
          <TypographyItem 
            label="Small Text" 
            variable="--text-sm"
            sample={<p className="m-0 text-[length:var(--text-sm)]">The quick brown fox jumps over the lazy dog. Used for captions and secondary text.</p>}
            details="Font: Inter / Size: 12px / Weight: Regular (400)"
          />
        </div>
      </section>

      <section className="space-y-6">
        <h3 className="text-lg font-semibold tracking-tight border-b border-border/40 pb-4">Weights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TypographyItem 
            label="Regular" 
            variable="--font-weight-regular"
            sample={<p className="m-0 font-[400] text-2xl">Aa</p>}
            details="Weight: 400"
          />
          <TypographyItem 
            label="Semibold" 
            variable="--font-weight-semibold"
            sample={<p className="m-0 font-[600] text-2xl">Aa</p>}
            details="Weight: 600"
          />
        </div>
      </section>
    </div>
  );
}
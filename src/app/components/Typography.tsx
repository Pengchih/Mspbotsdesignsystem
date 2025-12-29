import React from 'react';

export function Typography() {
  const styles = [
    { tag: 'h1', name: 'H1 Display', description: 'Used for main page titles' },
    { tag: 'h2', name: 'H2 Section', description: 'Used for section headers' },
    { tag: 'h3', name: 'H3 Subsection', description: 'Used for subsection headers' },
    { tag: 'h4', name: 'H4 Detail', description: 'Used for small titles' },
    { tag: 'p', name: 'Body Base', description: 'Main text content for paragraphs' },
    { tag: 'span', name: 'Caption/Label', description: 'Secondary text and labels' },
  ];

  return (
    <div className="space-y-20">
      <section>
        <div className="mb-12 pb-4 border-b border-border/40">
          <h3 className="tracking-tight mb-2">Typography System</h3>
          <p className="text-sm text-muted-foreground">Our type system ensures high readability and clean visual hierarchy.</p>
        </div>
        <div className="space-y-12">
          {styles.map((style) => {
            const Tag = style.tag as any;
            return (
              <div key={style.tag} className="grid grid-cols-1 md:grid-cols-4 gap-8 group">
                <div className="space-y-1 md:col-span-1 pt-1">
                  <span className="text-xs font-bold text-primary/80 uppercase tracking-widest">{style.tag}</span>
                  <p className="text-sm font-semibold text-foreground">{style.name}</p>
                  <p className="text-[11px] text-muted-foreground leading-relaxed mt-2">{style.description}</p>
                </div>
                <div className="md:col-span-3 flex items-center bg-muted/10 px-10 py-12 rounded-[var(--radius-card)] border border-border/20 transition-colors group-hover:bg-muted/20">
                  <Tag className="text-foreground leading-tight">
                    Sphinx of black quartz, judge my vow.
                  </Tag>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="pt-12 border-t border-border/40">
        <h4 className="mb-6 font-semibold">Implementation Guidelines</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h5 className="text-sm font-bold uppercase tracking-wider text-muted-foreground/60">Legibility</h5>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Font families are globally consistent, leveraging system fonts for maximum performance and native-like feel.
            </p>
          </div>
          <div className="space-y-4">
            <h5 className="text-sm font-bold uppercase tracking-wider text-muted-foreground/60">Structure</h5>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Maintain vertical rhythm by sticking to the defined line-heights and spacing tokens across all layouts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
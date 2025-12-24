import React from 'react';

export function Typography() {
  const styles = [
    { tag: 'h1', name: 'Heading 1', description: 'Used for main page titles' },
    { tag: 'h2', name: 'Heading 2', description: 'Used for section headers' },
    { tag: 'h3', name: 'Heading 3', description: 'Used for subsection headers' },
    { tag: 'h4', name: 'Heading 4', description: 'Used for small titles' },
    { tag: 'p', name: 'Body', description: 'Main text content for paragraphs' },
    { tag: 'span', name: 'Small/Label', description: 'Secondary text and labels' },
  ];

  return (
    <div className="space-y-12">
      <section>
        <h2 className="mb-8">Typography System</h2>
        <div className="space-y-8 divide-y divide-border">
          {styles.map((style) => {
            const Tag = style.tag as any;
            return (
              <div key={style.tag} className="pt-8 first:pt-0 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-1">
                  <span className="font-semibold text-foreground">{style.name}</span>
                  <p className="text-sm text-muted-foreground">{style.description}</p>
                </div>
                <div className="md:col-span-2 flex items-center bg-[#F8F9FA] p-8 rounded-lg border border-border/50">
                  <Tag className="text-foreground">
                    The quick brown fox jumps over the lazy dog.
                  </Tag>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-muted/30 p-8 rounded-xl border border-border">
        <h3 className="mb-4">Implementation Guidelines</h3>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          <li>Use H1 for the primary subject of each page.</li>
          <li>Maintain a clear hierarchy by not skipping heading levels.</li>
          <li>Body text is optimized for readability at 14px with 1.5 line height.</li>
          <li>All font families are defined in the system's global CSS variables.</li>
        </ul>
      </section>
    </div>
  );
}

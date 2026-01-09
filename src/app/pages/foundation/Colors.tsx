import React from 'react';
import { registryColors } from '../../../styles/registry-colors';

const SHADES = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const GRAYSCALE_SHADES = [50, 100, 200, 300, 400, 500, 550, 600, 650, 700, 750, 800, 900];

export function Colors() {
  const grayscaleData = {
    gray: registryColors.gray,
    slate: registryColors.slate,
  };

  const paletteData = Object.fromEntries(
    Object.entries(registryColors).filter(
      ([key]) => key !== 'gray' && key !== 'slate'
    )
  );

  return (
    <div className="w-full max-w-5xl mx-auto space-y-10 pb-20">
        <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Color Palette</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          The MSPBots color system is designed to be accessible, consistent, and semantic.
          All colors are defined as CSS variables.
        </p>
      </div>

      <div className="min-w-fit space-y-12">
        {/* Main Colors Section */}
        <div>
          {/* Header Row */}
          <div className="flex gap-2 mb-4 items-center">
            <div className="w-40 shrink-0" /> {/* Empty Label Column */}
            {SHADES.map((shade) => (
              <div 
                key={shade} 
                className="w-24 shrink-0 text-center text-sm font-medium text-muted-foreground"
              >
                {shade}
              </div>
            ))}
          </div>

          {/* Color Rows */}
          <div className="space-y-2">
            {Object.entries(paletteData).map(([colorName, shades]) => (
              <div key={colorName} className="flex gap-2 items-center">
                {/* Color Label */}
                <div className="w-40 shrink-0 text-base font-medium text-foreground capitalize">
                  {colorName}
                </div>

                {/* Swatches */}
                {SHADES.map((shade) => {
                  const colorInfo = shades.find(s => s.scale === shade);
                  if (!colorInfo) return <div key={shade} className="w-24 h-12 shrink-0" />;
                  
                  return (
                    <div
                      key={shade}
                      className="w-24 h-12 rounded bg-muted relative border border-black/5 shrink-0 transition-all duration-200 ease-in-out hover:shadow-sm hover:border-black/15 hover:z-10 cursor-help group"
                      style={{ 
                        backgroundColor: colorInfo.hex,
                      }}
                      title={`${colorName}-${shade}\nHex: ${colorInfo.hex}\nRGB: ${colorInfo.rgb}\nHSL: ${colorInfo.hsl}\nOKLCH: ${colorInfo.oklch}`}
                    >
                      {/* Primary Shade Indicator */}
                      {shade === 500 && (
                        <div className="absolute top-2 right-2 w-2.5 h-2.5 bg-white rounded-full shadow-sm ring-1 ring-black/10 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-white rounded-full" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Grayscale Section */}
        <div>
          {/* Header Row */}
          <div className="flex gap-2 mb-4 items-center">
            <div className="w-40 shrink-0" /> {/* Empty Label Column */}
            {GRAYSCALE_SHADES.map((shade) => (
              <div 
                key={shade} 
                className="w-24 shrink-0 text-center text-sm font-medium text-muted-foreground"
              >
                {shade}
              </div>
            ))}
          </div>

          {/* Color Rows */}
          <div className="space-y-2">
            {Object.entries(grayscaleData).map(([colorName, shades]) => (
              <div key={colorName} className="flex gap-2 items-center">
                {/* Color Label */}
                <div className="w-40 shrink-0 text-base font-medium text-foreground capitalize">
                  {colorName}
                </div>

                {/* Swatches */}
                {GRAYSCALE_SHADES.map((shade) => {
                  const colorInfo = shades.find(s => s.scale === shade);
                  if (!colorInfo) return <div key={shade} className="w-24 h-12 shrink-0" />;

                  return (
                    <div
                      key={shade}
                      className="w-24 h-12 rounded bg-muted relative border border-black/5 shrink-0 transition-all duration-200 ease-in-out hover:shadow-sm hover:border-black/15 hover:z-10 cursor-help"
                      style={{ 
                        backgroundColor: colorInfo.hex,
                      }}
                      title={`${colorName}-${shade}\nHex: ${colorInfo.hex}\nRGB: ${colorInfo.rgb}\nHSL: ${colorInfo.hsl}\nOKLCH: ${colorInfo.oklch}`}
                    >
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

export interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  /**
   * The reading direction of the slider.
   */
  dir?: 'ltr' | 'rtl';
  /**
   * The orientation of the slider.
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * Marks to display on the slider track.
   * Can be an array of numbers or objects with value and label.
   */
  marks?: boolean | number[] | Array<{ value: number; label: React.ReactNode }>;
}

export const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  ({ className, orientation = 'horizontal', marks, min = 0, max = 100, step = 1, ...props }, ref) => {
    
    // Determine marks to render
    let marksToRender: Array<{ value: number; label: React.ReactNode }> = [];
    
    if (Array.isArray(marks)) {
      marksToRender = marks.map(m => {
        if (typeof m === 'number') return { value: m, label: m.toString() };
        return m;
      });
    } else if (marks === true) {
      // Auto-generate marks based on step if reasonable count
      const range = max - min;
      const count = range / step;
      if (count <= 10) {
        for (let i = min; i <= max; i += step) {
          marksToRender.push({ value: i, label: i.toString() });
        }
      } else {
        // Just show min/max and maybe mid?
        marksToRender = [
          { value: min, label: min.toString() },
          { value: max, label: max.toString() }
        ];
      }
    }

    const rootClasses = [
      'mspbots-slider-root',
      `mspbots-slider-${orientation}`,
      'relative flex items-center select-none touch-none', // Base layout
      orientation === 'horizontal' ? 'w-full h-5' : 'flex-col w-5 h-full min-h-[100px]', // Orientation layout
      className
    ].filter(Boolean).join(' ');

    const isVertical = orientation === 'vertical';

    return (
      <SliderPrimitive.Root
        ref={ref}
        className={rootClasses}
        orientation={orientation}
        min={min}
        max={max}
        step={step}
        {...props}
      >
        <SliderPrimitive.Track className="mspbots-slider-track relative grow rounded-full bg-gray-200 h-1.5 w-full data-[orientation=vertical]:w-1.5 data-[orientation=vertical]:h-full">
          <SliderPrimitive.Range className="mspbots-slider-range absolute bg-blue-600 rounded-full h-full data-[orientation=vertical]:w-full" />
        </SliderPrimitive.Track>
        
        {/* Render Thumb(s) */}
        {/* Radix Slider requires we render as many Thumbs as there are values in defaultValue/value. 
            However, we don't know how many values are passed if it's controlled/uncontrolled without peeking.
            But we can just render one if we assume single, or map if we knew. 
            Radix documentation says: "Add a Thumb for each value you want to render."
            We can infer from props.defaultValue or props.value if provided.
        */}
        {(props.value || props.defaultValue || [0]).map((_, i) => (
          <SliderPrimitive.Thumb 
            key={i} 
            className="mspbots-slider-thumb block w-5 h-5 bg-background border-2 border-primary rounded-full shadow focus:outline-none focus:ring-4 focus:ring-primary/20 hover:scale-110 transition-transform"
            aria-label="Volume" 
          />
        ))}

        {/* Render Marks */}
        {marksToRender.length > 0 && (
          <div className="mspbots-slider-marks">
            {marksToRender.map((mark, index) => {
              const percent = ((mark.value - min) / (max - min)) * 100;
              const style = isVertical 
                ? { bottom: `${percent}%`, left: '20px' } // Adjust positioning for vertical
                : { left: `${percent}%`, top: '20px' };   // Adjust positioning for horizontal
              
              return (
                <div 
                  key={index} 
                  className="mspbots-slider-mark" 
                  style={style}
                >
                  {/* Mark Indicator (Dot) */}
                  <div className="mspbots-slider-mark-dot" />
                  {/* Mark Label */}
                  <span className="mspbots-slider-mark-label">
                    {mark.label}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </SliderPrimitive.Root>
    );
  }
);

Slider.displayName = 'Slider';

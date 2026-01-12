import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ProgressType = 'line' | 'circle' | 'dashboard';
export type ProgressSize = 'sm' | 'lg';
export type ProgressSemantic = 'brand' | 'success' | 'warning' | 'error';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The current value of the progress bar */
  value: number;
  /** The maximum value of the progress bar (default: 100) */
  max?: number;
  /** Number of segments to divide the progress bar into (default: 4). Only for 'line' type. */
  segments?: number;
  /** Size of the progress bar (only for 'line' type) */
  size?: ProgressSize;
  /** Semantic color of the progress bar */
  semantic?: ProgressSemantic;
  /** Type of the progress indicator */
  type?: ProgressType;
  /** Width/Height in pixels for circle/dashboard types (default: 100) */
  circleWidth?: number;
  /** Stroke width in pixels for circle/dashboard types (default: 8) */
  strokeWidth?: number;
  /** Whether to show the percentage value in the center (only for circle/dashboard) */
  showValue?: boolean;
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ 
    value, 
    max = 100, 
    segments = 4, 
    size = 'sm', 
    semantic = 'brand', 
    type = 'line',
    circleWidth = 100,
    strokeWidth = 8,
    showValue = false,
    className, 
    ...props 
  }, ref) => {
    // Clamp value between 0 and max
    const percentage = Math.min(Math.max(value, 0), max) / max * 100;
    
    // Semantic colors for Line (bg-)
    const bgColorMap: Record<ProgressSemantic, string> = {
      brand: 'bg-primary',
      success: 'bg-[var(--celery-500)]',
      warning: 'bg-[var(--orange-500)]',
      error: 'bg-destructive',
    };

    // Semantic colors for Circle/Dashboard (text- for stroke)
    const textColorMap: Record<ProgressSemantic, string> = {
      brand: 'text-primary',
      success: 'text-[var(--celery-500)]',
      warning: 'text-[var(--orange-500)]',
      error: 'text-destructive',
    };

    // --- Linear Progress ---
    if (type === 'line') {
      const heightClass = size === 'sm' ? 'h-2' : 'h-4';
      const activeColor = bgColorMap[semantic];

      return (
        <div
          ref={ref}
          className={cn("flex w-full gap-1", className)}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
          {...props}
        >
          {Array.from({ length: segments }).map((_, i) => {
            const segmentValue = 100 / segments;
            const segmentStart = i * segmentValue;
            
            // Calculate fill for this segment (0 to 100%)
            const fillPercentage = Math.min(Math.max((percentage - segmentStart) / segmentValue, 0), 1) * 100;

            return (
              <div
                key={i}
                className={cn(
                  "relative flex-1 bg-muted rounded-full overflow-hidden",
                  heightClass
                )}
              >
                <div
                  className={cn("h-full transition-all duration-300 ease-in-out rounded-full", activeColor)}
                  style={{ width: `${fillPercentage}%` }}
                />
              </div>
            );
          })}
        </div>
      );
    }

    // --- Circle / Dashboard Progress ---
    const radius = (circleWidth - strokeWidth) / 2;
    const isDashboard = type === 'dashboard';
    
    // Dashboard: 270 degrees (0.75 of circle), rotated -135deg
    // Circle: 360 degrees
    const circumference = 2 * Math.PI * radius;
    const dashArray = circumference;
    
    // For dashboard, we only use 75% of the circle
    const totalLength = isDashboard ? circumference * 0.75 : circumference;
    const dashOffset = circumference - (percentage / 100) * totalLength;
    
    // For dashboard track, we also limit it
    const trackDashOffset = isDashboard ? circumference * 0.25 : 0;

    const activeColor = textColorMap[semantic];

    return (
      <div
        ref={ref}
        className={cn("relative inline-flex items-center justify-center", className)}
        style={{ width: circleWidth, height: circleWidth }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        {...props}
      >
        <svg
          width={circleWidth}
          height={circleWidth}
          viewBox={`0 0 ${circleWidth} ${circleWidth}`}
          className={cn(isDashboard && "rotate-[135deg]")} // Rotate for dashboard start position
          style={{ transformOrigin: 'center' }}
        >
          {/* Track */}
          <circle
            cx={circleWidth / 2}
            cy={circleWidth / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-muted stroke-[var(--slate-200)]" // Using slate-200 for track
            strokeDasharray={dashArray}
            strokeDashoffset={trackDashOffset}
            strokeLinecap="round"
          />
          {/* Indicator */}
          <circle
            cx={circleWidth / 2}
            cy={circleWidth / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className={cn("transition-all duration-300 ease-in-out", activeColor)}
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
            transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`} // Start from top
          />
        </svg>
        
        {showValue && (
           <div className="absolute inset-0 flex items-center justify-center">
             <span className="text-sm font-medium text-foreground">
               {Math.round(percentage)}%
             </span>
           </div>
        )}
      </div>
    );
  }
);

Progress.displayName = "Progress";

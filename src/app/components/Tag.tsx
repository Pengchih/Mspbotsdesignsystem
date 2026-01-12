import React from 'react';
import { Cross2Icon } from '@radix-ui/react-icons';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type TagColor = 
  | 'seafoam' | 'blue' | 'celery' | 'orange' | 'red' | 'slate' 
  | 'yellow' | 'magenta' | 'indigo' | 'purple' | 'cyan' | 'green' | 'chartreuse' | 'gray';

export type TagVariant = 'solid' | 'plain' | 'outline';
export type TagSize = 'sm' | 'md';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** The color palette of the tag */
  color?: TagColor;
  /** The visual variant of the tag */
  variant?: TagVariant;
  /** The size of the tag */
  size?: TagSize;
  /** Whether the tag is fully rounded */
  round?: boolean;
  /** Icon to display on the left side */
  icon?: React.ReactNode;
  /** Callback when the close button is clicked. If provided, a close button will be shown. */
  onClose?: (e: React.MouseEvent) => void;
  /** Disabled state */
  disabled?: boolean;
}

export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ 
    color = 'slate', 
    variant = 'plain', 
    size = 'md', 
    round = false, 
    icon,
    onClose,
    disabled = false,
    className, 
    children,
    ...props 
  }, ref) => {

    // Helper to get CSS variables for colors
    const getColors = (c: TagColor, v: TagVariant) => {
      // Mapping for specific colors that might need adjustments
      const colorName = c.toLowerCase();
      
      if (v === 'solid') {
        return {
          bg: `var(--${colorName}-500)`,
          text: 'var(--white-0)',
          border: 'transparent'
        };
      } else if (v === 'outline') {
         return {
          bg: 'transparent',
          text: `var(--${colorName}-600)`,
          border: `var(--${colorName}-500)`
        };
      } else {
        // plain (default)
        return {
          bg: `var(--${colorName}-100)`,
          text: `var(--${colorName}-700)`,
          border: `var(--${colorName}-200)`
        };
      }
    };

    const colors = getColors(color, variant);

    const baseClasses = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
    
    const sizeClasses = {
      sm: "h-6 px-2 text-xs",
      md: "h-7 px-3 text-sm",
    };

    const roundClasses = round ? "rounded-full" : "rounded-[4px]";
    
    const disabledClasses = disabled ? "opacity-50 pointer-events-none cursor-not-allowed" : "cursor-default";

    return (
      <span
        ref={ref}
        className={cn(
          baseClasses,
          sizeClasses[size],
          roundClasses,
          disabledClasses,
          className
        )}
        style={{
          backgroundColor: colors.bg,
          color: colors.text,
          border: variant !== 'solid' ? `1px solid ${colors.border}` : undefined,
          ...props.style
        }}
        {...props}
      >
        {icon && <span className="mr-1.5 flex items-center justify-center">{icon}</span>}
        {children}
        {onClose && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose(e);
            }}
            className={cn(
              "ml-1.5 -mr-1 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
              "hover:bg-black/10"
            )}
            aria-label="Remove tag"
          >
            <Cross2Icon className="h-3.5 w-3.5" />
          </button>
        )}
      </span>
    );
  }
);

Tag.displayName = "Tag";

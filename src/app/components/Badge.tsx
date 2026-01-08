import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Badge variant */
  variant?: 'primary' | 'secondary' | 'outline' | 'destructive';
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'primary', className, ...props }, ref) => {
    const variantClass = `mspbots-badge-${variant}`;
    const badgeClasses = ['mspbots-badge', variantClass, className]
      .filter(Boolean)
      .join(' ');

    return <span ref={ref} className={badgeClasses} {...props} />;
  }
);

Badge.displayName = 'Badge';

import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Badge type */
  type?: 'primary' | 'error' | 'info' | 'success';
  /** Whether to show as a dot */
  dot?: boolean;
  /** @deprecated Use type instead */
  variant?: 'primary' | 'secondary' | 'outline' | 'destructive';
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ type = 'primary', dot = false, variant, className, children, ...props }, ref) => {
    // Map legacy variant to type
    let finalType = type;
    if (variant) {
      if (variant === 'destructive') finalType = 'error';
      else if (variant === 'secondary') finalType = 'info';
      else if (variant === 'outline') finalType = 'info'; 
      else if (variant === 'primary') finalType = 'primary';
    }

    const typeClass = `mspbots-badge-${finalType}`;
    const dotClass = dot ? 'mspbots-badge-dot' : '';

    const badgeClasses = ['mspbots-badge', typeClass, dotClass, className]
      .filter(Boolean)
      .join(' ');

    return <span ref={ref} className={badgeClasses} {...props}>{!dot && children}</span>;
  }
);

Badge.displayName = 'Badge';

import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    const cardClasses = ['mspbots-card', className].filter(Boolean).join(' ');
    return <div ref={ref} className={cardClasses} {...props} />;
  }
);

Card.displayName = 'Card';

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => {
    const headerClasses = ['mspbots-card-header', className]
      .filter(Boolean)
      .join(' ');
    return <div ref={ref} className={headerClasses} {...props} />;
  }
);

CardHeader.displayName = 'CardHeader';

export interface CardTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => {
    const titleClasses = ['mspbots-card-title', className]
      .filter(Boolean)
      .join(' ');
    return <h3 ref={ref} className={titleClasses} {...props} />;
  }
);

CardTitle.displayName = 'CardTitle';

export interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(({ className, ...props }, ref) => {
  const descClasses = ['mspbots-card-description', className]
    .filter(Boolean)
    .join(' ');
  return <p ref={ref} className={descClasses} {...props} />;
});

CardDescription.displayName = 'CardDescription';

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => {
    const contentClasses = ['mspbots-card-content', className]
      .filter(Boolean)
      .join(' ');
    return <div ref={ref} className={contentClasses} {...props} />;
  }
);

CardContent.displayName = 'CardContent';

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => {
    const footerClasses = ['mspbots-card-footer', className]
      .filter(Boolean)
      .join(' ');
    return <div ref={ref} className={footerClasses} {...props} />;
  }
);

CardFooter.displayName = 'CardFooter';

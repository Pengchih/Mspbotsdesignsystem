import React from 'react';

export interface AvatarProps {
  /** Image source URL */
  src?: string;
  /** Alt text for image */
  alt?: string;
  /** Fallback text (initials) */
  fallback?: string;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Additional class name */
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  fallback,
  size = 'md',
  className,
}) => {
  const [imgError, setImgError] = React.useState(false);

  const sizeClass = `mspbots-avatar-${size}`;
  const avatarClasses = ['mspbots-avatar', sizeClass, className]
    .filter(Boolean)
    .join(' ');

  const showFallback = !src || imgError;

  return (
    <div className={avatarClasses}>
      {showFallback ? (
        <span className="mspbots-avatar-fallback">
          {fallback || alt?.charAt(0).toUpperCase() || '?'}
        </span>
      ) : (
        <img
          src={src}
          alt={alt}
          className="mspbots-avatar-img"
          onError={() => setImgError(true)}
        />
      )}
    </div>
  );
};

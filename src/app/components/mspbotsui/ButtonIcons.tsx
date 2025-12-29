import React from 'react';
import svgPaths from '../../../imports/svg-1ng10heswr';

interface IconProps {
  className?: string;
  fill?: string;
}

// Left Icon (14x14) with pda746f0 path
export function CircleIcon({ className = 'size-3.5', fill = 'currentColor' }: IconProps) {
  return (
    <svg className={className} fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
      <path 
        clipRule="evenodd" 
        d={svgPaths.pda746f0} 
        fill={fill} 
        fillRule="evenodd" 
      />
    </svg>
  );
}

// Right Icon (16x16) with p30eb1b71 path
export function CircleIconLarge({ className = 'size-4', fill = 'currentColor' }: IconProps) {
  return (
    <svg className={className} fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <path 
        clipRule="evenodd" 
        d={svgPaths.p30eb1b71} 
        fill={fill} 
        fillRule="evenodd" 
      />
    </svg>
  );
}
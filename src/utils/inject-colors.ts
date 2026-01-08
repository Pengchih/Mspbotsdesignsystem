import { registryColors } from '../styles/registry-colors';

/**
 * Inject color variables from registry-colors.ts into CSS custom properties
 * This ensures a single source of truth for colors across the application
 */
export function injectColorVariables() {
  const root = document.documentElement;
  
  Object.entries(registryColors).forEach(([colorName, shades]) => {
    shades.forEach((shade) => {
      const varName = `--${colorName}-${shade.scale}`;
      root.style.setProperty(varName, shade.hex);
    });
  });
}

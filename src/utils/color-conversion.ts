import { converter, formatRgb, formatHsl, formatHex, Color } from 'culori';

const toRgb = converter('rgb');
const toHsl = converter('hsl');
const toOklch = converter('oklch');

export function hexToRgb(hex: string): string {
  const color = toRgb(hex);
  if (!color) return '';
  return formatRgb(color);
}

export function hexToHsl(hex: string): string {
  const color = toHsl(hex);
  if (!color) return '';
  return formatHsl(color);
}

export function hexToOklch(hex: string): string {
  const color = toOklch(hex);
  if (!color) return '';
  
  // Format OKLCH manually as culori might not have a standard css string formatter for it in all versions,
  // or we want a specific precision.
  // CSS format: oklch(L C H) or oklch(L C H / A)
  // L is 0-1 (usually displayed as %)
  // C is unbounded but usually 0-0.4
  // H is 0-360
  
  const l = (color.l * 100).toFixed(2) + '%';
  const c = color.c.toFixed(4);
  const h = (color.h || 0).toFixed(2);
  const alpha = color.alpha !== undefined && color.alpha < 1 ? ` / ${color.alpha}` : '';
  
  return `oklch(${l} ${c} ${h}${alpha})`;
}

export function getContrastColor(hex: string): string {
  // Simple brightness check
  const rgb = toRgb(hex);
  if (!rgb) return '#000000';
  const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
  return brightness > 0.5 ? '#000000' : '#FFFFFF';
}

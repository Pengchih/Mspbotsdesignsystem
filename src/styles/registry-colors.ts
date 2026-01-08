// This file is auto-generated. Do not edit directly.
// Source: MSPBots Design System

export interface ColorShade {
  scale: number;
  hex: string;
  rgb: string;
  hsl: string;
  oklch: string;
}

export type ColorPalette = Record<string, ColorShade[]>;

const colors = {
  yellow: {
    100: "#FFFBE6",
    200: "#FFF1B8",
    300: "#FFE58F",
    400: "#FFD666",
    500: "#F9C200",
    600: "#D4A100",
    700: "#AD8100",
    800: "#876200",
    900: "#614400",
  },
  orange: {
    100: "#FFF4E5",
    200: "#FFE3C2",
    300: "#FFC98A",
    400: "#FBA84D",
    500: "#F68511",
    600: "#D46B08",
    700: "#A65106",
    800: "#7A3A04",
    900: "#4D2402",
  },
  red: {
    100: "#FEEEED",
    200: "#FDCEC9",
    300: "#FA9F96",
    400: "#F26659",
    500: "#EA3829",
    600: "#D13225",
    700: "#A6271D",
    800: "#7B1C15",
    900: "#50110D",
  },
  magenta: {
    100: "#FEEFF6",
    200: "#FCD6E7",
    300: "#FA9EC9",
    400: "#F660A6",
    500: "#F22283",
    600: "#D11D71",
    700: "#A61759",
    800: "#7A1142",
    900: "#4D0B29",
  },
  purple: {
    100: "#F4EBFD",
    200: "#E6D2FA",
    300: "#D0ADF6",
    400: "#B376F3",
    500: "#9537F0",
    600: "#7D2ECB",
    700: "#62249E",
    800: "#461972",
    900: "#2D1148",
  },
  indigo: {
    100: "#F0F0FF",
    200: "#E1E2FE",
    300: "#C2C5FD",
    400: "#989BFE",
    500: "#676DFD",
    600: "#565CD5",
    700: "#4449AA",
    800: "#32367E",
    900: "#1F214C",
  },
  blue: {
    100: "#E8F3FF",
    200: "#C6E0FF",
    300: "#91C5FF",
    400: "#52A4FF",
    500: "#147AF3",
    600: "#116DDB",
    700: "#0D59B3",
    800: "#09428C",
    900: "#062B54",
  },
  cyan: {
    100: "#E8F6F9",
    200: "#C1E9F4",
    300: "#8ED3E8",
    400: "#47BCDE",
    500: "#019CC8",
    600: "#0189B0",
    700: "#016A89",
    800: "#014B61",
    900: "#002C38",
  },
  seafoam: {
    100: "#E9F8F7",
    200: "#CEF0EB",
    300: "#93E2D8",
    400: "#52CCBF",
    500: "#17B3A3",
    600: "#139E8F",
    700: "#0E7A6F",
    800: "#0A5B53",
    900: "#073D37",
  },
  green: {
    100: "#E8F6F1",
    200: "#C6F0DB",
    300: "#92E5C5",
    400: "#52D09D",
    500: "#15A46E",
    600: "#118C5E",
    700: "#0D704A",
    800: "#0A5538",
    900: "#063A26",
  },
  celery: {
    100: "#F2FAEC",
    200: "#E2F4D9",
    300: "#C2E8AF",
    400: "#91D569",
    500: "#67C23A",
    600: "#58AD2E",
    700: "#41821F",
    800: "#2B5814",
    900: "#162E0A",
  },
  chartreuse: {
    100: "#F8FDE0",
    200: "#F0F9B7",
    300: "#E4F388",
    400: "#CFE64A",
    500: "#B6D307",
    600: "#9FBA06",
    700: "#7A8F05",
    800: "#566504",
    900: "#333B02",
  },
  gray: {
    50: "#FCFCFC",
    100: "#F7F7F7",
    200: "#E8E8E8",
    300: "#D9D9D9",
    400: "#BBBBBB",
    500: "#ACACAC",
    550: "#999999",
    600: "#808080",
    650: "#757575",
    700: "#666666",
    750: "#4D4D4D",
    800: "#333333",
    900: "#1A1A1A",
  },
  slate: {
    50: "#FCFCFD",
    100: "#F5F7FA",
    200: "#EBEEF5",
    300: "#DCDFE6",
    400: "#C0C4CC",
    500: "#B0B5BF",
    550: "#A0A5AD",
    600: "#909399",
    650: "#787A7F",
    700: "#606266",
    750: "#48494D",
    800: "#303133",
    900: "#1B1C1D",
  },
  white: {
    0: "#FFFFFF"
  },
  black: {
    0: "#000000"
  }
};

// Helper to convert Hex to RGB (simplified)
function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : '';
}

// Generate the registry
export const registryColors: ColorPalette = {};

for (const [color, shades] of Object.entries(colors)) {
  registryColors[color] = Object.entries(shades).map(([scale, hex]) => ({
    scale: parseInt(scale),
    hex: hex as string,
    rgb: hexToRgb(hex as string),
    hsl: 'hsl(0, 0%, 0%)', // Placeholder
    oklch: 'oklch(0% 0 0)', // Placeholder
  }));
}

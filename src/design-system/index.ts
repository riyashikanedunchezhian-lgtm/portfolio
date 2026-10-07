import React, { ReactNode } from 'react';
import { colors } from './colors';
import { spacing } from './spacing';
import { fontSizes } from './font-sizes';
import { fontFamilies } from './fontFamilies';
import { lineHeights } from './lineHeights';
import { radii } from './radii';
import { zIndices } from './zIndices';

export interface ThemeProviderProps {
  theme: Record<string, any>;
  children: ReactNode;
}

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  return React.createElement(React.Fragment, null, children);
};

export const createTheme = (theme: Record<string, any>) => {
  return theme;
};

export { colors, spacing, fontSizes, fontFamilies, lineHeights, radii, zIndices };
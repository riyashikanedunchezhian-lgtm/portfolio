import { type Config } from 'tailwindcss';
import { colors, spacing, fontSizes, fontFamilies, lineHeights, radii, zIndices } from './src/design-system';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors,
      spacing,
      fontSize: fontSizes,
      fontFamily: fontFamilies,
      lineHeight: lineHeights,
      borderRadius: radii,
      typography: {
        quotebase: {
          '': {
            'figcaption': { '@type': 'figcaption' },
          },
        },
      },
    },
  },
  plugins: [require('tailwindcss/plugin')],
} satisfies Config;
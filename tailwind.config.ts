import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0F172A', // slate-900
          light: '#1E293B',
        },
        cta: {
          DEFAULT: '#2563EB', // blue-600
          hover: '#1D4ED8',
        },
      },
    },
  },
  plugins: [],
}

export default config


import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#f6f4ee',
        ink: '#1f2937',
        accent: '#8b5e3c',
        muted: '#6b7280',
        border: '#e5e7eb',
        surface: '#ffffff',
      },
    },
  },
  plugins: [],
};

export default config;

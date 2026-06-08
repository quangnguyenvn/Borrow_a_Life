import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        paper: '#f7f3ed',
        ink: '#1d1b18',
        muted: '#706a61',
        line: '#ded5c8',
        ember: '#ff5a36',
        moss: '#315b45',
        skydeep: '#203a54'
      },
      boxShadow: {
        soft: '0 24px 70px rgba(29, 27, 24, 0.08)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
} satisfies Config;

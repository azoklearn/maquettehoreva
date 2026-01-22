import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs principales HOREVA
        navy: {
          50: '#e6eaed',
          100: '#c0cad2',
          200: '#96a8b5',
          300: '#6c8698',
          400: '#4d6c82',
          500: '#2e536d',
          600: '#284a63',
          700: '#1f3e54',
          800: '#173346',
          900: '#0B1C2D', // Bleu marine profond principal
          950: '#060e17',
        },
        gold: {
          50: '#fdf9ef',
          100: '#f9f0d5',
          200: '#f2dfa9',
          300: '#e9c873',
          400: '#C9A24D', // Or patiné principal
          500: '#d4a84a',
          600: '#c08c30',
          700: '#a06d28',
          800: '#835728',
          900: '#6c4824',
          950: '#3d2511',
        },
        // Couleurs neutres luxe
        cream: '#FAF8F5',
        charcoal: '#1A1A1A',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'serif'],
        body: ['var(--font-raleway)', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['2rem', { lineHeight: '1.3' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-luxury': 'linear-gradient(135deg, #0B1C2D 0%, #173346 50%, #0B1C2D 100%)',
        'gradient-gold': 'linear-gradient(135deg, #C9A24D 0%, #e9c873 50%, #C9A24D 100%)',
      },
      boxShadow: {
        'luxury': '0 25px 50px -12px rgba(11, 28, 45, 0.25)',
        'luxury-lg': '0 35px 60px -15px rgba(11, 28, 45, 0.35)',
        'gold': '0 10px 40px -10px rgba(201, 162, 77, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

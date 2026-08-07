/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        // Tokens que cambian con el tema (ver index.css)
        soft: 'hsl(var(--soft))',
        eyebrow: 'hsl(var(--eyebrow))',
        accent: 'hsl(var(--accent))',
        cta: {
          DEFAULT: 'hsl(var(--cta))',
          foreground: 'hsl(var(--cta-foreground))',
        },
        jungle: {
          50: '#f2f7f3',
          100: '#dfece2',
          200: '#c1d9c8',
          300: '#96bea4',
          400: '#679d7c',
          500: '#46805e',
          600: '#33664a',
          700: '#28523c',
          800: '#224232',
          900: '#1c372b',
          950: '#0e1f17',
        },
        sand: {
          50: '#faf7f0',
          100: '#f3ecdd',
          200: '#e6d7ba',
          300: '#d6bc8f',
          400: '#c69d63',
          500: '#bb8a4c',
          600: '#a97440',
          700: '#8d5c37',
          800: '#724b32',
          900: '#5d3f2b',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Outfit"', 'system-ui', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'fade-up': 'fadeUp 0.8s ease-out both',
        'slow-zoom': 'slowZoom 18s ease-in-out infinite alternate',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        },
      },
    },
  },
  plugins: [],
}

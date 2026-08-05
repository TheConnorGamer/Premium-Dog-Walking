/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        terracotta: '#d4845a',
        'terracotta-light': '#e8a87c',
        cream: '#faf7f2',
        'cream-dark': '#f0ebe0',
        sage: '#7d9b76',
        'sage-light': '#a3b89d',
        bark: '#3d2c2a',
        'bark-light': '#5a4543',
        sand: '#e8d5c4',
        warm: '#f5e6d3'
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        script: ['"Caveat"', 'cursive']
      },
      borderRadius: {
        'blob': '30% 70% 70% 30% / 30% 30% 70% 70%',
        'blob2': '60% 40% 30% 70% / 60% 30% 70% 40%',
      },
      backgroundImage: {
        'warm-radial': 'radial-gradient(circle at 50% 0%, #faf7f2 0%, #f0ebe0 100%)',
        'terracotta-gradient': 'linear-gradient(135deg, #d4845a 0%, #e8a87c 100%)',
        'sage-gradient': 'linear-gradient(135deg, #7d9b76 0%, #a3b89d 100%)',
      },
      animation: {
        'wag': 'wag 0.5s ease-in-out infinite alternate',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'float-soft': 'floatSoft 8s ease-in-out infinite',
        'reveal-up': 'revealUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'peek': 'peek 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        wag: {
          '0%': { transform: 'rotate(-5deg)' },
          '100%': { transform: 'rotate(5deg)' }
        },
        floatSoft: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(1deg)' },
          '66%': { transform: 'translateY(5px) rotate(-1deg)' }
        },
        revealUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        peek: {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' }
        }
      }
    }
  },
  plugins: []
}
